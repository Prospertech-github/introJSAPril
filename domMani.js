let openMenu = document.querySelector('#openMenu')
let closeMenu = document.querySelector('#closeMenu')
let mainMenu = document.querySelector('#mainMenu')

openMenu.addEventListener('click', function () {
  mainMenu.style.display = 'flex';
})
closeMenu.addEventListener('click', function () {
  mainMenu.style.display = 'none';
})