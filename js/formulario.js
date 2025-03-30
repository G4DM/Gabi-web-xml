// Ruta del archivo XML
const rutaXML = '/data/forms/contactForm.xml';

// Función para cargar y procesar el archivo XML
fetch(rutaXML)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Obtener todos los usuarios del XML
        const usuarios = xmlDoc.getElementsByTagName("Usuario");
        const contenidoDiv = document.getElementById("contenido");

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            // Extraer datos del usuario
            const nombre = usuario.getElementsByTagName("Nombre")[0]?.textContent || "Sin nombre";
            const apellidos = usuario.getElementsByTagName("Apellidos")[0]?.textContent || "Sin apellidos";
            const descripcion = usuario.getElementsByTagName("Descripcion")[0]?.textContent || "Sin descripción";
            
            // Access social media links through the RedesSociales parent element
            const redesSociales = usuario.getElementsByTagName("RedesSociales")[0];
            const twitter = redesSociales?.getElementsByTagName("Twitter")[0]?.textContent || "#";
            const instagram = redesSociales?.getElementsByTagName("Instagram")[0]?.textContent || "#";
            const linkedin = redesSociales?.getElementsByTagName("LinkedIn")[0]?.textContent || "#";
            const github = redesSociales?.getElementsByTagName("GitHub")[0]?.textContent || "#";

            // Crear el contenido HTML para el usuario usando Bootstrap card classes
            const usuarioDiv = document.createElement("div");
            usuarioDiv.className = "col-md-4 mb-4"; // Bootstrap grid classes
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

            // Añadir la tarjeta al contenedor
            contenidoDiv.appendChild(usuarioDiv);
        }
    })
    .catch(error => console.error('Error al cargar el archivo XML:', error));