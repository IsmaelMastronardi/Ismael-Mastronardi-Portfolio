const projects = {
  'Appoint Wheels':{
    live_link: 'https://react-appointwheels.fly.dev/',
    code_link: 'https://github.com/Rebelzob/REACT-AppointWheels',
    description: 'A Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails']
  },
  'Neotech': {
    live_link: 'https://neotech-front.onrender.com/',
    code_link: 'https://github.com/IsmaelMastronardi/neotech-front',
    description: 'A React/redux appication for a computer store. It allows users to add and delete products from the cart and complete orders.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails']
  },
  'Budget Binder': {
    live_link: 'https://budget-binder.onrender.com',
    code_link: 'https://github.com/IsmaelMastronardi/budget-app',
    description: 'A Ruby on Rails aplication to keep track of your spending and budget. You can create categories and add transactions.',
    tech_stack: ['Ruby', 'Ruby on Rails', 'tailwind'],
  },
  'Pollution on Capitals': {
    live_link: 'https://pollution-on-capitals.onrender.com',
    code_link: 'https://github.com/IsmaelMastronardi/Pollution-On-Capitals',
    description: 'A React/Redux application built using the Air Pollution API. It gives you information about the pollution in the selected cities',
    tech_stack: ['JavaScript', 'React', 'Redux'],
  },
  'Space Xploration': {
    live_link: 'https://space-xploration.onrender.com/',
    code_link: 'https://github.com/IsmaelMastronardi/SpaceXploration',
    description: 'A single-page application built using React and Redux. It uses the SpaceX API to provide users with information about SpaceX rockets and missions.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Bootstrap'],
  }
};

const buttons = document.querySelectorAll('[data-carousel-button]');
const projectTitle = document.getElementById('project_title');
const description = document.getElementById('project_description');
const liveLink = document.getElementById('see_live');
const codeLink = document.getElementById('see_code');
const stackList = document.getElementById('stack_list');

stackList.innerHTML = projects['Appoint Wheels'].tech_stack.map(tech => `<li class="bg-dark-purple rounded-md px-1 shadow-xxl hover:shadow-2xxl cursor-pointer lg:p-2 lg:text-lg"><p>${tech}</p></li>`).join('');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    const slide = slides.children[newIndex];
    slide.dataset.active = true;
    delete activeSlide.dataset.active;
    projectTitle.innerText = slide.dataset.name;
    description.innerText = projects[slide.dataset.name].description;
    liveLink.href = projects[slide.dataset.name].live_link;
    codeLink.href = projects[slide.dataset.name].code_link;

    stackList.innerHTML = projects[slide.dataset.name].tech_stack.map(tech => `<li class="bg-dark-purple rounded-md px-1 shadow-xxl hover:shadow-2xxl cursor-pointer lg:p-2 lg:text-lg"><p>${tech}</p></li>`).join('');
  });
});
