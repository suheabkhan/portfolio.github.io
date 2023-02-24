$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let close = document.querySelector(".close");
  let close1 = document.querySelector(".close1");
  let close2 = document.querySelector(".close2");
  let close3 = document.querySelector(".close3");
  let close4 = document.querySelector(".close4");
  let mobileNav = document.querySelector(".mobile-nav");
  let about1 = document.querySelector("#about1");
  let services1 = document.querySelector("#services1");
  let work1 = document.querySelector("#work1");
  let contact1 = document.querySelector("#contact1");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
  close.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
  close1.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    about1.href = "#about";
  });
  close2.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    services1.href = "#services";
  });
  close3.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    work1.href = "#work";
  });
  close4.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    contact1.href = "#contact";
  });

  let downloadBtn = document.querySelector("#download");

  downloadBtn.addEventListener("click", (e) => {
    window.open("/images/SuheabResume.pdf", "_blank");
  });

  let contactBtn = document.querySelector("#contactBtn");

  contactBtn.addEventListener("click", (e) => {
    window.open("tel:+918309525424");
  });

  let contactMeBtn = document.querySelector("#contactMe");

  contactMeBtn.addEventListener("click", (e) => {
    window.open("tel:+918309525424");
  });

  var typed = new Typed(".type", {
    strings: ["Developer", "Coder", "Mentor", "Freelancer"],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
});
