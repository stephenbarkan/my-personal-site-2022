const getActionables = function () {
  let actionables = document.querySelectorAll("button, a, textarea");
  actionables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorEl.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursorEl.classList.remove("hover");
    });
  });
};

const cursorEl = document.querySelector("#cursor");
getActionables();
window.addEventListener("mousemove", (event) => {
  const x = event.pageX;
  const y = event.pageY;
  const cursorSize = cursorEl.getBoundingClientRect().width;
  cursorEl.style.setProperty("--posX", x - 0.5 * cursorSize + "px");
  cursorEl.style.setProperty("--posY", y - 0.5 * cursorSize + "px");
});

window.addEventListener("mousedown", () => {
  cursorEl.classList.add("click");
});
window.addEventListener("mouseup", () => {
  cursorEl.classList.remove("click");
});

const elementToObserve = document.querySelectorAll("[data-js='actionableWrapper']");

const observer = new MutationObserver(() => {
  getActionables();
  console.log("first");
});

elementToObserve.forEach((element) => {
  observer.observe(element, { subtree: true, childList: true });
});
