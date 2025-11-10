gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
});

gsap.from("header", {
    y: "-15vh",
    ease: "power4.inout",
    duration: 1.2,
});

gsap.from(".hero", {
    scale: 0.5,
    opacity: 0,
    ease: "elastic.inout",
    duration: 1.5,
});

gsap.from(".top", {
    x: "10vw",
    opacity: 0,
    ease: "elastic.inout",
    duration: 2,
    scrollTrigger: {
        trigger: ".top",
        start: "top 80%",
    },
});

gsap.from(".bottom", {
    x: "-10vw",
    opacity: 0,
    ease: "bounce.inout",
    duration: 2,
    scrollTrigger: {
        trigger: ".bottom",
        start: "top 80%",
    },
});

gsap.from(".how-it-works-image", {
    x: "-10vw",
    opacity: 0,
    ease: "power4.inout",
    duration: 2,
    scrollTrigger: {
        trigger: ".how-it-works",
        start: "top 80%",
    },
});

gsap.from(".how-it-works-text", {
    x: "10vw",
    opacity: 0,
    ease: "power4.inout",
    duration: 2,
    scrollTrigger: {
        trigger: ".how-it-works",
        start: "top 50%",
    },
});

gsap.from(".testimonial", {
    scale: 0.5,
    opacity: 0,
    ease: "elastic.inout",
    duration: 1.8,
    scrollTrigger: {
        trigger: ".testimonial",
        start: "top 85%",
    },
});

gsap.from("footer", {
     y: "10vh",
    ease: "power4.inout",
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
        trigger: "footer",
        start: "top 95%",
    },
});


const form = document.getElementById('early-access');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('email-error');

    form.addEventListener('submit', function(e) {
    e.preventDefault();
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        errorMsg.textContent = "Email field cannot be empty";
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('border', 'border-red-500');
      } 
      else if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address";
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('border', 'border-red-500');
      } 
      else {
        errorMsg.classList.add('hidden');
        emailInput.classList.remove('border', 'border-red-500');
        // You can handle successful submission here
        alert("Thank you for signing up!");
        form.reset();
      }
    });

    emailInput.addEventListener('input', function() {
         errorMsg.classList.add('hidden');
      emailInput.classList.remove('border', 'border-red-500');
    });


