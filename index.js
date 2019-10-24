// add click event to each

let aboutOptions = document.querySelectorAll(".options div");

let aboutSwitch = tab => {
  let options = {
    general: `<p>At the heart of it all, I am a tenacious problem solver.</p><p>Whether it's taking charge and ownership over a task, or taking time to learn and plot out a challenge, I understand that each goal can have a different approach.</p><p>Once the challenge is complete, it is important to review what was learned and improve for the next time.</p>`,
    professional: `<p>I have always had a fascination for learning and understanding how things are developed. Be it optimized procedures, tech itself, custom practices, automation, design, etc.</p><p> This fascination has allowed me to disect an issue, find my role, then figure out how I can complete faster, ultimately teaching others how to follow suit.</p><p>Pairing this approach with my leadership qualities, has allowed me to easily move into leadership roles and help stear teams towards success.</p>`,
    personal: `<p>Growing up I was geared towards group sports, and community events. I've lived 7 different countries and have traveled to many more.</p><p>Those experiences not only gave me an open-minded and observer mentality, they have given me an appreciation for the diversity and cultural richnesses there is in this world.</p><p>I believe our ability to approach things, similar to our world view, are shaped by our experiences. I like to think that my third world rearing has taught me that there are multiple ways to think and take on every challenge in life.<p/><p>Each person, each team, each unit, can have a solid part to play.</p>`,
    interest: `<p>As said in my other bios, I, above all things, love learning. This love of learning has allowed me to exercise both hemispheres of my brain by teaching myself new skills like: coding, guitar, wood-working, gardening, data structures and algorithms, etc.</p><p>I am satisfied resting for the night when I can assure myself that I either learned something new or practiced something I was previously learning - ultimately improving that skill.</p><p>I also love being active. Be it hiking, working out, or playing the sports (not to mention watching them too!) - I have a personal belief that an active life, is a healthier life; mind and body.</p>`
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

setTimeout(() => {
  document.querySelector("body").classList.add("overlay");
  document.querySelector(".popup").classList.add("active");
}, 1500);

let closePopUp = () => {
  document.querySelector("body").classList.remove("overlay");
  document.querySelector(".popup").classList.remove("active");
};
