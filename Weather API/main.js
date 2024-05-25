

// Fetch the API
fetch('https://reqres.in/api/users?page=2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process the fetched data and create cards
        const slideContainer = document.getElementById('slide-container');
        data.data.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = user.avatar;
            image.alt = `${user.first_name} ${user.last_name}`;

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
            cardContent.innerHTML = `<h2>${user.first_name} ${user.last_name}</h2><p>Email: ${user.email}</p>`;

            card.appendChild(image);
            card.appendChild(cardContent);
            slideContainer.appendChild(card);
        });

        // Activate slider
        const slider = document.querySelector('.slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', e => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 0.5; // Adjust scroll speed
            slider.scrollLeft = scrollLeft - walk;
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

