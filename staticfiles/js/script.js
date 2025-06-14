function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Highlight current page link
const currentPage = window.location.pathname;
console.log(`Current page: ${currentPage}`);
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "#" && currentPage === "")) {
        link.classList.add("active");
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});