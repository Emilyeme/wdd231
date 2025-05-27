const navMenu = document.querySelector("nav ul");
const toggleButton = document.creatElement("button");
toggleButton.style.fontsize="1.5em";
toggleButton.style.colour="black";
toggleButton.style.backgroundColor="white";
toggleButton.style.border="none";
toggleButton.style.cursor="pointer";
document.querySelector("nav").prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggleButton.classList.toggle("active");
})