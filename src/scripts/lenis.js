
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
  wheelMultiplier: 1.1,
});

// Connect Lenis to GSAP ScrollTrigger
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Let ScrollTrigger use Lenis’s scroll position
lenis.on("scroll", ScrollTrigger.update);

// 🧩 Tell ScrollTrigger how to read Lenis’s scroll
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value);
    } else {
      return lenis.scroll.instance.scroll;
    }
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
});

// 🔁 Refresh once everything is ready
window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
    console.log("Lenis + ScrollTrigger synced ✅");
  }, 300);
});

