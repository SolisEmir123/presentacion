  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');

  menuButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    sidebar.classList.toggle('open');
    menuButton.style.transition = "transform 0.3s ease";
    menuButton.style.color = sidebar.classList.contains('open') ? "#fff" : "#000";
  }
