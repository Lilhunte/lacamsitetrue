let currentIndex = 0; // Start at the middle image for better visual effect
const items = document.querySelectorAll('.item-container');
const carousel = document.querySelector('.carousel');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove("selected");
        if (index === currentIndex) {
            item.classList.add('selected');
        }
    });
    const offset = -currentIndex * (items[0].offsetWidth + 20); // 20 is padding + margin
    carousel.style.transform = `translateX(${offset}px)`;
}

// Initial update
updateCarousel();

//Signup Login Form
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

/* // Mock data for users and relics
const users = [];
const relics = [];

// Utility functions
function createRelicElement(relic) {
    const img = document.createElement('img');
    img.src = relic.image;
    img.alt = relic.name;
    img.className = "carousel-item";
    return img;
}

// Handle displaying relics
function displayRelics() {
    const gallery = document.getElementById('relic-gallery');
    gallery.innerHTML = '';
    relics.forEach(relic => {
        gallery.appendChild(createRelicElement(relic));
    });
}

// Handle login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful');
    } else {
        alert('Invalid credentials');
    }
});

// Handle signup form
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    users.push({ username, password });
    alert('Signup successful');
});

// Handle admin upload form
document.getElementById('upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('relic-name').value;
    const imageInput = document.getElementById('relic-image');
    const reader = new FileReader();
    reader.onload = function (e) {
        relics.push({ name, image: e.target.result });
        displayRelics();
        alert('Relic uploaded');
    };
    reader.readAsDataURL(imageInput.files[0]);
});

// Initial display of relics
displayRelics();
 */