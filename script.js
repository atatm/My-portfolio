const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon= document.getElementById("menu-close")

menuIcon.onclick = function () {
  mobileMenu.classList.toggle("open-mobileMenu");
};

closeIcon.onclick= function (){
    mobileMenu.classList.remove("open-mobileMenu");
}

document.querySelectorAll(".menu").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("open-mobileMenu");
  })
);

