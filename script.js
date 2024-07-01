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
