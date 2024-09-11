document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".cloud_games-player");

  function startRotation() {
    element.classList.add("rotate");
  }

  function stopRotation() {
    element.classList.remove("rotate");

    void element.offsetWidth;
    element.classList.add("rotate");
  }

  element.addEventListener("mouseenter", startRotation);

  element.addEventListener("focus", startRotation);

  element.addEventListener("mouseleave", () => {});

  element.addEventListener("blur", () => {});

  element.addEventListener("animationend", () => {
    element.classList.remove("rotate");
  });
});
