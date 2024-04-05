document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('experience-form');
    const experiencesList = document.getElementById('experiences-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = form.elements.name.value;
      const experience = form.elements.experience.value;
  
      const experienceItem = document.createElement('div');
      experienceItem.classList.add('experience-item');
      experienceItem.innerHTML = `
        <h3>${name}</h3>
        <p>${experience}</p>
      `;
      experiencesList.appendChild(experienceItem);
  
      form.reset();
    });
  });
  