
function showForm() {
  document.getElementById("contactOverlay").style.display = "flex";
}
function hideForm() {
  document.getElementById("contactOverlay").style.display = "none";
}




// nav scroll effect

window.addEventListener("scroll", function () {
  const nameTitle = document.getElementById("nameTitle");
  if (window.scrollY > 100) {
    nameTitle.style.opacity = "0";
    nameTitle.style.transition = "opacity 0.5s ease";
  } else {
    nameTitle.style.opacity = "1";
  }
});

// nav styler

const sections = document.querySelectorAll("main > div[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90; // adjust offset if header height is large
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// hamburger
  function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

function showForm() {
  document.getElementById('contactOverlay').style.display = 'flex';
}

function hideForm() {
  document.getElementById('contactOverlay').style.display = 'none';
}

// Close hamburger menu when a nav link is clicked
document.querySelectorAll('.right-nav a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(); // Close the menu
  });
});



  navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 500); // match scroll duration
  });
});




// email is not working

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     emailjs
//       .send("anubhav.dev@gmail.com", "trial.gmail.com", {
//         username: form.username.value,
//         usermail: form.usermail.value,
//         message: form.message.value,
//       })
//   });
// });


