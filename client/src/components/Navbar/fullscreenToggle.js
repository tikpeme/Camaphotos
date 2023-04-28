let open = false;
let scale, offsetX, offsetY;

export const calculateValues = () => {
  const elem = document.querySelector("#nav-bg");

  const elemH = elem.getBoundingClientRect().height;
  const elemW = elem.getBoundingClientRect().width;
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(
    getComputedStyle(elem).getPropertyValue("--offset-value")
  );

  //  Offsets to center the circle
  offsetX = w / 2 - elemW / 2 - offsetValue;
  offsetY = h / 2 - elemH / 2 - offsetValue;

  // Good old pythagoras
  const radius = Math.sqrt(h ** 2 + w ** 2);
  scale = radius / (elemW / 2) / 2 + 0.1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
};

const openMenu = () => {
  const elem = document.querySelector("#nav-bg");

  elem.style.setProperty("--translate-x", `-${offsetX}px`);
  elem.style.setProperty("--translate-y", `${offsetY}px`);
  elem.style.setProperty("--scale", scale);
};
const closeMenu = () => {
  const elem = document.querySelector("#nav-bg");

  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
};
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

export const toggleMenu = () => {
  const toggleBtn = document.querySelector("#toggle-btn");

  open = !open;
  animateMenu();
  toggleBtn.classList.toggle("shown");
};

export const resizeHandler = () => {
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
};
