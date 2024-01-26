export default function setupIntersectionObserver(targetElement, animationClass) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        targetElement.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(targetElement);
}