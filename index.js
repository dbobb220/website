// add click event to each

let aboutOptions = document.querySelectorAll(".options div");

let aboutSwitch = tab => {
  let options = {
    general: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    professional: `<p>Lacus vestibulum sed arcu non. Diam vulputate ut pharetra sit amet aliquam id diam. Cursus turpis massa tincidunt dui ut ornare lectus. Natoque penatibus et magnis dis parturient montes nascetur. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Etiam non quam lacus suspendisse faucibus interdum. Duis tristique sollicitudin nibh sit amet commodo. /p>`,
    personal: `<p>Eget sit amet tellus cras adipiscing enim eu turpis egestas. Euismod in pellentesque massa placerat duis ultricies lacus sed. Tristique senectus et netus et malesuada fames ac. Purus semper eget duis at tellus. Arcu vitae elementum curabitur vitae nunc. Risus in hendrerit gravida rutrum quisque non tellus. </p>`,
    interest: `<p>Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Euismod in pellentesque massa placerat duis ultricies lacus. Natoque penatibus et magnis dis parturient montes nascetur. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu consequat ac felis donec et odio pellentesque diam. </p>`
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
