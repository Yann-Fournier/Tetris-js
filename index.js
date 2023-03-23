// Titre *************************************************************************************
var title = document.getElementById("titre")
var titre = document.createElement("canvas")
var ti = titre.getContext("2d")
title.appendChild(titre)
titre.width = 380;
// T de Tetris
ti.fillStyle="#3A55FA"; // Bleu foncé
ti.fillRect(0, 0, 15, 15);// 15+1
ti.fillRect(15, 0, 15, 15);
ti.fillRect(30, 0, 15, 15);
ti.fillRect(45, 0, 15, 15);
ti.fillRect(60, 0, 15, 15);

ti.fillRect(30, 16, 15, 15);
ti.fillRect(30, 32, 15, 15);
ti.fillRect(30, 48, 15, 15);
ti.fillRect(30, 64, 15, 15);

// E de tEtris
ti.fillStyle="#FA5C3A"; // Rouge
ti.fillRect(77, 0, 15, 15);
ti.fillRect(92, 0, 15, 15);
ti.fillRect(107, 0, 15, 15);
ti.fillRect(122, 0, 15, 15);

ti.fillRect(77, 16, 15, 15);

ti.fillRect(77, 32, 15, 15);
ti.fillRect(92, 32, 15, 15);

ti.fillRect(77, 48, 15, 15);

ti.fillRect(77, 64, 15, 15);
ti.fillRect(92, 64, 15, 15);
ti.fillRect(107, 64, 15, 15);
ti.fillRect(122, 64, 15, 15);

// T de teTris
ti.fillStyle="#EEFA3A"; // Jaune
ti.fillRect(139, 0, 15, 15);
ti.fillRect(154, 0, 15, 15);
ti.fillRect(169, 0, 15, 15);
ti.fillRect(184, 0, 15, 15);
ti.fillRect(199, 0, 15, 15);

ti.fillRect(169, 16, 15, 15);
ti.fillRect(169, 32, 15, 15);
ti.fillRect(169, 48, 15, 15);
ti.fillRect(169, 64, 15, 15);


// R de tetRis
ti.fillStyle="#59FA3A"; // Vert
ti.fillRect(216, 0, 15, 15);
ti.fillRect(231, 0, 15, 15);
ti.fillRect(246, 0, 15, 15);

ti.fillRect(216, 16, 15, 15);
ti.fillRect(261, 16, 15, 15);

ti.fillRect(216, 32, 15, 15);
ti.fillRect(231, 32, 15, 15);
ti.fillRect(246, 32, 15, 15);

ti.fillRect(216, 48, 15, 15);


ti.fillRect(216, 64, 15, 15);

ti.lineWidth = 15;
ti.moveTo(239, 42);
ti.lineTo(267, 74); // 30 , 32
ti.strokeStyle = "#59FA3A";
ti.stroke();

// I de tetrIs
ti.fillStyle="#DB3AFA"; // Violet
ti.fillRect(282, 0, 15, 15);
// ti.arc(289, 8, 8, 0, 2 * Math.PI, false);
// ti.fillStyle = "#DB3AFA";
// ti.fill();


ti.fillRect(282, 32, 15, 15);
ti.fillRect(282, 48, 15, 15);
ti.fillRect(282, 64, 15, 15);

// S de tetriS
ti.fillStyle="#FAB33A"; // Orange
ti.fillRect(320, 0, 15, 15);
ti.fillRect(335, 0, 15, 15);
ti.fillRect(350, 0, 15, 15);

ti.fillRect(305, 16, 15, 15);

ti.fillRect(320, 32, 15, 15);
ti.fillRect(335, 32, 15, 15);
ti.fillRect(350, 32, 15, 15);

ti.fillRect(365, 48, 15, 15);

ti.fillRect(320, 64, 15, 15);
ti.fillRect(335, 64, 15, 15);
ti.fillRect(350, 64, 15, 15);






// Jeu *********************************************************************************************

// Variables ---------------------------------------------------------------------------------------------
let grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,2,0,0,0,3,0,0,0],
    [1,0,2,0,0,0,3,0,0,0],
    [1,0,2,2,0,3,3,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,4,4,0,0,0,5,0,0,0],
    [0,4,4,0,0,0,5,5,0,0],
    [0,0,0,0,0,0,5,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,6,0,7,0,0,0,0,0,0],
    [6,6,0,7,7,0,0,0,0,0],
    [6,0,0,0,7,0,0,0,0,0],
]

