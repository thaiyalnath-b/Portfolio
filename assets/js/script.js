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
  { img: 'ec.jpeg', title: 'E-commerce', tech: "( HTML, CSS, JavaScript )", link: "https://thaiyalnath-b.github.io/Website/", msg: "Developed a responsive e-commerce website using HTML, CSS, and JavaScript, featuring product listings and a dynamic shopping cart." },
  { img: 'weather.png', title: 'Weather Dashboard', tech: "( HTML, CSS, JavaScript )", link: "https://thaiyalnath-b.github.io/Weather-Dashboard/", msg: "Built a responsive Weather Dashboard using HTML, CSS, and JavaScript with real-time updates and city search functionality." },
  { img: 'td.avif', title: 'To-Do-List', tech: "( HTML, CSS, JavaScript )", link: "https://thaiyalnath-b.github.io/To-Do-List/", msg: "Developed a to-do list app using HTML, CSS, and JavaScript with features for adding, deleting, and completing tasks." },
  { img: 'ca.png', title: 'Calculator', tech: "( HTML, CSS, JavaScript )", link: "https://thaiyalnath-b.github.io/Calculator/", msg: "Developed a functional calculator using HTML, CSS, and JavaScript, supporting basic arithmetic operations with a responsive design." },
  { img: 'pf.png', title: 'Portfolio', tech: "( HTML, CSS, JavaScript )", link: "https://thaiyalnath-b.github.io/Portfolio/", msg: "Built a personal portfolio using HTML, CSS, and JavaScript to showcase projects and skills with a responsive and user-friendly design." },
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
            <p class="tech"><span>Tech Stack:</span> ${work.tech}</p>
        </div>
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


