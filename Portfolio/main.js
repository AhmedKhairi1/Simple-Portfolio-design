const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "A simple weather forecast app using OpenWeather API. Features real-time weather data, 5-day forecast, and responsive design.",
    projectUrl: "#",
    githubUrl: "https://github.com/AhmedKhairi1",
    // technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive personal website to showcase my work. Built with modern web technologies and optimized for performance.",
    projectUrl: "#",
    githubUrl: "https://github.com/AhmedKhairi1",
    // technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 3,
    title: "Todo List",
    description: "A task management tool with localStorage support. Features include task creation, editing, deletion, and persistent storage.",
    projectUrl: "#",
    githubUrl: "https://github.com/AhmedKhairi1",
    // technologies: ["JavaScript", "Local Storage", "CSS", "HTML"]
  }
];
function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="card-links">
          <a href="${project.projectUrl}" class="project-link" target="_blank">View Project</a>
          <a href="${project.githubUrl}" class="github-link" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  `;
}
function renderProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = projectsData.map(project => createProjectCard(project)).join('');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('project-link') || e.target.classList.contains('github-link')) {
      e.target.style.transform = 'translateY(-2px) scale(1.05)';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('project-link') || e.target.classList.contains('github-link')) {
      e.target.style.transform = 'translateY(0) scale(1)';
    }
  });
});