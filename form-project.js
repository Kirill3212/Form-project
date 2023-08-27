const spinner = document.getElementById("spinner");
spinner.style.display = "block";

const fieldSet = document.querySelector("fieldset");
fieldSet.style.display = "none";

setTimeout(function () {
  fetch("https://api.json-generator.com/templates/wKDcM2BFgmwe/data", {
    headers: {
      Authorization: "Bearer jj67l6k3yan4yxdrccuepnoole4rj4hilo5a85r8",
    },
  })
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
    });
  spinner.style.display = "none";
  fieldSet.style.display = "block";
}, 3000);
