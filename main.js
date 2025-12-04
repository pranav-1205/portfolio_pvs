"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const z1 = document.getElementsByClassName("z-1")[0];
  const z2 = document.getElementsByClassName("z-2")[0];
  const z3 = document.getElementsByClassName("z-3")[0];
  if (!z1 || !z2 || !z3) return; // fail-safe

  const ratio = 0.05;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  document.addEventListener("mousemove", function (e) {
    x = e.pageX;
    y = e.pageY;
  }, {passive:true});

  function animation() {
    const cx = x - window.innerWidth / 2;
    const cy = y - window.innerHeight / 2;
    z1.style.transform = `translate(${cx * ratio}px, ${cy * ratio}px)`;
    z2.style.transform = `translate(${cx * ratio / 2}px, ${cy * ratio / 2}px) rotate(217deg)`;
    z3.style.transform = `translate(${cx * ratio / 3}px, ${cy * ratio / 3}px) rotate(71deg)`;
    requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
});
