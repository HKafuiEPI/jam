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
      // Save the experience to a JSON file
      const experienceData = {
        name: name,
        experience: experience
      };

      fetch('/experiences.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(experienceData)
      })
      .then(response => response.json())
      .then(data => {
        const publicationList = document.getElementById('publication-list');
        const publicationItem = document.createElement('div');
        publicationItem.classList.add('publication-item');
        publicationItem.innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.experience}</p>
        `;
        publicationList.appendChild(publicationItem);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      experiencesList.appendChild(experienceItem);
  
      form.reset();
    });
  });
  