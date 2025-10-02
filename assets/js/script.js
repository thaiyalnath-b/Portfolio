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


// Skills section
const card_details = [
  { img: 'html.png', title: 'HTML' },
  { img: 'cs.webp', title: 'CSS' },
  { img: 'bs.png', title: 'Bootstrap' },
  { img: 'jss.png', title: 'JavaScript' },
  { img: 'react.png', title: 'React' },
];

function renderCard(card) {
  return `
    <div class="card">
      <img src="assets/images/${card.img}" alt="${card.title}">
      <h5>${card.title}</h5>
    </div>
  `;
}

function renderProducts(cards) {
  const cards_container = document.querySelector('#cards');
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
  { img: 'in.jpg', title: 'Instagram', tech: "( HTML, CSS )", link: "https://github.com/thaiyalnath-b/Insta" },
  { img: 'comm.jpg', title: 'Ecommerce', tech: "( HTML, CSS, JS )", link: "https://github.com/thaiyalnath-b/Website" },
  { img: 'to-do.jpg', title: 'To-Do-List', tech: "( HTML, CSS, JS )", link: "https://github.com/thaiyalnath-b/To-Do-List" },
  { img: 'cal.png', title: 'Calculator', tech: "( HTML, CSS, JS )", link: "https://github.com/thaiyalnath-b/Calculator" },
  { img: 'port.jpg', title: 'Portfolio', tech: "( HTML, CSS, JS )", link: "https://github.com/thaiyalnath-b/Weather-Dashboard" },
];

function render(work) {
  return `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="assets/images/${work.img}" alt="${work.title}">
          <h5>${work.title}</h5>
          <p class="tech">Build with: ${work.tech}</p>
        </div>
        <div class="card-back">
          <a href="${work.link}" target="_blank" class="btn">Explore My Work</a>
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

form.addEventListener('submit', function (reload) {
  reload.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.msg.value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}.`);
  alert('Your message has been Sent!');

  form.reset();
});

// Section visible
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});
