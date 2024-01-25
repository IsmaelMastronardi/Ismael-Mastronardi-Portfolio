import project1 from '../assets/images/AppointWheels.png';
import project2 from '../assets/images/google.png';
import project3 from '../assets/images/vscode.png';
import project4 from '../assets/images/vscode.png';

const projects_container = document.getElementById('caroussel')

const projects = [
  {
    name: 'project1',
    img: project1.src,
    live_link: 'p1',
    code_link: 'p1',
    description: 'REACT-AppointWheels is a Full Stack application that allows users to create accounts and rent cars, while allowing admins to create and delete them.',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails']
  },
  {
    name: 'project2',
    img: project2.src,
    live_link: 'p2',
    code_link: 'p2',
    description: '',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
  },
  {
    name: 'project3',
    img: project3.src,
    live_link: 'p3',
    code_link: 'p3',
    description: '',
    tech_stack: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
  },
  {
    name: 'project4',
    img: project4.src,
    live_link: 'p4',
    code_link: 'p4',
    description: '',
    tech_stack: ['Ruby', 'Ruby on Rails'],
  },
];

projects.forEach((el) => {
  const item = document.createElement('li');
  item.className = 'w-6/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
  item.dataset.name = el.name;

  const techStackHTML = el.tech_stack.map(tech => `<p class="bg-indigo">${tech}</p>`).join('');

  item.innerHTML = `
    <div class="absolute bottom-10 z-20 flex flex-row justify-around right-0 left-0 tech-stack" style="display: none;">
      ${techStackHTML}
    </div>
    <Image src="${el.img}" alt='${el.name}' class="hidden"/>
  `;

  item.addEventListener('mouseenter', () => {
    if(!item.firstElementChild.classList.contains('hidden')){
      item.querySelector('.tech-stack').style.display = 'flex';
    }
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('.tech-stack').style.display = 'none';
  });

  projects_container.appendChild(item);
});
const title = document.getElementById('project-title')

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
      el.className = 'w-7/12 z-10 relative carouselItem';
      el.firstElementChild.classList.remove('hidden')
      el.lastElementChild.className = 'rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.removeEventListener('click', carouselNext);
      title.innerText = el.dataset.name
      projectDescription.innerText = projects[current].description
      liveLink.href = projects[current].live_link
      codeLink.href = projects[current].code_link
    } else if (index === prev) {
      el.className = 'w-6/12 flex justify-center items-center absolute right-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.lastElementChild.className = 'opacity-60  carouselBack rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.lastElementChild.addEventListener('click', carouselBack);
    } else if (index === next) {
      el.className = 'w-6/12 flex justify-center items-center absolute left-45% top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.classList.add('hidden')
      el.lastElementChild.className = 'opacity-60 carouselNext rounded-xl';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.addEventListener('click', carouselNext);
    } else {
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

// const prevImg = document.getElementsByClassName("carouselBack");
// const nextImg = document.getElementsByClassName("carouselNext");

// prevImg[0].addEventListener('click', carouselBack);
// nextImg[0].addEventListener('click', carouselNext);


updateCarousel()