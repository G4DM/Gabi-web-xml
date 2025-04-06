document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS con efectos mejorados
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-quart',
        once: true,
        mirror: false,
        offset: 100
    });

    // Función para copiar código con animación mejorada
    const copyButtons = document.querySelectorAll('.btn-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const codeBlock = this.parentElement.querySelector('pre code');
            const codeText = codeBlock.textContent;
            const iconCopy = this.querySelector('.fa-copy');
            const iconCheck = this.querySelector('.fa-check');
            const iconError = this.querySelector('.fa-times');
            
            try {
                await navigator.clipboard.writeText(codeText);
                
                // Animación de éxito
                this.classList.add('copied');
                this.classList.remove('error');
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    this.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Error al copiar:', err);
                
                // Animación de error
                this.classList.add('error');
                this.classList.remove('copied');
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    this.classList.remove('error');
                }, 2000);
            }
        });
    });

    // Mostrar/ocultar botones de copiar con efecto suave
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            const btn = this.querySelector('.btn-copy');
            if (!btn.classList.contains('copied') && !btn.classList.contains('error')) {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }
        });
        
        block.addEventListener('mouseleave', function() {
            const btn = this.querySelector('.btn-copy');
            if (!btn.classList.contains('copied') && !btn.classList.contains('error')) {
                btn.style.opacity = '0';
                btn.style.transform = 'translateY(-5px)';
            }
        });
    });

    // Preloader con efecto de desvanecimiento
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 300);
        }
    });

    // Scroll suave mejorado para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Actualizar URL sin recargar
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    // Resaltado de sección activa con Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) navLink.classList.add('active');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('article').forEach(section => {
        observer.observe(section);
    });

    // Botón "ir arriba" con efecto
    const btnSubir = document.getElementById('btnSubir');
    
    if (btnSubir) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                btnSubir.classList.add('mostrar');
            } else {
                btnSubir.classList.remove('mostrar');
            }
        });
        
        btnSubir.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Efecto hover moderno para tarjetas
    const cards = document.querySelectorAll('.card, article');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Cambiar el título de la página cuando está inactiva
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