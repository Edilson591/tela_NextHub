const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay-menu');


menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open'); 
});


const menuItems = document.querySelectorAll('.sidebar a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('open'); 
    overlay.classList.remove('open'); 
  });
});


overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});
