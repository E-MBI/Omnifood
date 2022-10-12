// start Global Varialbes
let menu = document.querySelector("header div.menu");
let linksLi = document.querySelectorAll("header nav ul li");
let btnFree = document.querySelector("header button");
let Spans = document.querySelectorAll(" .menu span");
let firstSpan = document.querySelector(" .menu span:first-child ");
let spanHidden = document.querySelector(" div.menu > span:nth-child(2)");
let lastSpan = document.querySelector(" .menu span:last-child ");
let nav = document.querySelector("header nav");
let header = document.querySelector("header");
let Hero_sec_cont = document.querySelector(".Hero-sec >.container");

// end  Global Varialbes

// start header
menu.addEventListener("click", () => {
  //open&close menu function
  openMenu(nav, linksLi, btnFree);

  //that rotate arrow figure of menu
  RotatArrowMenu();
});

//open&close menu function
function openMenu(nav, arrLinks, btn) {
  //open menu
  nav.classList.toggle("open_menu");

  //close the menu in mobile screen when press btn
  btn.addEventListener("click", () => {
    nav.classList.remove("open_menu");
    //that rotate arrow figure of menu
    RotatArrowMenu();
  });

  //close the menu in mobile screen when press over link
  arrLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open_menu");
      //that rotate arrow figure of menu
      RotatArrowMenu();
    });
  });
}

//that rotate arrow figure of menu
function RotatArrowMenu() {
  for (let i = 0; i < Spans.length; i++) {
    const span = Spans[i];
    span.classList.toggle("icon");
    Spans[0].classList.toggle("iconR");
    Spans[Spans.length - 1].classList.toggle("iconL");
    spanHidden.classList.toggle("hiddenSpan");
    menu.style.padding = "20px 6px";
  }
}

//scrolling function
function scrolling() {
  window.addEventListener("scroll", () => {
    headPosition();
  });
}
scrolling();

//make the head position sticky
function headPosition() {
  if (window.scrollY >= 615) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// end header
