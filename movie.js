let menuButton = document.getElementById("menuButton"); // id for the menu button
let videobutton = document.getElementById("videoPlayerLink"); // id for the button on the sub menu that leads to the video player
let subMenu = document.getElementById("submenuId"); // id for the sub menu itself
let optionsButtons = document.getElementById("optionsButtonsListId"); // id for the list of buttons below the video player
let iframePlayer = document.getElementById("vimeoId"); // id for the iframe that contains the video player
let menu_open = 0

iframePlayer.src = "https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0"

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


function handleClickOutside(event) { // Handles the ability to close the sub menu when clicking outside of it
    if (event.target !== menuButton && event.target !== subMenu && menu_open === 1) {
        subMenu.classList.remove('active');
        menu_open = 0
    }
}
        

function onVimeoPlayerReady() { // Handles the ability for buttons to appear when the Vimeo video ends
    var player = new Vimeo.Player(document.getElementById('vimeoId'));

    player.on('ended', function() {
        optionsButtons.style.display="flex";
        // You can execute any action here when the video ends
    });

    player.on('play', function() {
        optionsButtons.style.display="none";
    });
}


function updateButtons() { // Handles the ability to update the buttons on the video player
    let option1 = document.getElementById("option1Class");
    let option2 = document.getElementById("option2Class");
}


let videosArray = [
    { // Max wakes up from dream
        src: 'https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'Kick Henri out',
        option2: 'Let Henri stay',
        option1Link:"https://player.vimeo.com/video/935984923?h=47d7c5698b&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935321011?h=9a04ff9c86&autoplay=1&title=0&byline=0&portrait=0",
        watched: false,
    },
    { // Gang chooses to kick Henri out
        src: 'https://player.vimeo.com/video/935984923?h=47d7c5698b&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'kick option',
        option1Link:"https://player.vimeo.com/video/935984923?h=47d7c5698b",
        option2Link:"https://player.vimeo.com/video/935321011?h=9a04ff9c86",
        watched: false,
    },
    { // Gang chooses to let Henri stay
        src: 'https://player.vimeo.com/video/935321011?h=9a04ff9c86&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'stay option',
        option1Link:"https://player.vimeo.com/video/935984923?h=47d7c5698b",
        option2Link:"https://player.vimeo.com/video/935321011?h=9a04ff9c86",
        watched: false,
    }
];