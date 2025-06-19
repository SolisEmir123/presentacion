    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para actualizar el ícono del botón según el tema
    function updateIcon() {
      if(body.classList.contains('dark')) {
        toggleBtn.textContent = '☀️';
      } else {
        toggleBtn.textContent = '🌙';
      }
    }

    // Cargar preferencia de localStorage
    function loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      if(savedTheme === 'dark') {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
      updateIcon();
    }

    // Cambiar tema y guardar en localStorage
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      if(body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateIcon();
    });

    // Aplicar tema al cargar la página
    loadTheme();