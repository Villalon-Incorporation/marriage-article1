window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Fade out loader
        const loader = document.getElementById('loader');
        loader.style.transition = 'opacity 0.8s';
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 900);
    }, 900);
    showPage('home');
});

function showPage(page) {
    document.getElementById('home').style.display = page === 'home' ? 'block' : 'none';
    document.getElementById('works').style.display = page === 'works' ? 'block' : 'none';
    document.getElementById('nav-home').classList.toggle('active', page === 'home');
    document.getElementById('nav-works').classList.toggle('active', page === 'works');
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
});

document.querySelectorAll('.nav-links button').forEach(btn => {
    btn.addEventListener('click', () => {
        if(window.innerWidth <= 600) navLinks.classList.remove('open');
    });
});

document.body.addEventListener('click', function(e) {
    if(window.innerWidth <= 600 && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
    }
}, true);