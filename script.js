const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  opacity: 0,
  delay: 0.1,
  duration: 1,
  ease: Power3.easeOut,
});

Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  delay: 0.2,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.32, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  opacity: 0,
  ease: Expo.easeOut,
  duration: 1,
  stagger: 0.2,
});

Shery.imageEffect("#imgntext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 16.79, range: [0, 100] },
    uFrequencyY: { value: 9.16, range: [0, 100] },
    uFrequencyZ: { value: 41.98, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 16.87 },
    zindex: { value: "-9996999", range: [-9999999, 9999999] },
    aspect: { value: 0.6665517215406693 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0.02, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.02, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.4, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".imgff img", {
  style: 5,
  config: {
    a: { value: 1.83, range: [0, 30] },
    b: { value: -0.76, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666848358482028 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#imgntext img", {
  y: "70",
  opacity: 0,
  delay: 0.1,
  duration: 2,
  ease: Expo.easeOut,
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.9100422874730143 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 0.44, range: [0.1, 5] },
    durationIn: { value: 0.62, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.38, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
    discard_threshold: { value: 0.52, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.52, range: [0, 2] },
    noise_scale: { value: 7.63, range: [0, 100] },
  },
  gooey: true,
});

document
  .querySelector("#ftxt button")
  .addEventListener("mouseover", function () {
    gsap.to("#future video", {
      opacity: 1,
      duration: 1,
      ease: Power4,
    });
  });

document
  .querySelector("#ftxt button")
  .addEventListener("mouseleave", function () {
    gsap.to("#future video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
    });
  });
