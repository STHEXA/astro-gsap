import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hero-fadein");
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: 0.2,
      stagger: 0.2,
      ease: "ease-out",
    }
  );
});
