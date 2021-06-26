const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
   nav.classList.add("nav-show");
   nav.classList.remove("nav-hidden");
});

nav.addEventListener("click", (e) => {
   console.log(e);
   if (
      e.target.classList.contains("nav__closet") ||
      e.target.classList.contains("nav__link")
   ) {
      nav.classList.remove("nav-show");
      nav.classList.add("nav-hidden");
   }
});
