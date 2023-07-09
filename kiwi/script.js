function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation__mobile");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

document.getElementById("triggger").addEventListener("click", () => {
  Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
});
