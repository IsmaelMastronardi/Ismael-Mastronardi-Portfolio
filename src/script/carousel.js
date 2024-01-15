import imageUrl from '../assets/images/desktop.png';
import imageUrl2 from '../assets/images/google.png';
import imageUrl3 from '../assets/images/vscode.png';

var projects = document.getElementsByClassName('carouselItem');

let current = 0;
let prev = current - 1 < 0 ? projects.length - 1 : current - 1;
let next = current + 1 >= projects.length ? 0 : current + 1;

const updateCarousel = () => {
  Array.from(projects).forEach((el, index) => {
    if (index === current) {
      el.className = 'w-1/2 z-10 carouselItem';
      el.lastElementChild.className = '';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.removeEventListener('click', carouselNext);
    } else if (index === prev) {
      el.className = 'w-1/3 flex justify-center items-center absolute right-2/4 top-1/2 bottom-1/2 carouselItem';
      el.lastElementChild.className = 'opacity-80 carouselBack';
      el.lastElementChild.removeEventListener('click', carouselNext);
      el.lastElementChild.addEventListener('click', carouselBack);
    } else if (index === next) {
      el.className = 'w-1/3 flex justify-center items-center absolute left-2/4 top-1/2 bottom-1/2 carouselItem';
      el.firstElementChild.className = 'opacity-80 carouselNext';
      el.lastElementChild.removeEventListener('click', carouselBack);
      el.lastElementChild.addEventListener('click', carouselNext);
    } else {
      el.className = "w-1/3 flex justify-center items-center absolute left-2/4 top-1/2 bottom-1/2 carouselItem hidden";
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

const prevImg = document.getElementsByClassName("carouselBack");
prevImg[0].addEventListener('click', carouselBack);
const nextImg = document.getElementsByClassName("carouselNext");
nextImg[0].addEventListener('click', carouselNext);