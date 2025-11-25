const toggler = document.querySelector('.navbar-toggler');
const icon = toggler.querySelector('i');
const navbarCollapse = document.getElementById('navbarSupportedContent');

// When the collapse is shown
navbarCollapse.addEventListener('shown.bs.collapse', () => {
  icon.classList.replace('bi-list', 'bi-x');
});

// When the collapse is hidden
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  icon.classList.replace('bi-x', 'bi-list');
});

// Loading Section
let progress = 0;
const interval = setInterval(() => {
  progress++;
  document.querySelector('.progress').style.width = progress + "%";
  document.getElementById("percent").textContent = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);

    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 200);
  }
}, 10);

// Home Section Role
function animateH2() {
  const h2 = document.querySelector("#Home .name h2");
  const text = h2.getAttribute("data-text");
  h2.innerHTML = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }

    span.style.animationDelay = `${i * 0.15}s`;
    h2.appendChild(span);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("#Home .name h2");
  h2.setAttribute("data-text", h2.textContent.trim());

  animateH2();
  setInterval(animateH2, 5000);
});

// download Cv
function downloadCV() {
  const link = document.createElement("a");
  link.href = "assets/resume/Thaiyalnath.pdf";
  link.download = "Thaiyalnath.pdf";
  link.click();

}




// Navbar Section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(nav => {
    nav.classList.remove("active");
  });
  if (currentSection === "" || currentSection === "Home") {
    document.querySelector('.nav-link[href="#Home"]').classList.add("active");
  }
  else {
    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

});


// Skills section
const card_details = [
  { img: 'html-5.png', title: 'HTML' },
  { img: 'css-3.png', title: 'CSS' },
  { img: 'bs.png', title: 'Bootstrap' },
  { img: 'js.png', title: 'JavaScript' },
  { img: 'science.png', title: 'React' },
  { img: 'sql.png', title: 'SQL' },
];

function renderCard(card) {
  return `
  <div class ="card">
  <img src ="assets/images/img/${card.img}" alt="${card.title}">
  <h5>${card.title}</h5>
  </div>
  `;
}
function renderProducts(cards) {
  const cards_container = document.getElementById('cards');
  let result = '';
  for (let card of cards) {
    result += renderCard(card);
  }
  cards_container.innerHTML = result;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(card_details);
});


// Projects section
const work_details = [
  { img: 'i1.jpg', title: 'Instagram Clone', link: "https://instagram-tv75.vercel.app/", gh: "https://github.com/thaiyalnath-b/Instagram", msg: "Built a fully responsive Instagram clone using React with mock data, featuring dynamic post feeds, user profiles, and interactive UI functionality." },
  { img: 'finance.avif', title: 'Finance Tracker', link: "https://thaiyalnath-b.github.io/personal-Finance/", gh: "https://github.com/thaiyalnath-b/personal-Finance", msg: "Developed a personal finance tracker to manage income and expenses with interactive charts, category filters, and a responsive interface." },
  { img: 'ec.jpeg', title: 'E-commerce', link: "https://react-e-commerce-thaiyalnath.vercel.app/", gh: "https://github.com/thaiyalnath-b/react_e-commerce_thaiyalnath", msg: "Built a fully responsive e-commerce web application using React, featuring reusable components, dynamic product rendering, and a state-managed shopping cart." },
  { img: 'weather.png', title: 'Weather Dashboard', link: "https://thaiyalnath-b.github.io/Weather-Dashboard/", gh: "https://github.com/thaiyalnath-b/Weather-Dashboard", msg: "Built a responsive Weather Dashboard using HTML, CSS, and JavaScript with real-time updates and city search functionality." },
  { img: 'td.avif', title: 'To-Do-List', link: "https://thaiyalnath-b.github.io/To-Do-List/", gh: "https://github.com/thaiyalnath-b/To-Do-List", msg: "Developed a to-do list app using HTML, CSS, and JavaScript with features for adding, deleting, and completing tasks." },
  { img: 'ca.png', title: 'Calculator', link: "https://thaiyalnath-b.github.io/Calculator/", gh: "https://github.com/thaiyalnath-b/Calculator", msg: "Developed a functional calculator using HTML, CSS, and JavaScript, supporting basic arithmetic operations with a responsive design." },
  { img: 'pf.png', title: 'Portfolio', link: "https://thaiyalnath-b.github.io/Portfolio/", gh: "https://github.com/thaiyalnath-b/personal-Finance", msg: "Built a personal portfolio using HTML, CSS, and JavaScript to showcase projects and skills with a responsive and user-friendly design." },
];

function render(work) {
  return `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="assets/images/img/${work.img}" alt="${work.title}">
          <h5>${work.title}</h5>
        </div>
        <div class="card-back">
        <div class="back-msg">
            <p class="msg"><span>${work.title}</span>: ${work.msg}</p>
        </div>
        <a href="${work.gh}" target="_blank" class="btn">GitHub</a>
          <a href="${work.link}" target="_blank" class="btn">View Demo</a>
        </div>
      </div>
    </div>
  `;
}

function renderWorks(works) {
  const works_container = document.querySelector('#works');
  let result = '';
  for (let work of works) {
    result += render(work);
  }
  works_container.innerHTML = result;
}

document.addEventListener('DOMContentLoaded', () => {
  renderWorks(work_details);
});

// Send Message Button
const form = document.getElementById('reach');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop page reload

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // clear form
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(error => alert("Error sending message: " + error));
});


