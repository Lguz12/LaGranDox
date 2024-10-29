
// Cargar el navbar y el footer
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}

// Cargar el navbar y el footer al inicio
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('navbar.html', 'navbar');
    loadComponent('footer.html', 'footer');
});









// const contenido=document.querySelector(".contenido")
// Seleccionar los botones de "Servicios" y "Nosotros"
const serviciosBtn = document.getElementById('servicios-btn');
const nosotrosBtn = document.getElementById('nosotros-btn');

// Seleccionar los menús verticales
const menuServicios = document.getElementById('menu-vertical-servicios');
const menuNosotros = document.getElementById('menu-vertical-nosotros');

// Función para mostrar el menú correspondiente
function showMenu(menu) {
    // Ocultar cualquier otro menú abierto
    menuServicios.classList.remove('active');
    menuNosotros.classList.remove('active');
    // bluer()
    // Mostrar el menú correspondiente
    menu.classList.add('active');
}

// Función para ocultar todos los menús
function hideMenus() {
    menuServicios.classList.remove('active');
    menuNosotros.classList.remove('active');
    // contenido.style="filter= blur(0px);"
}

// Añadir eventos de hover para cada botón
serviciosBtn.addEventListener('mouseenter', () => showMenu(menuServicios));
nosotrosBtn.addEventListener('mouseenter', () => showMenu(menuNosotros));

// Opción para ocultar los menús cuando el ratón sale de la navbar o del menú vertical
// menuServicios.addEventListener('mouseleave', hideMenus);
// serviciosBtn.addEventListener('mouseleave',hideMenus)
// nosotrosBtn.addEventListener('mouseleave',hideMenus)
// menuNosotros.addEventListener('mouseleave', hideMenus);

// serviciosBtn.addEventListener('mouseleave', () => {
//     menuServicios.addEventListener('mouseleave', () => {
//         hideMenus();
//     });
// });
// nosotrosBtn.addEventListener('mouseleave', () => {
//     menuNosotros.addEventListener('mouseleave', () => {
//         hideMenus();
//     });
// });


// function bluer(){
//         contenido.style="filter: blur(5px);"
// }


let serviciosBtnLeft = false;
let menuServiciosLeft = false;

let nosotrosBtnleft = false;
let menuNosotrosleft = false;

serviciosBtn.addEventListener('mouseleave', () => {
    serviciosBtnLeft = true;
    checkHideMenus();
});

menuServicios.addEventListener('mouseleave', () => {
    menuServiciosLeft = true;
    checkHideMenus();
});

function checkHideMenus() {
    if (serviciosBtnLeft && menuServiciosLeft) {
        hideMenus();
        // Reset the flags for future interactions
        serviciosBtnLeft = false;
        menuServiciosLeft = false;
    }
}
nosotrosBtn.addEventListener('mouseleave', () => {
    nosotrosBtnleft = true;
    checkHideMenus();
});
menuNosotros.addEventListener('mouseleave', () => {
    menuNosotrosleft = true;
    checkHideMenus1();
});
function checkHideMenus1() {
    if (nosotrosBtnleft && menuNosotrosleft) {
        hideMenus();
        // Reset the flags for future interactions
        nosotrosBtnleft = false;
        menuNosotrosleft = false;
    }
}

  // Cambia el valor de --num a 1500 después de que la animación termine
  statsElement.addEventListener('animationend', () => {
    statsElement.style.setProperty('--num', 1500);
});





