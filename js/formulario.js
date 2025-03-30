// Detectar si estamos en GitHub Pages o en local
const isGitHubPages = window.location.host.includes('github.io');

// Definir rutas según el entorno
const rutaXML = isGitHubPages 
    ? '/Gabi-web-xml/data/forms/contactForm.xml'  // Ruta para GitHub Pages
    : '../data/forms/contactForm.xml';           // Ruta para desarrollo local (con servidor)

// Función para cargar y procesar el archivo XML
fetch(rutaXML)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Verificar si hay errores en el XML
        const errorNode = xmlDoc.querySelector('parsererror');
        if (errorNode) {
            throw new Error('Error al parsear XML: ' + errorNode.textContent);
        }

        // Obtener todos los usuarios del XML
        const usuarios = xmlDoc.getElementsByTagName("Usuario");
        const contenidoDiv = document.getElementById("contenido");

        // Limpiar contenedor antes de agregar nuevos elementos
        contenidoDiv.innerHTML = '';

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            // Extraer datos del usuario (usando operador de encadenamiento opcional)
            const nombre = usuario.querySelector('Nombre')?.textContent || "Sin nombre";
            const apellidos = usuario.querySelector('Apellidos')?.textContent || "Sin apellidos";
            const descripcion = usuario.querySelector('Descripcion')?.textContent || "Sin descripción";
            
            // Obtener redes sociales
            const redesSociales = usuario.querySelector('RedesSociales');
            const twitter = redesSociales?.querySelector('Twitter')?.textContent || "#";
            const instagram = redesSociales?.querySelector('Instagram')?.textContent || "#";
            const linkedin = redesSociales?.querySelector('LinkedIn')?.textContent || "#";
            const github = redesSociales?.querySelector('GitHub')?.textContent || "#";

            // Crear tarjeta de usuario
            const usuarioDiv = document.createElement("div");
            usuarioDiv.className = "col-md-4 mb-4";
            usuarioDiv.innerHTML = `
                <div class="card usuario h-100">
                    <div class="card-body">
                        <h2 class="card-title">${nombre} ${apellidos}</h2>
                        <p class="card-text">${descripcion}</p>
                        <h5 class="mt-3">Redes Sociales</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="${twitter}" target="_blank" class="text-decoration-none"><i class="fab fa-twitter me-2"></i>Twitter</a></li>
                            <li class="mb-2"><a href="${instagram}" target="_blank" class="text-decoration-none"><i class="fab fa-instagram me-2"></i>Instagram</a></li>
                            <li class="mb-2"><a href="${linkedin}" target="_blank" class="text-decoration-none"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                            <li><a href="${github}" target="_blank" class="text-decoration-none"><i class="fab fa-github me-2"></i>GitHub</a></li>
                        </ul>
                    </div>
                </div>
            `;

            contenidoDiv.appendChild(usuarioDiv);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Mostrar mensaje de error en la página
        document.getElementById("contenido").innerHTML = `
            <div class="alert alert-danger">
                Error al cargar los datos: ${error.message}
                <br><small>Ruta intentada: ${rutaXML}</small>
            </div>
        `;
    });