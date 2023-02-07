gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline(); //dont have to deal with delay times
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top", //(top center bottom)
  //   markers: true,
  end: "45% max",
  scrub: 3 /*to smoothen animation*/,
});

// hills animation
scene1.to(
  //(target element to animate, vars to animate)
  "#klcc",
  { x: -2.8 * speed, y: 5 * (speed * 2), scale: 5, ease: "power1.in" },
  0.25
);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1j.in" }, 0);
scene1.to("#frontbuilding", { y: 3.0 * speed, x: 0 * speed }, 0.1);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.1);
scene1.to("#kltower", { y: 6 * speed, x: 1 * speed }, 0.1);
scene1.to("#midbuilding", { y: 4.0 * speed, x: 2.5 * speed }, 0.05);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0.05);
scene1.to("#backbuild", { y: 3.5 * speed, x: -0.2 * speed }, 0.05);
scene1.to("#introCircle", { x: -15 * speed, y: -10 * speed, scale: 5 }, 0);

//animate text
scene1.to("#info", { y: 0 * speed }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
  animation: sun,
  trigger: ".scrollElement",
  start: "top top",
  end: "2200 100%",
  scrub: 1,
});

//sun motion
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

//bg change
sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.2" } }, 0.0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: ".scrollElement",
  start: "15% top",
  end: "40% 100%",
  scrub: 4,
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
  animation: sun2,
  trigger: ".scrollElement",
  start: "2200 top",
  end: "5000 100%",
  scrub: 1,
});

sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: 580, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
  animation: sceneTransition,
  trigger: ".scrollElement",
  start: "70% top",
  end: "bottom 100%",
  scrub: 3,
});

sceneTransition.to(
  "#h2-1",
  { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
  0
);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
  animation: scene3,
  trigger: ".scrollElement",
  start: "80% 50%",
  end: "bottom 100%",
  scrub: 3,
});

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
  }
});