let nextgrid = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0], 
    [0,0,0,0],
    [0,0,0,0]
]

// Est)ce qu'on peut la tourner (colision)
let tournable = [true, true, true, true, true, true, true];

// Différentes couleurs
let colors = [
    "#565656",
    "#3AFEF4", // BC
    "#FAB33A", // OR
    "#3A55FA", // BF
    "#EEFA3A", // JAU
    "#DB3AFA", // VIO
    "#FA5C3A", // ROU
    "#59FA3A", // VER
];

// Forme de départ
let shapes = [
    [ // 4 aligné 
        [0,0,0,0],
        [1,1,1,1]
    ],
    [ // L vers la droite 
        [0,0,2,0],
        [2,2,2,0]
    ],
    [ // L vers la gauche 
        [3,0,0,0],
        [3,3,3,0]
    ],
    [ // carré 
        [0,4,4,0],
        [0,4,4,0]
    ],
    [ // T 
        [0,5,0,0],
        [5,5,5,0],

    ],
    [ // esca Mont 
        [6,6,0,0],
        [0,6,6,0]
    ],
    [ // esca Decs
        [0,7,7,0],
        [7,7,0,0]
    ],
];

// conpte le nombre de bloque par ligne
let compteurs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let score = 0




// Affichage ---------------------------------------------------------------------------------------------
var grille = document.getElementById("gille");
var tetris = document.createElement("canvas");
grille.appendChild(tetris)
tetris.width = 210;
tetris.height = 400;
let ctx = tetris.getContext("2d")

var info = document.getElementById("info");
var scoreText =  document.createElement("div");
scoreText.innerHTML = "Score";
scoreText.style = "margin-top : 20px;font-size:25px"
var scoreAff = document.createElement("div");
scoreAff.innerHTML = score;
scoreAff.style = "border-style: solid; margin-top : 5px; margin-bottom: 45px;padding-top:7px; padding-bottom:7px; font-size:25px";
var nextText = document.createElement("div");
nextText.innerHTML = "Next";
nextText.style = "margin-bottom: 10px; font-size:25px";
var next = document.createElement("canvas");
let nextctx = next.getContext("2d")
next.style = "margin-left:15px;"
next.width = 84;
next.height = 168;


info.appendChild(scoreText);
info.appendChild(scoreAff);
info.appendChild(nextText);
info.appendChild(next);


function renderGrid() {
    ctx.clearRect(0, 0, tetris.width, tetris.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    for (let y = 0; y<19; y++) {
        for (let x = 0; x<10; x++) {
            ctx.fillStyle=colors[grid[y][x]];
            ctx.fillRect(x*21, y*21, 20, 20); 
        }
    }
}

function renderNext(nbr1, nbr2) {
    nextctx.clearRect(0, 0, next.width, next.height);
    nextctx.fillStyle = "#FFFFFF";
    nextctx.fillRect(0, 0, next.width, next.height);

    nextgrid[0]= shapes[nbr1][0]
    nextgrid[1]= shapes[nbr1][1]
    nextgrid[3]= shapes[nbr2][0]
    nextgrid[4]= shapes[nbr2][1]

    for (let y = 0; y<5; y++) {
        for (let x = 0; x<4; x++) {
            if (nextgrid[y][x] === 0) {
                nextctx.fillStyle="#FFFFFF";
                nextctx.fillRect(x*21, y*21, 20, 20);
            } else {
                nextctx.fillStyle=colors[nextgrid[y][x]];
                nextctx.fillRect(x*21, y*21, 20, 20);
            }
        }
    }
}

renderGrid();
renderNext(1, 2);



// Fonctionnement ------------------------------------------------------------------------------------------------------
// Event listener $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// document.addEventListener("keydown", (event)  => {
//     document.getElementById("demo").innerHTML = event.code; 
//     if (event.code === "ArrowLeft"){
//        console.log("Left");
//     } else if (event.code === "ArrowUp") {
//         console.log("Up");
//     } else if (event.code === "ArrowDown"){
//         console.log("Down"); 
//     } else if (event.code == "ArrowRight"){
//         console.log("Right");
//     } 
//   });

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });
