import './style.css'
import { PROJECTS } from './counter.js'
import { EXPERIENCE } from './counter.js'

/// SETUP 
const myProfile = document.querySelector('#myProfile');
const homeSection = document.querySelector('#home-section');
const aboutSection = document.querySelector('#about-section');
const experienceSection = document.querySelector('#experience-section');
const experienceCarousel = document.querySelector('#experience-carousel');
const projectSection = document.querySelector('#projects-section');
const contactSection = document.querySelector('#contact-section');
const headerWrp = document.querySelector('.header-wrapper')



// SECTION TEMPLATES
const renderHome = () => {
  return `
<div class="about-text-container">
<h2 class="about-text">I'M <strong>GISELA</strong><br>FULL STACK DEVELOPER</h2>
</div>
`
}
renderHome();
homeSection.innerHTML += renderHome();

const renderAbout = () =>
  `
<div class="resumeandstudies-container">
<section class="resume" >
<h3 class= "resume-title-container">LET ME INTRODUCE <strong> MYSELF </strong></h3>
<div class="resume-text">
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
      <div class="studies-title-container">
        <h2> STUDIES </h2> 
        <div class= "down-button-container"> 
          <img class="down-button-logo" src="./Assets/flecha-abajo.png" alt="down-arrow-logo">
        </div>
      </div>
      <div class= "my-studies">
        <a href="www.thepowermba.com"><img id="thepowerlogo" src="./Assets/power.svg" alt="thepowerlogo"></a>
        <p>I studied in 2023 at The Power Business School - {Rock the code}..... </p>
      </div>    
      </section>
      </div>
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

renderAbout();
aboutSection.innerHTML += renderAbout();


const projectsTitle = document.createElement('h2');
const projectsWrp = document.createElement('div');

projectsTitle.className = 'projects-title';
projectsWrp.className = 'projects-wrapper';

projectsTitle.textContent = 'MY PROJECTS';

projectSection.appendChild(projectsTitle);
projectSection.appendChild(projectsWrp);


const renderProjects = (projects) => {

  for (const project of PROJECTS) {

    const card = document.createElement("div");
    const projectAnchor = document.createElement("a");
    const imgWrp = document.createElement("div");
    const image = document.createElement("img");
    const textProject = document.createElement("div");
    const projectYear = document.createElement("h2");

    card.className = "project-card";
    imgWrp.className = "image-project-wrapper";
    textProject.className = "text-project";
    projectYear.className = "project-year";

    image.src = project.imageSrc;
    image.alt = project.imageAlt;
    textProject.textContent = project.title;
    projectYear.textContent = project.year;


    projectsWrp.appendChild(card);
    card.appendChild(projectAnchor);
    projectAnchor.appendChild(imgWrp);
    projectAnchor.appendChild(projectYear);
    imgWrp.appendChild(image);
    imgWrp.appendChild(textProject);

  }
};

renderProjects();
// projectsWrp.innerHTML += renderProjects();

const experienceTitle = document.createElement('h2');
experienceTitle.className = 'experience-title';
experienceTitle.textContent = 'FORMER EXPERIENCE';
experienceSection.appendChild(experienceTitle);

const renderExperience = () => {

  for (const experience of EXPERIENCE) {

    const card = document.createElement("div");
    const companyUrl = document.createElement("a");
    const logoCompanyWrp = document.createElement("div");
    const cardText = document.createElement("div");
    const companyImage = document.createElement("img");
    const nameCompany = document.createElement("h2");
    const role = document.createElement("h3");
    const time = document.createElement("h4");
    const date = document.createElement("h5");
    const responsabilities = document.createElement("p");

    card.className = "experience-card";
    logoCompanyWrp.className = "logo-company-container";
    cardText.className = "card-text";
    nameCompany.className = "name-company";
    role.className = "role";
    time.className = "time";
    date.className = "date";
    responsabilities.className = "responsabilities";

    companyImage.src = experience.imageSrc;
    companyImage.alt = experience.imageAlt;
    nameCompany.textContent = experience.name;
    role.textContent = experience.role;
    time.textContent = experience.time;
    date.textContent = experience.date;
    responsabilities.textContent = experience.responsabilities;


    experienceCarousel.appendChild(card);
    card.appendChild(companyUrl);
    companyUrl.appendChild(logoCompanyWrp);
    companyUrl.appendChild(cardText);
    logoCompanyWrp.appendChild(companyImage);
    cardText.appendChild(nameCompany);
    cardText.appendChild(role);
    cardText.appendChild(time);
    cardText.appendChild(date);
    cardText.appendChild(responsabilities);

  }


};
renderExperience();
// experienceCarousel.innerHTML += renderExperience();



const renderContact = () => `
<section class="contact">
<h2 class="contact-title">CONTACT ME</h2>
<p> Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu    lorem ipsum dolor sit amet, consectetur ad minim veniam
</p>
<form id="contact-form" action="#" method="POST">
<div class="form-group-subject">
  <label id="subject-label" for="asunto">Subject:</label>
  <input  type="text" id="subject" name="subject" required>
  </div>
   <div class="form-group-text">
  <label id="message-label" for="message">What do you need?</label>
  <textarea id="message" name="message" rows="10" cols="50" required></textarea><br>
  </div>
  <input class="submit" id="submit" type="submit" value="Send!">
  </form>

</section>
`

contactSection.innerHTML += renderContact();


// LOGICA


function handleNavLinkClick(event) {
  event.preventDefault();

  const target = event.target;
  const href = target.getAttribute("href");
  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", handleNavLinkClick);
});

const downButtonContainer = document.querySelector(".down-button-container");
const myStudies = document.querySelector(".my-studies");

downButtonContainer.addEventListener("click", () => {
  if (myStudies.style.display === "none") {
    myStudies.style.display = "flex";
    myStudies.style.justifyContent = "center";
    myStudies.style.alignItems = "center";

    if (window.innerWidth < 768) {
      myStudies.style.flexDirection = "row";
    } else {
      myStudies.style.flexDirection = "column";
    }
  } else {
    myStudies.style.display = "none";
  }
});


let projectWrpInterval;
let experienceCarouselInterval;

function autoProjectWrpScroll() {
  projectsWrp.scrollTop += 1;
}

function autoExperienceCarouselScroll() {
  experienceCarousel.scrollLeft += 1;
}

function handleMouseOver(element) {
  if (element === projectsWrp || element === experienceCarousel) {
    if (element === projectsWrp) {
      projectWrpInterval = setInterval(autoProjectWrpScroll, 30);
    } else if (element === experienceCarousel) {
      experienceCarouselInterval = setInterval(autoExperienceCarouselScroll, 40);
    }
  }
}

function handleMouseOut(element) {
  if (element === projectsWrp) {
    clearInterval(projectWrpInterval);
  } else if (element === experienceCarousel) {
    clearInterval(experienceCarouselInterval);
  }
}

projectsWrp.addEventListener('mouseover', () => handleMouseOver(projectsWrp));
projectsWrp.addEventListener('mouseout', () => handleMouseOut(projectsWrp));

experienceCarousel.addEventListener('mouseover', () => handleMouseOver(experienceCarousel));
experienceCarousel.addEventListener('mouseout', () => handleMouseOut(experienceCarousel));


const submitButton = document.querySelector('#submit');

function createModal() {
  var modal = document.createElement('div');
  var closeButtonWrp = document.createElement('div');
  var closeButton = document.createElement('span');
  var content = document.createElement('div');

  modal.className = 'modal';
  closeButtonWrp.className = 'close-button-container';
  closeButton.className = 'close';
  content.className = 'modal-content';

  closeButton.innerHTML = 'X'
  content.innerHTML = '<p>¡Great! </br> I will get in contact as soon as possible</p>';


  contactSection.appendChild(modal);
  modal.appendChild(closeButtonWrp)
  closeButtonWrp.appendChild(closeButton);
  modal.appendChild(content);



  closeButtonWrp.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  submitButton.addEventListener('click', function () {
    modal.style.display = 'flex';
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    content.style.textAlign = "center";


  });
}

createModal();


