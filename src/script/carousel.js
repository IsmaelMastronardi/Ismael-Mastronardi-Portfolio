import appointWheels from '../assets/images/project_images/AppointWheels.png'
import budgetBinder from '../assets/images/project_images/Budget_Binder.png';
import pollution_on_capitals from '../assets/images/project_images/capitals_app.png';
import spaceXploration from '../assets/images/project_images/Space_Xploration.png';

const projects_container = document.getElementById('caroussel')

const projects = [
  {
    name: 'AppointWheels',
    img: appointWheels.src,
    live_link: 'https://appoint-wheels.onrender.com',
    code_link: 'https://github.com/Rysth/REACT-AppointWheels',
    description: 'A Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails']
  },
  {
    name: 'BudgetBinder',
    img: budgetBinder.src,
    live_link: 'https://budget-binder.onrender.com',
    code_link: 'https://github.com/IsmaelMastronardi/budget-app',
    description: 'A Ruby on Rails aplication to keep track of your spending and budget. You can create categories and add transactions!',
    tech_stack: ['Ruby', 'Ruby on Rails', 'tailwind'],
  },
  {
    name: 'Pollution On Capitals',
    img: pollution_on_capitals.src,
    live_link: 'https://pollution-on-capitals.onrender.com',
    code_link: 'https://github.com/IsmaelMastronardi/Pollution-On-Capitals',
    description: 'A React/Redux application built using the Air Pollution API. It gives you information about the pollution in the selected cities',
    tech_stack: ['JavaScript', 'React', 'Redux'],
  },
  {
    name: 'SpaceXploration',
    img: spaceXploration.src,
    live_link: 'https://space-xploration.onrender.com/',
    code_link: 'https://github.com/IsmaelMastronardi/SpaceXploration',
    description: 'A single-page application built using React and Redux. It uses the SpaceX API to provide users with information about SpaceX rockets and missions.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Bootstrap'],
  }
];

projects.forEach((el) => {
  const item = document.createElement('li');
  item.className = 'w-6/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
  item.dataset.name = el.name;

  const techStackHTML = el.tech_stack.map(tech => `<li class="bg-dark-purple rounded-md px-1 shadow-xxl hover:shadow-2xxl cursor-pointer lg:p-2 lg:text-lg"><p>${tech}</p></li>`).join('');

  item.innerHTML = `
    <h3 class="text-tekhelet z-20 font-bold hidden">${el.name}</h3>
    <div class="absolute top-6 bottom-0 right-0 left-0 z-10 rounded-b-lg bg-semi-transparent-light-gray item_hover_bg" style="display: none;"></div>
    <Image src="${el.img}" alt='${el.name}' class="hidden"></Image>
  `;

  item.addEventListener('mouseenter', () => {
    if(!item.firstElementChild.classList.contains('hidden')){
      item.querySelector('.item_hover_bg').style.display = 'flex';
    }
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('.item_hover_bg').style.display = 'none';
  });

  projects_container.appendChild(item);
});

let current = 0;
let prev = current - 1 < 0 ? projects.length - 1 : current - 1;
let next = current + 1 >= projects.length ? 0 : current + 1;

const carouseltems = document.getElementsByClassName('carouselItem');
const liveLink = document.getElementById('see_live');
const codeLink = document.getElementById('see_code');
const projectDescription = document.getElementById('project_description');
const stack_list = document.getElementById('stack_list');

const updateCarousel = () => {
  Array.from(carouseltems).forEach((el, index) => {
    if (index === current) {
      el.className = 'w-6/12 z-10 relative carouselItem bg-gray-light rounded-xl xl:max-w-5xl 2xl:max-w-7xl';
      el.firstElementChild.classList.remove('hidden')
      el.lastElementChild.className = 'rounded-b-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.firstElementChild.classList.remove('hidden')
      projectDescription.innerText = projects[current].description
      liveLink.href = projects[current].live_link
      codeLink.href = projects[current].code_link


      const techStackList = projects[current].tech_stack;
      const stackListItems = techStackList.map((tech) => `<li class="bg-gray-light text-indigo rounded-md px-2 shadow-xxl hover:shadow-2xxl cursor-pointer lg:px-4 lg:text-lg"><p>${tech}</p></li>`).join('');
      stack_list.innerHTML = stackListItems;
    }
    else if (index === prev) {
      el.className = 'w-5/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.firstElementChild.classList.add('hidden')
      el.lastElementChild.className = 'carouselBack rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.lastElementChild.addEventListener('click', carouselBack);
    } 
    else if (index === next) {
      el.className = 'w-5/12 flex justify-center items-center absolute left-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.firstElementChild.classList.add('hidden')
      el.lastElementChild.className = 'carouselNext rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.addEventListener('click', carouselNext);
    } 
    else {
      el.firstElementChild.classList.add('hidden')
      el.lastElementChild.className = 'hidden';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.removeEventListener('click', carouselNext);
    }
  });
};

const carouselBack = () => {
  current = current === 0 ? projects.length - 1 : current - 1;
  prev = current === 0 ? projects.length - 1 : current - 1;
  next = current === projects.length - 1 ? 0 : current + 1;
  updateCarousel();
};

const carouselNext = () => {
  current = current === projects.length - 1 ? 0 : current + 1;
  prev = current === 0 ? projects.length - 1 : current - 1;
  next = current === projects.length - 1 ? 0 : current + 1;
  updateCarousel();
};

updateCarousel()
