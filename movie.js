let menuButton = document.getElementById("menuButton"); // id for the menu button
let videobutton = document.getElementById("videoPlayerLink"); // id for the button on the sub menu that leads to the video player
let subMenu = document.getElementById("submenuId"); // id for the sub menu itself
let optionsButtons = document.getElementById("optionsButtonsListId"); // id for the list of buttons below the video player
let iframePlayer = document.getElementById("vimeoId"); // class for the iframe that contains the video player
// const player = new Vimeo.Player(iframePlayer); // Creates a new Vimeo player
let menu_open = 0
let buttons_show = false

let currentsrc = "";

if (localStorage.getItem(currentsrc) === null) {
    localStorage.setItem(currentsrc, 'https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0');
}

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

iframePlayer.addEventListener("play", onVimeoPlayerReady); // Calls the function onVimeoPlayerReady when the iframe loads

function onVimeoPlayerReady() { // Handles the ability for buttons to appear when the Vimeo video ends
    const player = new Vimeo.Player(iframePlayer); // Creates a new Vimeo player

    iframePlayer.src = localStorage.getItem(currentsrc);

    player.on('ended', function() {

        let srcValue = iframePlayer.src;

        localStorage.setItem(srcValue, true);

        console.log(localStorage.getItem(srcValue));

        updateButtons();
        
    });
}

function updateButtons() { // Handles the ability to update the buttons on the video player
    let option1 = document.getElementById("option1Class");
    let option2 = document.getElementById("option2Class");

    optionsButtons.style.display = "flex";

    let srcValue = iframePlayer.src;
    
    for (let i = 0; i < videosArray.length; i++) {
        if (srcValue === videosArray[i].src) {
            option1.innerHTML = videosArray[i].option1;
            option2.innerHTML = videosArray[i].option2;
            option1.addEventListener("click", function() {
                iframePlayer.src = videosArray[i].option1Link;
                localStorage.setItem(currentsrc, videosArray[i].option1Link);
                optionsButtons.style.display = "none";
                onVimeoPlayerReady();
            });
            option2.addEventListener("click", function() {
                iframePlayer.src = videosArray[i].option2Link;
                localStorage.setItem(currentsrc, videosArray[i].option2Link);
                optionsButtons.style.display = "none";
                onVimeoPlayerReady();
            });
        }
    }
}

let videosArray = [
    { 
        src: 'https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'Kick Henri out',
        option2: 'Let Henri stay',
        option1Link:"https://player.vimeo.com/video/935984923?h=47d7c5698b&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935321011?h=9a04ff9c86&autoplay=1&title=0&byline=0&portrait=0",
        desc: "Max wakes up from dream"
    },
    { 
        src: 'https://player.vimeo.com/video/935984923?h=47d7c5698b&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'kick option',
        option1Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        desc: "Gang chooses to kick Henri out"
    },
    { 
        src: 'https://player.vimeo.com/video/935321011?h=9a04ff9c86&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'stay option',
        option1Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        desc: "Gang chooses to let Henri stay"
    }
];