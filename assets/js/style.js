const DATA = [
  {
    id: 0,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 1,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 2,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let current = 0;

let left = document.getElementById("toLeft");
let right = document.getElementById("toRight");
let cover = document.getElementById("coverImg");
let title = document.getElementById("introTitle");
let text = document.getElementById("introText");

// navigation

let menuIcon = document.getElementById("menuIcon");
let navListSm = document.getElementById("navListSm");
let navHeaderSm = document.getElementById("navHeaderSm");

navHeaderSm.style.backgroundColor = "transparent";
navListSm.style.display = "none";

menuIcon.addEventListener("click", () => {
  console.log(menuIcon.className);
  if (menuIcon.className === "fa fa-bars fa-2x") {
    menuIcon.className = "fa fa-times fa-2x";
    menuIcon.style.color = "#000000";
    navHeaderSm.style.backgroundColor = "#ffffff";
    navListSm.style.display = "flex";
  } else {
    menuIcon.className = "fa fa-bars fa-2x";
    menuIcon.style.color = "#ffffff";
    navHeaderSm.style.backgroundColor = "transparent";
    navListSm.style.display = "none";
  }
});

if (screen.width > 950) {
  cover.src = "./assets/images/desktop-image-hero-" + current + ".jpg";
} else {
  cover.src = "./assets/images/mobile-image-hero-" + current + ".jpg";
}

title.innerText = DATA[current].title;
text.innerText = DATA[current].text;

left.addEventListener("click", () => {
  if (current === 0) {
    current = 2;
  } else {
    current -= 1;
  }
  if (screen.width > 950) {
    cover.src = "./assets/images/desktop-image-hero-" + current + ".jpg";
  } else {
    cover.src = "./assets/images/mobile-image-hero-" + current + ".jpg";
  }
  $("#introTitle").fadeOut();
  $("#introText").fadeOut();
  title.innerText = DATA[current].title;
  text.innerText = DATA[current].text;
  $("#introTitle").fadeIn();
  $("#introText").fadeIn();
});
right.addEventListener("click", () => {
  if (current === 2) {
    current = 0;
  } else {
    current += 1;
  }
  if (screen.width > 950) {
    cover.src = "./assets/images/desktop-image-hero-" + current + ".jpg";
  } else {
    cover.src = "./assets/images/mobile-image-hero-" + current + ".jpg";
  }
  $("#introTitle").fadeOut();
  $("#introText").fadeOut();
  title.innerText = DATA[current].title;
  text.innerText = DATA[current].text;
  $("#introTitle").fadeIn();
  $("#introText").fadeIn();
});
