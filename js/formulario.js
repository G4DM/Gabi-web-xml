// formulario.js - Versión mejorada con animaciones y manejo de errores

// Detectar si estamos en GitHub Pages o en local
const isGitHubPages = window.location.host.includes('github.io');

// Definir rutas según el entorno
const rutaXML = isGitHubPages 
    ? '/Gabi-web-xml/data/forms/contactForm.xml'  // Ruta para GitHub Pages
    : '../data/forms/contactForm.xml';           // Ruta para desarrollo local

// Función para mostrar estado de carga
function showLoadingState() {
    const contenidoDiv = document.getElementById("contenido");
    contenidoDiv.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="mt-3">Cargando información de usuarios...</p>
        </div>
    `;
}

// Función para mostrar error
function showError(error) {
    const contenidoDiv = document.getElementById("contenido");
    contenidoDiv.innerHTML = `
        <div class="col-12">
            <div class="alert alert-danger shadow-sm" role="alert">
                <h4 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Error al cargar los datos</h4>
                <p>${error.message}</p>
                <hr>
                <p class="mb-0"><small>Ruta intentada: ${rutaXML}</small></p>
            </div>
        </div>
    `;
}

// Función para crear tarjetas de usuario
function createUserCard(usuario) {
    const nombre = usuario.querySelector('Nombre')?.textContent || "Sin nombre";
    const apellidos = usuario.querySelector('Apellidos')?.textContent || "Sin apellidos";
    const descripcion = usuario.querySelector('Descripcion')?.textContent || "Estudiante de DAW";
    
    const redesSociales = usuario.querySelector('RedesSociales');
    const twitter = redesSociales?.querySelector('Twitter')?.textContent || "#";
    const instagram = redesSociales?.querySelector('Instagram')?.textContent || "#";
    const linkedin = redesSociales?.querySelector('LinkedIn')?.textContent || "#";
    const github = redesSociales?.querySelector('GitHub')?.textContent || "#";

    const usuarioDiv = document.createElement("div");
    usuarioDiv.className = "col-md-4 mb-4";
    usuarioDiv.innerHTML = `
        <div class="card usuario h-100">
            <div class="card-body">
                <h2 class="card-title">${nombre} ${apellidos}</h2>
                <p class="card-text">${descripcion}</p>
                <h5 class="mt-3"><i class="fas fa-share-alt me-2"></i>Redes Sociales</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="${twitter}" target="_blank" class="text-decoration-none"><i class="fab fa-twitter me-2"></i>Twitter</a></li>
                    <li class="mb-2"><a href="${instagram}" target="_blank" class="text-decoration-none"><i class="fab fa-instagram me-2"></i>Instagram</a></li>
                    <li class="mb-2"><a href="${linkedin}" target="_blank" class="text-decoration-none"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                    <li><a href="${github}" target="_blank" class="text-decoration-none"><i class="fab fa-github me-2"></i>GitHub</a></li>
                </ul>
            </div>
        </div>
    `;

    return usuarioDiv;
}

// Función principal para cargar y mostrar los datos
async function loadUserData() {
    showLoadingState();
    
    try {
        const response = await fetch(rutaXML);
        
        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Verificar errores de parseo
        const errorNode = xmlDoc.querySelector('parsererror');
        if (errorNode) {
            throw new Error('Error al parsear XML: ' + errorNode.textContent);
        }

        // Obtener usuarios
        const usuarios = xmlDoc.getElementsByTagName("Usuario");
        const contenidoDiv = document.getElementById("contenido");
        
        // Limpiar contenedor
        contenidoDiv.innerHTML = '';
        
        // Crear tarjetas para cada usuario
        if (usuarios.length === 0) {
            contenidoDiv.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-info shadow-sm">
                        <i class="fas fa-info-circle me-2"></i> No se encontraron usuarios en el archivo XML.
                    </div>
                </div>
            `;
            return;
        }

        for (let i = 0; i < usuarios.length; i++) {
            const usuarioCard = createUserCard(usuarios[i]);
            contenidoDiv.appendChild(usuarioCard);
        }

        // Inicializar AOS para animaciones
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

    } catch (error) {
        console.error('Error:', error);
        showError(error);
    }
}

// Cargar los datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init();
    
    // Cargar datos de usuarios
    loadUserData();
    
    // Configurar el título dinámico
    let originalTitle = document.title;
    let isTabActive = true;
    
    window.addEventListener('blur', () => {
        isTabActive = false;
        document.title = '¡No te vayas! 😊 | ' + originalTitle;
    });
    
    window.addEventListener('focus', () => {
        isTabActive = true;
        document.title = originalTitle;
    });
});