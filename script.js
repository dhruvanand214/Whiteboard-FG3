// script by Dhruv Anand
// used in sidebar section

const menu = document.querySelector('.toggle-btn');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});