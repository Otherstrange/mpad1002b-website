let menuButton = document.getElementById("menuButton"); // id for the menu button
let videobutton = document.getElementById("videoPlayerLink"); // id for the button on the sub menu that leads to the video player
let subMenu = document.getElementById("submenuId"); // id for the sub menu itself
let menu_open = 0


menuButton.addEventListener("click", handleMenu);
videobutton.addEventListener("click", handleMenu);


function handleMenu(event) { // Handles the ability to open and close the sub menu
    if (menu_open === 0) {
        subMenu.style.display="flex";
        menu_open = 1
        subMenu.classList.toggle('active')
    }
    else {
        subMenu.classList.remove('active');
        menu_open = 0
    }
}


window.addEventListener('click', handleClickOutside);


function handleClickOutside(event) {
    if (event.target !== menuButton && event.target !== subMenu && menu_open === 1) {
        subMenu.classList.remove('active');
        menu_open = 0
    }
}