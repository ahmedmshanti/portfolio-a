let btn = document.querySelector("button");
let listItem = document.querySelector("ul");
let btnUp = document.querySelector(".btnUp");
let btnDown = document.querySelector(".mouse");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav .container ul li a");
let navBar = document.querySelector("nav");
let Html = document.querySelector('.progress .html')
let Css = document.querySelector('.progress .css')
let Js = document.querySelector('.progress .js')
let Bootstrap = document.querySelector('.progress .bootstrap')
btn.onclick = function () {
  listItem.classList.toggle("show");
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};



window.onscroll = () => {
  if (window.scrollY >= 300) {
    navBar.style.backgroundColor = "#ddd";
    btnUp.style.display = "block";

  } else {
    navBar.style.backgroundColor = "null";
    btnUp.style.display = "none";

  }


  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 300) {
      links.forEach((link) => {
        if (link.getAttribute("href") == "#" + section.getAttribute("id")) {
          link.style.backgroundColor = "rgba(129, 129, 129, 0.541)";
          link.classList.add('active');
        } else {
          link.style.backgroundColor = null;
        }
      });
    }
  });

  




};

btnDown.onclick = function () {
  window.scrollBy({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};


ScrollReveal().reveal(".progress .html", {
  origin: "left",
  distance: "600px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".progress .css", {
  origin: "left",
  distance: "600px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".progress .js", {
  origin: "left",
  distance: "600px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".progress .bootstrap", {
  origin: "left",
  distance: "600px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay: 700,
});
ScrollReveal().reveal(".container .l-div ", {
  origin: "left",
  distance: "700px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay: 700,
});
ScrollReveal().reveal(".container .r-div .card ", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});