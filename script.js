

// GLOBAL


// Footer in following html pages - about.html, index.html, mobile-airline.html, gov-health-registration.html
// Copyright year automatically updates each calender year
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("year").textContent = new Date().getFullYear();
});



// HOME PAGE


// DYNAMIC Column Logic - Responsive Design
// Full cross-browser compatibility
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.container').forEach(container => {
    const itemCount = container.querySelectorAll('.item').length;
    if (itemCount > 0 && itemCount <= 6) {
      container.classList.add(`cols-${itemCount}`);
    } else if (itemCount > 6) {
      container.classList.add('cols-6'); // default max
    }
  });
});



// Prevents browser from doing weird jump back to top of screen
document.querySelectorAll('a[href="#"]').forEach(el =>
  el.addEventListener('click', e => e.preventDefault())
);


// VIDEO
window.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector("video");

  // Optional: add a fallback poster in case autoplay fails
  if (video) {
    setTimeout(() => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Video started playing"))
          .catch(err => console.warn("Autoplay failed:", err));
      }
    }, 300); // Give the DOM & layout more time to stabilize
  }
});



// Animation for case study mock device
document.addEventListener("DOMContentLoaded", () => {
  const phone = document.querySelector(".homepage-iphone-frame-small");
  if (!phone) return;

  // Start hidden
  phone.classList.remove("animate");

  let hasEntered = false; // Track whether animation has been triggered

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Only trigger if element enters viewport from below
      if (!hasEntered && entry.isIntersecting && entry.boundingClientRect.top > 0) {
        phone.classList.add("animate");
        hasEntered = true; // Prevent retrigger
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(phone);
});






// BACK TO TOP BUTTON
// Show/hide the Back to Top button when scrolling
window.onscroll = function() {
    var backToTopButton = document.querySelector(".back-to-top");
    
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTopButton.classList.add("visible"); // Show button when scrolled down 600px
    } else {
        backToTopButton.classList.remove("visible"); // Hide button when scrolled back up
    }
};

// Scroll to the top of the page on click
document.querySelector(".back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});





// Mobile Airline App Page


// FADE IN Animation for .fade-div elements
const fadeDivs = document.querySelectorAll('.fade-div');

// Options for IntersectionObserver for fade-in
const fadeOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5, // Trigger when 50% of the element is visible
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for each fade-div based on its index in the NodeList
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 500); // Delay each div by 500ms (adjustable)
    } else {
      entry.target.classList.remove('visible'); // Fade out when out of view
    }
  });
}, fadeOptions);

// Observe each fade-div element
fadeDivs.forEach(div => fadeObserver.observe(div));




// SLIDE IN Animation for .number-item elements
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.number-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        } else {
          entry.target.classList.remove('slide-in');
        }
      });
    }, {
      threshold: 0.3
    });

    items.forEach(item => observer.observe(item));
  });



// MOCKUP SLIDESHOW < 1024px

document.addEventListener("DOMContentLoaded", function () {
  function initializeSlideshow(slideshowId) {
    const wrapper = document.getElementById(slideshowId);
    const container = wrapper.querySelector(".container");
    const items = container.querySelectorAll(".item");
    const controls = wrapper.querySelector(".slideshow-controls");

    let currentIndex = 0;

    // Create dot controls
    items.forEach((_, index) => {
      const btn = document.createElement("div");
      btn.className = "slideshow-button";
      if (index === 0) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
      });
      controls.appendChild(btn);
    });

    function updateSlide() {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    function updateDots() {
      controls.querySelectorAll(".slideshow-button").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === currentIndex);
      });
    }

    // 🟢 Swipe gesture support
    let startX = 0;
    wrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    wrapper.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;

      if (Math.abs(diff) > 50) {
        if (diff < 0 && currentIndex < items.length - 1) {
          currentIndex++;
        } else if (diff > 0 && currentIndex > 0) {
          currentIndex--;
        }
        updateSlide();
      }
    });
  }

  // ✅ Initialize both slideshows independently
  initializeSlideshow("slideshow1");
  initializeSlideshow("slideshow2");
});





// figma-loader.js

window.addEventListener('DOMContentLoaded', () => {
  const embed = document.getElementById('figmaEmbed');
  const logo = document.getElementById('figmaLoading');

  embed.addEventListener('load', () => {
    setTimeout(() => {
      logo.classList.add('fade-out');
      embed.classList.add('fade-in');
    }, 3000); // Adjust delay as needed
  });
});

