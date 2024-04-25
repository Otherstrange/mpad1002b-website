let menuButton = document.getElementById("menuButton"); // id for the menu button
let videobutton = document.getElementById("videoPlayerLink"); // id for the button on the sub menu that leads to the video player
let subMenu = document.getElementById("submenuId"); // id for the sub menu itself
let optionsButtons = document.getElementById("optionsButtonSecId"); // id for the list of buttons below the video player
let resetButton = document.getElementById("resetProgress"); // id for the reset button
let menu_open = 0;
let buttons_show = false;
let test_var = 0;
let player = document.getElementById("player");
let rememberEnding = "";

let videosArray = [
    {
        src: 'https://player.vimeo.com/video/937566585?h=88882e0c5f&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Yeah Henri's a freak",
        option2: "No, he's not a freak",
        option1Link: "maxcallshenrifreak",
        option2Link: "maxthinkshenrischill",
        desc: "Starting scene. Killer and whatnot",
        videoid: "startingscene",
        endingid: "none"
    },
    {
        src: 'https://player.vimeo.com/video/937553012?h=c42256c85b&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Pick Kayley for Truth or Dare",
        option2: "Pick Amen for Truth or Dare",
        option1Link: "kayleyispicked",
        option2Link: "amenispicked",
        desc: "Max calls Henri a freak D:",
        videoid: "maxcallshenrifreak",
        endingid: "none"
    },
    {
        src: 'https://player.vimeo.com/video/937572196?h=b90319a3a5&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Pick Kayley for Truth or Dare",
        option2: "Pick Amen for Truth or Dare",
        option1Link: "kayleyispicked",
        option2Link: "amenispicked",
        desc: "Max calls Henri a freak D: test",
        videoid: "maxthinkshenrischill",
        endingid: "none"
    }, // end of the start of the movie
    {  // Start of Kayley Path
        src: 'https://player.vimeo.com/video/938443720?h=ac5c164a5e&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Kick Henri out",
        option2: "Let Henri stay",
        option1Link: "maxkickshenriout",
        option2Link: "maxletshenristay",
        desc: "Kayley is chosen for truth or dare. Deadly consequences...",
        videoid: "kayleyispicked",
        endingid: "none"
    },
    { // Start of Kayley Path - Kick Henri Out
        src: 'https://player.vimeo.com/video/938446960?h=d90159f425&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Go left",
        option2: "Go right",
        option1Link: "kayleyeverybodyhenri",
        option2Link: "kayleygoright1",
        desc: "The gang kicks Henri out. (Kayley path)",
        videoid: "maxkickshenriout",
        endingid: "none"
    },
    { // Kayley path - Everyone is Henri - End
        src: 'https://player.vimeo.com/video/938450308?h=aa7de6b801&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Max takes a potion (that good kush ong), and EVERYONE IS HENRI?!?",
        videoid: "kayleyeverybodyhenri",
        endingid: "everyonehenriend"
    },
    { // Kayley path - Going right 1
        src: 'https://player.vimeo.com/video/938454060?h=f0a3d193bc&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Try to crawl away",
        option2: "Listen to her monologue",
        option1Link: "kayleycrawlanddie",
        option2Link: "kayleylistentomonologue",
        desc: "Max goes right! (Kayley path) (no Henri)",
        videoid: "kayleygoright1",
        endingid: "none"
    },
    { // Kayley path - Going right - Crawl away and die END 
        src: 'https://player.vimeo.com/video/938455761?h=d0203e938d&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Everyone is dead. Kiran is alive. Maybe don't try escaping. Sounds counter intuitive.",
        videoid: "kayleycrawlanddie",
        endingid: "crawlanddieend"
    },
    { // Kayley path - Going right - Listen to Monologue - END
        src: 'https://player.vimeo.com/video/938455807?h=ec8f9c8419&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Max listens to Kiran's monologue, and Henri saves the day!!",
        videoid: "kayleylistentomonologue",
        endingid: "listentomonologueend"
    },
    { // Start of Kayley path, let Henri stay
        src: 'https://player.vimeo.com/video/938446903?h=42683e7093&title=0&autoplay=1&byline=0&portrait=0',
        option1: "Go left",
        option2: "Go right",
        option1Link: "kayleygoleft2",
        option2Link: "kayleygoright2",
        desc: "The gang lets Henri stay (Kayley path)",
        videoid: "maxletshenristay",
        endingid: "none"
    },
    { // Kayley path - Henri stays - Going right
        src: 'https://player.vimeo.com/video/938462885?h=4be9ae9394&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Don't go with Henri",
        option2: "Go with Henri",
        option1Link: "kayleydontgowithhenri",
        option2Link: "kayleygowithhenri",
        desc: "Max and Henri decide to split up. Max goes right!",
        videoid: "kayleygoright2",
        endingid: "none"
    },
    { // Kayley path - Henri stays - Going left
        src: 'https://player.vimeo.com/video/938462984?h=6b03aaf737&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Don't go with Henri",
        option2: "Go with Henri",
        option1Link: "kayleydontgowithhenri",
        option2Link: "kayleygowithhenri",
        desc: "Max and Henri decide to stick together?!!?",
        videoid: "kayleygoleft2",
        endingid: "none"
    },
    { // Kayley path - Henri stays - Go with Henri END
        src: 'https://player.vimeo.com/video/938467177?h=431020ddfd&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Run away with Henri, seems like a good choice!",
        videoid: "kayleygowithhenri",
        endingid: "gowithhenriend"
    },
    { // Kayley path - Henri stays - Go without Henri END
        src: 'https://player.vimeo.com/video/938463077?h=64314be1d3&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Henri could be the killer!! FUCK THAT GUY!!",
        videoid: "kayleydontgowithhenri",
        endingid: "gowithouthenriend"
    },
    { // Start of Amen path
        src: 'https://player.vimeo.com/video/938467268?h=daeac1799d&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Kick Henri out",
        option2: "Let Henri stay",
        option1Link: "maxkickshenrioutamen",
        option2Link: "maxletshenristayamen",
        desc: "Amen is chosen for truth or dare. Deadly consequences..?",
        videoid: "amenispicked",
        endingid: "none"
    },
    { // Amen path - Henri can stay
        src: 'https://player.vimeo.com/video/938467596?h=34acac02e1&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Go left",
        option2: "Go right",
        option1Link: "amengoleft1",
        option2Link: "amengoright1",
        desc: "The gang lets Henri stay. Such nice individuals.",
        videoid: "maxletshenristayamen",
        endingid: "none"
    },
    { // Amen path - Henri can stay - Left path
        src: 'https://player.vimeo.com/video/938470917?h=fd3e1f8ac9&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Don't go with Henri",
        option2: "Go with Henri",
        option1Link: "amendontgowithhenri",
        option2Link: "amengowithhenri",
        desc: "Max and Henri decide to stick together?!!?",
        videoid: "amengoleft1",
        endingid: "none"
    },
    { // Amen path - Henri can stay - Right path
        src: 'https://player.vimeo.com/video/938470921?h=1f6c953256&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Don't go with Henri",
        option2: "Go with Henri",
        option1Link: "amendontgowithhenri",
        option2Link: "amengowithhenri",
        desc: "Max and Henri decide to split up. Max goes right!",
        videoid: "amengoright1",
        endingid: "none"
    },
    { // Amen path - Henri stays - Going left - Go with Henri END
        src: 'https://player.vimeo.com/video/938467177?h=431020ddfd&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Run away with Henri, seems like a good choice!",
        videoid: "amengowithhenri",
        endingid: "gowithhenriend"
    },
    { // Amen path - Henri stays - Going left - Go without Henri END
        src: 'https://player.vimeo.com/video/938463077?h=64314be1d3&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Henri could be the killer!! FUCK THAT GUY!!",
        videoid: "amendontgowithhenri",
        endingid: "gowithouthenriend"
    },
    { // Amen path - Henri cant stay
        src: 'https://player.vimeo.com/video/938470898?h=d4bc0fac93&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Go left",
        option2: "Go right",
        option1Link: "ameneveryoneishenri",
        option2Link: "amengoright2",
        desc: "The gang kicks Henri out. Such rude individuals.",
        videoid: "maxkickshenrioutamen",
        endingid: "none"

    },
    { // Amen path - Henri leaves - Everybody's Henri END
        src: 'https://player.vimeo.com/video/938450308?h=aa7de6b801&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Max took some edibles, and now everyone is handsome?!?!",
        videoid: "ameneveryoneishenri",
        endingid: "everyonehenriend"
    },
    { // Amen path - Henri leaves - Go right
        src: 'https://player.vimeo.com/video/938484024?h=89831b92a4&autoplay=1&title=0&byline=0&portrait=0',
        option1: "Try to crawl away",
        option2: "Listen to her monologue",
        option1Link: "amencrawlanddie",
        option2Link: "amenlistentomonologue",
        desc: "Max took some edibles, and now everyone is handsome?!?!",
        videoid: "amengoright2",
        endingid: "none"
    },
    { // Amen path - Going right - Crawl away and die END 
        src: 'https://player.vimeo.com/video/938455761?h=d0203e938d&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Everyone is dead. Kiran is alive. Maybe don't try escaping. Sounds counter intuitive.",
        videoid: "amencrawlanddie",
        endingid: "crawlanddieend"
    },
    { // Amen path - Going right - Listen to Monologue - END
        src: 'https://player.vimeo.com/video/938455807?h=ec8f9c8419&autoplay=1&title=0&byline=0&portrait=0',
        option1: "END",
        option2: "END",
        option1Link: "startingscene",
        option2Link: "startingscene",
        desc: "Max listens to Kiran's monologue, and Henri saves the day!!",
        videoid: "amenlistentomonologue",
        endingid: "listentomonologueend"
    }
];

