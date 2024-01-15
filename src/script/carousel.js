
import imageUrl from '../assets/images/desktop.png';
import imageUrl2 from '../assets/images/google.png';
import imageUrl3 from '../assets/images/vscode.png';

const projects = [
  {name: 'desktop', img: imageUrl},
  {name: 'google', img: imageUrl2},
  {name: 'vscode', img: imageUrl3}
]

let current = 0;
let prev = current - 1;
if (current === 0) {
  prev = projects.length - 1
}
let next = current + 1;
if (current === projects.length) {
  next = 0
}
console.log(projects[prev])
console.log(projects[current])
console.log(projects[next])

const caroussel = document.getElementById('caroussel');
caroussel.innerHTML = `
  <li class="w-1/3 flex justify-center items-center absolute right-2/4 top-1/2 bottom-1/2">
    <img src="${projects[prev].img.src}" alt="desktop" class="opacity-80" id="carouselPrev" />
  </li>
  <li class="w-1/2 z-10">
    <img src="${projects[current].img.src}" alt="desktop" class=""/>
  </li>
  <li class="w-1/3 flex justify-center items-center absolute left-2/4 top-1/2 bottom-1/2">
    <img src="${projects[next].img.src}" alt="desktop" class="opacity-80" id="carouselNext"/>
  </li>
`;

const updateCarousel = () => {
  caroussel.innerHTML = `
  <li class="w-1/3 flex justify-center items-center absolute right-2/4 top-1/2 bottom-1/2">
    <img src="${projects[prev].img.src}" alt="desktop" class="opacity-80" id="carouselPrev"/>
  </li>
  <li class="w-1/2 z-10">
    <img src="${projects[current].img.src}" alt="desktop" class=""/>
  </li>
  <li class="w-1/3 flex justify-center items-center absolute left-2/4 top-1/2 bottom-1/2">
    <img src="${projects[next].img.src}" alt="desktop" class="opacity-80" id="carouselNext"/>
  </li>
`;
const prevImg = document.getElementById("carouselPrev");
prevImg.addEventListener('click', () => carouselBack())
const nextImg = document.getElementById("carouselNext");
nextImg.addEventListener('click', () => carouselNext())
}

const carouselBack = () => {
  if(current === 0){
    current = projects.length - 1;
  }
  else {
    current = current - 1
  }
  prev = current - 1;
  if (current === 0) {
    prev = projects.length - 1
  }
  next = current + 1;
  if (current === projects.length - 1) {
    next = 0
  }
  console.log(prev)
  
  console.log(current)
  console.log(next)

  updateCarousel()
}
const carouselNext = () => {
  if(current === projects.length - 1){
    current = 0
  }
  else {
    current = current + 1
  }
  prev = current - 1;
  if (current === 0) {
    prev = projects.length - 1
  }
  next = current + 1;
  if (current === projects.length - 1) {
    next = 0
  }
  console.log(prev)
  
  console.log(current)
  console.log(next)

  updateCarousel()
}

const prevImg = document.getElementById("carouselPrev");
prevImg.addEventListener('click', () => carouselBack())
const nextImg = document.getElementById("carouselNext");
nextImg.addEventListener('click', () => carouselNext())
