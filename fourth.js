const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((chil) => {
  chil.addEventListener("click", toggleOpen);
});
panels.forEach((chil) => {
  chil.addEventListener("transitionend", toggleOpenActive);
});
