let menuButton = document.getElementById("menuButton"); // id for the menu button
let videobutton = document.getElementById("videoPlayerLink"); // id for the button on the sub menu that leads to the video player
let subMenu = document.getElementById("submenuId"); // id for the sub menu itself
let optionsButtons = document.getElementById("optionsButtonsListId"); // id for the list of buttons below the video player
let menu_open = 0;
let buttons_show = false;
let test_var = 0;
let player = document.getElementById("player");

let videosArray = [
    {
        src: 'https://player.vimeo.com/video/937566585?h=88882e0c5f&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Yeah Henri's a freak",
        option2: "No, he's not a freak",
        option1Link: "maxcallshenrifreak",
        option2Link: "maxthinkshenrischill",
        desc: "Starting scene. Killer and whatnot",
        videoid: "startingscene",
    },
    {
        src: 'https://player.vimeo.com/video/937553012?h=c42256c85b&autoplay=1&title=0&byline=0&portrait=0',
        option1: "test1",
        option2: "test2",
        option1Link: "test1",
        option2Link: "test2",
        desc: "Max calls Henri a freak D:",
        videoid: "maxcallshenrifreak",
    },
    {
        src: 'https://player.vimeo.com/video/937572196?h=b90319a3a5&autoplay=1&title=0&byline=0&portrait=0',
        option1: "test1",
        option2: "test2",
        option1Link: "test1",
        option2Link: "test2",
        desc: "Max calls Henri a freak D: test",
        videoid: "maxthinkshenrischill"
    },
    { 
        src: 'https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'Kick Henri out',
        option2: 'Let Henri stay',
        option1Link:"gangkickshenriout",
        option2Link:"gangletshenristay",
        desc: "Max wakes up from dream",
        videoid: "maxwakesupfromdream",
    },
    { 
        src: 'https://player.vimeo.com/video/935984923?h=47d7c5698b&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'kick option',
        option1Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        desc: "Gang chooses to kick Henri out",
        videoid: "gangkickshenriout",
    },
    { 
        src: 'https://player.vimeo.com/video/935321011?h=9a04ff9c86&autoplay=1&title=0&byline=0&portrait=0',
        option1: 'test1',
        option2: 'stay option',
        option1Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        option2Link:"https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0",
        desc: "Gang chooses to let Henri stay",
        videoid: "gangletshenristay",
    }
];

let currentsrc = "" // Variable to store the current video source;

localStorage.setItem(currentsrc, "startingscene");

// if (localStorage.getItem(currentsrc) === null) {

//     localStorage.setItem(currentsrc, 'maxwakesupfromdream');
    
//     console.log("local storage was null")
// }

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

function initializePlayer() {

    let vimeoPlayer = document.createElement("iframe");

    vimeoPlayer.classList.add("vimeoClass");

    vimeoPlayer.setAttribute("id", "vimeoId");

    let toLoadSrc = ""

    for (let i = 0; i < videosArray.length; i++) {

        if (localStorage.getItem(currentsrc) === videosArray[i].videoid) {

            toLoadSrc = videosArray[i].src;

            break;
        }
    }

    vimeoPlayer.src = toLoadSrc;

    vimeoPlayer.frameborder = "0"

    vimeoPlayer.allow = "autoplay; fullscreen; picture-in-picture";

    vimeoPlayer.allowfullscreen = true;

    player.appendChild(vimeoPlayer);

    const interactPlayer = new Vimeo.Player(vimeoPlayer);

    interactPlayer.on('ended', function() {

        let option1 = document.getElementById("option1Class");

        let option2 = document.getElementById("option2Class");

        let srcValue = vimeoPlayer.src;

        for (let i = 0; i < videosArray.length; i++) {

            console.log("loop testing")

            if (srcValue === videosArray[i].src) {
            
                option1.innerHTML = videosArray[i].option1;
            
                option2.innerHTML = videosArray[i].option2;

                localStorage.setItem(videosArray[i].videoid, true);
                
                console.log("found video in array")

                option1.addEventListener("click", function() {

                    console.log("Option 1 clicked")
                    
                    // Sets current video source to the option 1 link (actually a videoid)
                    localStorage.setItem(currentsrc, videosArray[i].option1Link);
                    
                    optionsButtons.style.display = "none";

                    const removePlayer = document.getElementById("vimeoId");

                    removePlayer.remove()

                    initializePlayer();
                });
                    
                option2.addEventListener("click", function() {
                    
                    console.log("Option 2 clicked")
                    
                    // Sets current video source to the option 2 link (actually a videoid)
                    localStorage.setItem(currentsrc, videosArray[i].option2Link);
                    
                    optionsButtons.style.display = "none";

                    const removePlayer = document.getElementById("vimeoId");

                    removePlayer.remove()

                    initializePlayer();
                });
                    
                break;

            }
        }

        optionsButtons.style.display = "flex";

        console.log("Video ended");
    });

    interactPlayer.on('play', function() { // Handles the ability to hide the buttons when the video is playing

        optionsButtons.style.display = "none";

    });

}

initializePlayer();

// function onVimeoPlayerReady() { // Handles the ability for buttons to appear when the Vimeo video ends
//     const player = new Vimeo.Player(iframePlayer);

//     // Listen for the 'ended' event
//     player.on('ended', onVideoEnded);
// }

// function loadVideoFromLocalStorage() {
//     // Load the video source from local storage or set a default one
//     currentsrc = localStorage.getItem(currentsrc) || 'https://player.vimeo.com/video/935318444?h=1c05a2036a&autoplay=1&title=0&byline=0&portrait=0';
//     iframePlayer.src = currentsrc;
// }

// function onVideoEnded() {
//     console.log("Video ended");
//     updateButtons();
// }

// function changeVideo(newSrc) {
//     // Change the src of the iframePlayer
//     iframePlayer.src = newSrc;
//     // Reinitialize player after changing src
//     initializePlayer();
// }

// function updateButtons() { // Handles the ability to update the buttons on the video player
//     let option1 = document.getElementById("option1Class");
//     let option2 = document.getElementById("option2Class");

//     optionsButtons.style.display = "flex";

//     let srcValue = iframePlayer.src;
    
//     for (let i = 0; i < videosArray.length; i++) {
//         if (srcValue === videosArray[i].src) {

//             option1.innerHTML = videosArray[i].option1;

//             option2.innerHTML = videosArray[i].option2;

//             option1.addEventListener("click", function() {

//                 console.log("Option 1 clicked")

//                 changeVideo(videosArray[i].option1Link);

//                 localStorage.setItem(currentsrc, videosArray[i].option1Link);

//                 optionsButtons.style.display = "none";
//             });

//             option2.addEventListener("click", function() {

//                 console.log("Option 2 clicked")

//                 changeVideo(videosArray[i].option2Link);

//                 localStorage.setItem(currentsrc, videosArray[i].option2Link);

//                 optionsButtons.style.display = "none";
//             });

//             break;
//         }
//     }
// }