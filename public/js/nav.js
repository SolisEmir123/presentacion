function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');

    sidebar.classList.toggle('open');

    if(sidebar.classList.contains('open')){
        menuButton.style.color = "#fff";
    } else {
        menuButton.style.color = "#000000";
    }
}