 
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

function toggleDropdown(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        e.target.parentElement.classList.toggle("active");
    }
}
 