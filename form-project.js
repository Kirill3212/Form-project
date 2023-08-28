const selector = document.getElementById("selector");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const aboutInput = document.getElementById("about");
const submitBtn = document.getElementById("submitBtn");
const userData = document.querySelector(".user-data");
const userDataInput = document.querySelector(".user-data-input");

// show/hide spinner/fieldSet
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
  // hide/show spinner/fieldSet
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

// Showing brief info with submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // show user data
  userData.style.display = "block";
  userDataInput.innerHTML = `${
    data[selector.selectedIndex].profile.name
  }'s adress is ${data[selector.selectedIndex].profile.address}`;

  // checking if the person is admin
  if (data[selector.selectedIndex].roles.includes("admin")) {
    let id = Array.from(data[selector.selectedIndex].id);
    let numbers = "";

    for (let i = 0; i < id.length; i++) {
      if (Number(id[i]) || Number(id[i]) == 0) numbers += id[i];
      else if (!Number(id[i]) && Number(id[i - 1])) {
        switch (id[i]) {
          case "a":
            numbers += "-10--";
            break;
          case "b":
            numbers += "-11--";
            break;
          case "c":
            numbers += "-12--";
            break;
          case "d":
            numbers += "-13--";
            break;
          case "e":
            numbers += "-14--";
            break;
          case "f":
            numbers += "-15--";
            break;
        }
      }
    }

    let numbersPair = numbers.split("--");
    let numbersPairArrays = numbersPair.map((pair) => {
      return pair.split("-");
    });
    const resultPin = numbersPairArrays.map((pair) => {
      if (!pair[1]) {
        return Number(pair[0]) + 100;
      } else return +pair[0] + +pair[1];
    });
    const resultNumber = resultPin.reduce((acc, n) => {
      return (acc += n);
    });
    console.log(resultNumber);
    // end of checking if the person is admin

    // show admin data
    userData.style.display = "block";
    userDataInput.innerHTML = `The admin's pincode from ${
      data[selector.selectedIndex].id
    } is ${resultNumber}`;
  }
});
