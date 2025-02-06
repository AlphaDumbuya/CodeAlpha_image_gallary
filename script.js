const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = 
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
});

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.gallery-item').forEach(item => {
        const altText = item.querySelector('img').alt.toLowerCase();
        item.style.display = altText.includes(searchTerm) ? 'block' : 'none';
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterSelect = document.querySelector('.filter-select');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

filterSelect.addEventListener('change', (e) => {
    const filter = e.target.value;
    galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

const featuredImage = document.getElementById('mainImage');
let currentImageIndex = 0;

const images = [
    "https://images.unsplash.com/photo-1735440461430-1087fe181e3b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1738522477288-82f5db85cfc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1737100593814-8ceb04f29cca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
];

const forwardBtn = document.querySelector('.forward-btn');
const backBtn = document.querySelector('.back-btn');

forwardBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    featuredImage.src = images[currentImageIndex];
});

backBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    featuredImage.src = images[currentImageIndex];
});