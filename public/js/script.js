function navAnimation() {
  const nav = document.querySelector("nav");

  let tlEnter;
  let tlLeave;

  nav.addEventListener("mouseenter", () => {
    if (tlLeave) tlLeave.kill();

    tlEnter = gsap.timeline();

    tlEnter.to(".nav-expanded", {
      height: "20vh",
      duration: 0.01,
    });

    tlEnter.to(".nav-expanded-div__items", {
      display: "block",
      duration: 0.1,
    });

    tlEnter.to(".nav-expanded-div__items h5", {
      y: 0,
      duration: 0.4,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", () => {
    if (tlEnter) tlEnter.kill();

    tlLeave = gsap.timeline();

    tlLeave.to(".nav-expanded-div__items h5", {
      y: 25,
      duration: 0.2,
      stagger: {
        amount: 0.6,
      },
    });

    tlLeave.to(".nav-expanded-div__items", {
      display: "none",
      duration: 0.1,
    });

    tlLeave.to(".nav-expanded", {
      height: "0",
      duration: 0.01,
    });
  });
}

navAnimation();
