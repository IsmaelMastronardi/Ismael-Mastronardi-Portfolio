import project1 from '../assets/images/project_images/AppointWheels.png'
import project2 from '../assets/images/project_images/SpaceXploration.png';
import project3 from '../assets/images/project_images/CbaFestival.png';
import project4 from '../assets/images/project_images/SpaceXploration.png';

const projects_container = document.getElementById('caroussel')

const projects = [
  {
    name: 'AppointWheels',
    img: project1.src,
    live_link: 'p1',
    code_link: 'p1',
    description: 'REACT-AppointWheels is a Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails']
  },
  {
    name: 'Project2',
    img: project2.src,
    live_link: 'p2',
    code_link: 'p2',
    description: 'REACT-AppointWheels is a Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
  },
  {
    name: 'Project3',
    img: project3.src,
    live_link: 'p3',
    code_link: 'p3',
    description: 'REACT-AppointWheels is a Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
  },
  {
    name: 'Project4',
    img: project4.src,
    live_link: 'p4',
    code_link: 'p4',
    description: 'REACT-AppointWheels is a Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['Ruby', 'Ruby on Rails'],
  },
];

projects.forEach((el) => {
  const item = document.createElement('li');
  item.className = 'w-6/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
  item.dataset.name = el.name;

  const techStackHTML = el.tech_stack.map(tech => `<li class="bg-dark-purple rounded-md p-1 font-bold shadow-xxl hover:shadow-2xxl cursor-pointer lg:p-2 lg:text-lg"><p>${tech}</p></li>`).join('');

  item.innerHTML = `
    <div class="absolute z-20 right-0 left-0 top-2/3 tech-stack flex flex-row justify-center" style="display: none;">
      <ul class="flex-row justify-center hidden md:flex w-5/6 gap-4">
        ${techStackHTML}
      </ul>
    </div>
    <h3 class="text-tekhelet z-20 font-bold hidden">${el.name}</h3>
    <div class="absolute top-6 bottom-0 right-0 left-0 z-10 rounded-b-lg bg-semi-transparent-light-gray item_hover_bg" style="display: none;"></div>
    <Image src="${el.img}" alt='${el.name}' class="hidden"/>
  `;

  item.addEventListener('mouseenter', () => {
    if(!item.firstElementChild.classList.contains('hidden')){
      item.querySelector('.tech-stack').style.display = 'flex';
      item.querySelector('.item_hover_bg').style.display = 'flex';
    }
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('.tech-stack').style.display = 'none';
    item.querySelector('.item_hover_bg').style.display = 'none';
  });

  projects_container.appendChild(item);
});

let current = 0;
let prev = current - 1 < 0 ? projects.length - 1 : current - 1;
let next = current + 1 >= projects.length ? 0 : current + 1;

const carouseltems = document.getElementsByClassName('carouselItem')
const liveLink = document.getElementById('see_live')
const codeLink = document.getElementById('see_code')
const projectDescription = document.getElementById('project_description')

const updateCarousel = () => {
  Array.from(carouseltems).forEach((el, index) => {
    if (index === current) {
      el.className = 'w-6/12 z-10 relative carouselItem bg-gray-light rounded-xl xl:max-w-5xl 2xl:max-w-7xl';
      el.firstElementChild.classList.remove('hidden')
      el.lastElementChild.className = 'rounded-b-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.children[1].classList.remove('hidden')
      projectDescription.innerText = projects[current].description
      liveLink.href = projects[current].live_link
      codeLink.href = projects[current].code_link
    } 
    else if (index === prev) {
      el.className = 'w-5/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.children[1].classList.add('hidden')
      el.lastElementChild.className = 'opacity-60  carouselBack rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.lastElementChild.addEventListener('click', carouselBack);
    } 
    else if (index === next) {
      el.className = 'w-5/12 flex justify-center items-center absolute left-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.children[1].classList.add('hidden')
      el.lastElementChild.className = 'opacity-60 carouselNext rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.addEventListener('click', carouselNext);
    } 
    else {
      el.className = "w-6/12 flex justify-center items-center absolute left-2/4 top-1/2 bottom-1/2 carouselItem";
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