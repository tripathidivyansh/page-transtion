const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

tl.fromTo(".slider", { y: "100%" }, { y: "0%", duration: 1.2 });
tl.to(".slider", { y: "-100%", duration: 1.2 });
tl.fromTo(".intro .hero", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.2 }, "-=1");
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
