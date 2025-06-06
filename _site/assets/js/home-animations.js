
window.addEventListener('load', () => {
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 2, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 2, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-button", { opacity: 0, scale: 0.8, duration: 2, delay: 0.6, ease: "back.out(1.7)" });
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-padding",
    start: "top 50%",
    toggleActions: "play none none none",
    // markers: true, // uncomment to debug
  },
  defaults: { duration: 1, ease: "power3.out" }
});

// Animate left large image: from bottom (y: 50 to y: 0)
tl.fromTo(
  ".about-right > img:first-child",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0 }
);

// Animate right stacked images: from right (x: 50 to x: 0) with stagger delay
tl.fromTo(
  ".about-right > div > img",
  { opacity: 0, x: 50 },
  { opacity: 1, x: 0, stagger: 0.3 },
  "-=0.5"  // overlap a bit with previous animation
);





// gsap.fromTo(
//   ".service-card",
//   { opacity: 0, scale: 0.95 },
//   {
//     opacity: 1,
//     scale: 1,
//     duration: 1.8,
//     ease: "power3.out",
//     stagger: 0.3,
//     scrollTrigger: {
//       trigger: ".service-card",
//       start: "top 75%",
//       toggleActions: "play none none none",
//     },
//   }
// );


// gsap.from(".home-testimonaials .grid > div", {
//   opacity: 0,
//   y: 40,
//   duration: 1.8,
//   ease: "power3.out",
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: ".home-testimonials",
//     start: "top 80%",
//     toggleActions: "play none none none",
//     // markers: true, // optional for debug
//   }
// });


// gsap.from(".home-testimonials .grid > div .w-12", {
//   scale: 0.6,
//   opacity: 0,
//   duration: 0.5,
//   ease: "back.out(1.7)",
//   stagger: 0.2,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: ".home-testimonials .grid",
//     start: "top 50%",
//     toggleActions: "play none none none",
//   }
// });