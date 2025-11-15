import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
});

// Run Lenis on each animation frame
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 🔁 Refresh ScrollTrigger after everything loads
window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
    console.log("ScrollTrigger refreshed ✅");
  }, 500);
});