let previousSrc = localStorage.currentsrc;

if (previousSrc === null) {

    localStorage.setItem("currentsrc", 'maxwakesupfromdream');
    
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

function initializePlayer() {

    let vimeoPlayer = document.createElement("iframe");

    vimeoPlayer.classList.add("vimeoClass");

    vimeoPlayer.setAttribute("id", "vimeoId");

    let toLoadSrc = ""

    for (let i = 0; i < videosArray.length; i++) {

        if (localStorage.getItem("currentsrc") === videosArray[i].videoid) {

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

    let endingid = "";

    interactPlayer.on('ended', function() {

        let srcValue = vimeoPlayer.src;

        for (let i = 0; i < videosArray.length; i++) {

            if (srcValue === videosArray[i].src) {

                endingid = videosArray[i].endingid;

                if (endingid !== "none") {

                    rememberEnding = endingid;

                }

                console.log(endingid);

                break;
            
            }
        
        }

        let option1 = document.getElementById("option1Class");

        let option2 = document.getElementById("option2Class");

        optionsButtons.style.display = "flex";
        
        document.exitFullscreen();

        for (let i = 0; i < videosArray.length; i++) {

            if (srcValue === videosArray[i].src) {
            
                option1.innerHTML = videosArray[i].option1;
            
                option2.innerHTML = videosArray[i].option2;

                localStorage.setItem(videosArray[i].videoid, true);

                option1.addEventListener("click", function() {
                    
                    // Sets current video source to the option 1 link (actually a videoid)
                    localStorage.setItem("currentsrc", videosArray[i].option1Link);

                    optionsButtons.style.display = "none";

                    const removePlayer = document.getElementById("vimeoId");

                    removePlayer.remove()

                    initializePlayer();

                });
                    
                option2.addEventListener("click", function() {
                    
                    // Sets current video source to the option 2 link (actually a videoid)
                    localStorage.setItem("currentsrc", videosArray[i].option2Link);
                    
                    optionsButtons.style.display = "none";

                    const removePlayer = document.getElementById("vimeoId");

                    removePlayer.remove()

                    initializePlayer();

                });
                    
                break;

            }
        }

        optionsButtons.style.display = "flex";

    });

    interactPlayer.on('play', function() { // Handles the ability to hide the buttons when the video is playing

        optionsButtons.style.display = "none";

    });

}

resetButton.addEventListener("click", function() {

    localStorage.setItem("currentsrc", "startingscene");

    optionsButtons.style.display = "none";

    const removePlayer = document.getElementById("vimeoId");

    removePlayer.remove()

    initializePlayer();

});

initializePlayer();