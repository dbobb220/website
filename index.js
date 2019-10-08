// add click event to each

let aboutOptions = document.querySelectorAll(".options div");

let aboutSwitch = tab => {
  let options = {
    general: `<p>Hello General</p>`,
    professional: `<p>Hello Prof</p>`,
    personal: `<p>Hello Pers</p>`,
    interest: `<p>Hello Interest</p>`
  };
  document.querySelector(".options .active").classList.remove("active");
  tab.classList.add("active");
  let aboutText = options[tab.classList[0]];
  let container = document.querySelector("#about_container");
  container.innerHTML = aboutText;
};

for (let i = 0; i < aboutOptions.length; i++) {
  aboutOptions[i].addEventListener("click", () => {
    aboutSwitch(aboutOptions[i]);
  });
}
