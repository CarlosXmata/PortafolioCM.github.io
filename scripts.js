// Función para desplazar suavemente al top de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para desplazar suavemente a una sección cuando se hace clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// scripts.js

// Obtener el modal y la imagen
const modal = document.getElementById('profile-modal');
const img = document.getElementById('profile-img');
const span = document.getElementById('close-modal');

// Cuando se haga clic en la imagen, abrir el modal
img.onclick = function() {
    modal.style.display = 'flex'; // Cambiado a 'flex' para centrar la imagen
}

// Cuando se haga clic en el botón de cierre, cerrar el modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Cuando el usuario haga clic fuera del contenido del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Función para volver al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Resaltar el enlace activo en la navegación
function updateNavActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Llamar a updateNavActiveLink en el evento scroll
window.addEventListener('scroll', updateNavActiveLink);

// Cambiar el color del fondo de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#495057';
    } else {
        nav.style.backgroundColor = '#343a40';
    }

    // scripts.js

// Obtener el modal y la imagen
const modal = document.getElementById('profile-modal');
const img = document.getElementById('profile-img');
const span = document.getElementById('close-modal');

// Cuando se haga clic en la imagen, abrir el modal
img.onclick = function() {
    modal.style.display = 'block';
}

// Cuando se haga clic en el botón de cierre, cerrar el modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Cuando el usuario haga clic fuera del contenido del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Función para volver al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

});
