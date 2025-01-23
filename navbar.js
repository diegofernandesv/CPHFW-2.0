// Seleccionar todos los elementos de navegación
const navItems = document.querySelectorAll('.nav-item');

// Función para manejar el clic
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});
