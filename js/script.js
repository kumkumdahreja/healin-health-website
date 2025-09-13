// Animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });



  // Form submission
  const forms = document.querySelectorAll(".email-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your interest in Apollo!");
    });
  });

  // Button clicks
  const buttons = document.querySelectorAll(".btn-primary");
  buttons.forEach((button) => {
    if (!button.closest(".email-form")) {
      button.addEventListener("click", function () {
        alert("Thank you for your interest in Apollo!");
      });
    }
  });
});

// functional pillars
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Triggers when 10% of the element is visible
    }
  );

  const functionalPillarsSection = document.querySelector(
    ".heal-in-pillars-section"
  );
  if (functionalPillarsSection) {
    observer.observe(functionalPillarsSection);
  }
});

// tabs switch function
let lastScrollSwitchTime = 0;
const scrollThrottleDelay = 500; // milliseconds
const tabBar = document.getElementById("tabBar");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");
const tabActiveColors = [
  "var(--yellow)",
  "var(--purple)",
  "var(--pink)",
  "var(--blue)",
];

let currentTab = 0;
let autoSwitch = null;
let lockSwitch = false;
let lockTimeout = null;
let lastScrollY = window.scrollY;

function setTab(idx, { manual = false } = {}) {
  if (idx === currentTab) return;
  // Tab button state
  tabBtns[currentTab].classList.remove("active");
  tabSections[currentTab].classList.remove("active");
  tabBtns[currentTab].style.background = "var(--new-gray)";
  tabBtns[currentTab].style.color = "#6a6d78";
  // New tab
  tabBtns[idx].classList.add("active");
  tabSections[idx].classList.add("active");
  tabBtns[idx].style.background = tabActiveColors[idx];
  tabBtns[idx].style.color = "#252532";
  currentTab = idx;
  // Manual lock for 10s
  if (manual) {
    lockSwitch = true;
    clearTimeout(lockTimeout);
    clearInterval(autoSwitch);
    lockTimeout = setTimeout(() => {
      lockSwitch = false;
      startAutoSwitch();
    }, 10000);
  }
  // Reset background for previously active tab
  for (let i = 0; i < tabBtns.length; ++i)
    if (i !== idx) tabBtns[i].style.background = "var(--new-gray)";
}
function nextTab(dir = 1) {
  let idx = (currentTab + dir + tabBtns.length) % tabBtns.length;
  setTab(idx);
}
function startAutoSwitch() {
  clearInterval(autoSwitch);
  autoSwitch = setInterval(() => {
    if (!lockSwitch) nextTab(1);
  }, 3000);
}
startAutoSwitch();
tabBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => setTab(idx, { manual: true }));
});
tabSections.forEach((section, idx) => {
  section.addEventListener("mouseenter", () => setTab(idx, { manual: true }));
});
window.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > 24) {
    const direction = e.deltaY > 0 ? 1 : -1;
    nextTab(direction);
    lockSwitch = true;
    clearTimeout(lockTimeout);
    clearInterval(autoSwitch);
    lockTimeout = setTimeout(() => {
      lockSwitch = false;
      startAutoSwitch();
    }, 10000);
  }
});
window.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastScrollSwitchTime < scrollThrottleDelay) {
    return; // Ignore if within throttle delay
  }
  let diff = window.scrollY - lastScrollY;
  if (Math.abs(diff) > 33) {
    const direction = diff > 0 ? 1 : -1;
    nextTab(direction);
    lockSwitch = true;
    clearTimeout(lockTimeout);
    clearInterval(autoSwitch);
    lockTimeout = setTimeout(() => {
      lockSwitch = false;
      startAutoSwitch();
    }, 10000);
    lastScrollY = window.scrollY;
    lastScrollSwitchTime = now; // Update last switch time
  }
});

// Set initial tab color background
tabBtns[0].style.background = tabActiveColors[0];
tabBtns[0].style.color = "#252532";

// about section Optional JS: Fade in on load
window.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".wellness-fadein");
  items.forEach(function (item, i) {
    setTimeout(function () {
      item.classList.add("visible");
    }, 200 + i * 180);
  });
});

// Healin Health Animate timeline events on scroll
const timelineEvents = document.querySelectorAll(".hl-timeline-event");
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, options);

timelineEvents.forEach((event) => observer.observe(event));

//faq section
const buttons = document.querySelectorAll(".faq-question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(
      button.getAttribute("aria-controls")
    );

    if (expanded) {
      button.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = null;
      button.parentNode.classList.remove("expanded");
    } else {
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
      button.parentNode.classList.add("expanded");
    }
  });
});

// contact section
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("visitSection");
  function showOnScroll() {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add("visible");
      window.removeEventListener("scroll", showOnScroll);
    }
  }
  window.addEventListener("scroll", showOnScroll);
  showOnScroll();
});

