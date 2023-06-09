import './style.css'

// SETUP 
const experienceLink = document.getElementById('experience-link');
const projectsLink = document.getElementById('projects-link');
const homeLink = document.getElementById('home-link');
const mainSection = document.querySelector('main');
const homeLogo = document.querySelector('.home-logo');
const navLinkContainer = document.querySelector('.nav-link-container');

const renderHome = () => `
<section class="home" id="home-section">
<section class="about">
<div class="image-container">
  <img class="image-gisela" src="./Assets/mariantudorphotos (7 de 603).jpg" alt="gisela-photo">
</div>
<div class="about-text-container">
  <h2 class="about-text">I'M <strong>GISELA</strong> FULL STACK DEVELOPER</h2>
</div>
</div>
</section>
<section class="resume" >
<h3>Let me introduce myself_</h3>
<div class="resume-text">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore iusto pariatur, odio fuga expedita
    distinctio
    illum corrupti, deleniti similique unde, aspernatur beatae architecto perferendis officia ipsam! Aut a
    blanditiis at.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore iusto pariatur, odio fuga expedita
    distinctio
    illum corrupti, deleniti similique unde, aspernatur beatae architecto perferendis officia ipsam! Aut a
    blanditiis at.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore iusto pariatur, odio fuga expedita
    distinctio
    illum corrupti, deleniti similique unde, aspernatur beatae architecto perferendis officia ipsam! Aut a
    blanditiis at.</p>
</div>
</section> 
    <section class="studies" >
      <a href="www.thepowermba.com"><img src="./Assets/power.svg" alt="thepowerlogo"></a>
      <h2>I studied in 2023 at The Power Business School - {Rock the code}..... </h2>
    </section>
<section class="rrss">
<ul class="rrss-ul">
  <li>
    <div class="logo-container">
      <img class="github-logo" src="./Assets/github.png" alt="github-logo">
    </div>
    <a class="logo-link" href="https://github.com/GigiAvila">GITHUB</a>
  </li>
  <li>
    <div class="logo-container">
      <img class="linkedin-logo" src="./Assets/linkedin.png" alt="linkedin-logo">
    </div>
    <a class="logo-link" href="https://www.linkedin.com/in/gisela-avila-203ba33a/">LINKEDIN</a>
  </li>
  <li>
    <div class="logo-container">
      <img class="cv-logo" src="./Assets/cv.png" alt="cv-gisela">
    </div>
    <a class="logo-link" href="./Assets/cv-gisela.pdf" download="cv"> RESUME</a>
  </li>
</ul>
</section>
`

renderHome();

mainSection.innerHTML += renderHome();


const renderProjects = () => `
<section class="projects" id="projects-section">
<div class="projects-carousel">
  <div class="project1-container"><img src="./Assets/alex-batonisashvili-2AkOAP_t8u0-unsplash.jpg"
      alt="photoproject1"></div>
  <div class="project2-container"><img src="./Assets/filipp-romanovski-3f4A-kCYkhY-unsplash.jpg"
      alt="photoproject2"></div>
  <div class="project3-container"><img src="./Assets/gabrielle-maurer-f3v1VEP_nwY-unsplash.jpg"
      alt="photoproject3"></div>
  <div class="project4-container"><img src="./Assets/alex-batonisashvili-2AkOAP_t8u0-unsplash.jpg"
      alt="photoproject4"></div>
  <div class="project5-container"><img src="./Assets/filipp-romanovski-3f4A-kCYkhY-unsplash.jpg"
      alt="photoproject5"></div>
  <div class="project6-container"><img src="./Assets/gabrielle-maurer-f3v1VEP_nwY-unsplash.jpg"
      alt="photoproject6"></div>
  <div class="project7-container"><img src="./Assets/matin-kaviani-KJR7PXEa7xc-unsplash.jpg" alt="photoproject7">
  </div>
  <div class="project8-container"><img src="./Assets/alex-batonisashvili-2AkOAP_t8u0-unsplash.jpg"
      alt="photoproject8"></div>
  <div class="project9-container"><img src="./Assets/matin-kaviani-KJR7PXEa7xc-unsplash.jpg" alt="photoproject9">
  </div>
  <div class="project10-container"><img src="./Assets/filipp-romanovski-3f4A-kCYkhY-unsplash.jpg"
      alt="photoproject10"></div>
</div>
</section>
`


mainSection.innerHTML += renderProjects();

// LOGICA

function toggleNavLinkContainer() {
  const navLinkContainer = document.querySelector('.nav-link-container');
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    if (navLinkContainer.style.display === 'none') {
      navLinkContainer.style.display = 'flex';
      navLinkContainer.style.flexDirection = 'row';
    } else if (navLinkContainer.style.display === 'flex') {
      navLinkContainer.style.display = 'none';
    } else {
      navLinkContainer.style.display = 'flex';
      navLinkContainer.style.flexDirection = 'row';
    }
  } else {
    navLinkContainer.style.display = 'flex';
    navLinkContainer.style.flexDirection = 'column';
  }
}

homeLogo.addEventListener('click', toggleNavLinkContainer);


function handleNavLinkClick(event) {
  event.preventDefault();
  const target = event.target;
  const href = target.getAttribute("href");
  const section = document.querySelector(href);

  if (section) {
    const sectionSelected = section.offsetTop;
    window.scrollTo({
      top: sectionSelected,
      behavior: "smooth"
    });
  }
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", handleNavLinkClick);
});










// experienceLink.addEventListener('click', (ev) => {
//   ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
//   const linkHref = ev.target.href; // Almacenamos la URL en una constante
//   console.log('El link apunta a:', linkHref);
// });

// projectsLink.addEventListener('click', (ev) => {
//   ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
//   const linkHref = ev.target.href; // Almacenamos la URL en una constante
//   console.log('El link apunta a:', linkHref);
// });