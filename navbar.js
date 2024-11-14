// Seleccionar todos los elementos de navegación
const navItems = document.querySelectorAll('.nav-item');

// Función para manejar el clic
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Eliminar la clase activa de todos los elementos
        navItems.forEach(nav => nav.classList.remove('active'));
        // Agregar la clase activa al elemento clickeado
        item.classList.add('active');
    });
});
