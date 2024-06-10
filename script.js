// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Testimonial cards
const testimonialData = [
  {
    name: 'Andrew Karthik',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'andrew-karthik.jpg'
  },
  {
    name: 'Vera Duncan',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'vera-duncan.jpg'
  },
  {
    name: 'Emily Williamson',
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'emily-williamson.jpg'
  }
];

const testimonialContainer = document.getElementById('testimonials');

testimonialData.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('testimonial-card');

  const image = document.createElement('img');
  image.src = `images/${data.image}`;
  image.alt = data.name;

  const name = document.createElement('h3');
  name.textContent = data.name;

  const quote = document.createElement('p');
  quote.textContent = data.quote;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(quote);

  testimonialContainer.appendChild(card);
});
