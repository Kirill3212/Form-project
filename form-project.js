const selector = document.getElementById("selector");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const aboutInput = document.getElementById("about");

const spinner = document.getElementById("spinner");
spinner.style.display = "block";

const fieldSet = document.querySelector("fieldset");
fieldSet.style.display = "none";

let data;

// Getting data
setTimeout(function () {
  fetch("https://api.json-generator.com/templates/wKDcM2BFgmwe/data", {
    headers: {
      Authorization: "Bearer jj67l6k3yan4yxdrccuepnoole4rj4hilo5a85r8",
    },
  })
    .then((r) => r.json())
    .then((r) => {
      data = r;
      // default values
      nameInput.value = data[selector.selectedIndex].profile.name;
      dateInput.value = data[selector.selectedIndex].profile.dob;
      emailInput.value = data[selector.selectedIndex].email;
      aboutInput.value = data[selector.selectedIndex].profile.about;
      console.log(data);
    });
  spinner.style.display = "none";
  fieldSet.style.display = "block";
}, 1000);

// Display chosen user
selector.addEventListener("change", function () {
  // ------------ for me to remember that selector has options property  ------------
  // const currentOption = selector.options[selector.selectedIndex];
  // console.log(currentOption.value);
  console.log(data[selector.selectedIndex]);
  nameInput.value = data[selector.selectedIndex].profile.name;
  dateInput.value = data[selector.selectedIndex].profile.dob;
  emailInput.value = data[selector.selectedIndex].email;
  aboutInput.value = data[selector.selectedIndex].profile.about;
});
