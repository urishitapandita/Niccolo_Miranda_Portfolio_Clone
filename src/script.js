// let tl = gsap.timeline();
// tl.to(".main", {
//   y: "100vh",
//   scale: 0.2,
//   duration: 0,
//   delay: 0,
// });

// tl.to(".main", {
//   y: "20vh",
//   duration: 1,
//   delay: 1,
// });
// tl.to(".main", {
//   y: 0,
//   rotate: -360,
//   scale: 1,
//   duration: 0.7,
// });

// smooth scrolling
gsap.registerPlugin(ScrollTrigger);
//locomotive and scrollTrigger
const locomotiveAnimations = () => {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
};
locomotiveAnimations();


