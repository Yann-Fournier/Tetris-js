// Titre : TETRIS *************************************************************************************
var title = document.getElementById("titre")
var titre = document.createElement("canvas")
var ti = titre.getContext("2d")
title.appendChild(titre)
titre.width = 380;
titre.height = 85;


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
// ti.moveTo(289, 8)
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
function Grid() {
    let grid = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    return grid;
}

function nextGrid() {
    let nextgrid = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0], 
        [0,0,0,0],
        [0,0,0,0]
    ]
    return nextgrid
}

let grid = Grid();
let nextgrid = nextGrid();

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
    "#59FA3A" // VER
];

// Forme de départ
let shapes = [
    [ // 4 aligné
        [
            [1,1,1,1]
        ],
        [
            [1],
            [1],
            [1],
            [1]
        ],
        [
            [1,1,1,1]
        ],  
        [
            [1],
            [1],
            [1],
            [1],
        ]
    ],
    [ // L vers la droite
        [
            [0,0,2],
            [2,2,2]
        ],
        [
            [2,0],
            [2,0],
            [2,2],
        ],
        [
            [2,2,2],
            [2,0,0],
        ],
        [
            [2,2],
            [0,2],
            [0,2],
        ]
    ],
    [ // L vers la gauche 
        [
            [3,0,0,],
            [3,3,3,]
        ],
        [
            [3,3],
            [3,0],
            [3,0]
        ],
        [
            [3,3,3],
            [0,0,3]
        ],
        [
            [0,3],
            [0,3],
            [3,3]
        ]
        
    ],
    [ // carré 
        [
            [4,4],
            [4,4]
        ],
        [
            [4,4],
            [4,4]
        ],
        [
            [4,4],
            [4,4]
        ],
        [
            [4,4],
            [4,4]
        ]
    ],
    [ // T 
        [
            [0,5,0],
            [5,5,5],
        ],
        [
            [5,0],
            [5,5],
            [5,0]
        ],
        [
            [5,5,5],
            [0,5,0]
        ],
        [
            [0,5],
            [5,5],
            [0,5]
        ],
    ],
    [ // esca Mont 
        [
            [6,6,0],
            [0,6,6]
        ],
        [
            [0,6],
            [6,6],
            [6,0]
        ],
        [
            [6,6,0],
            [0,6,6]
        ],
        [
            [0,6],
            [6,6],
            [6,0]
        ],
    ],
    [ // esca Decs
        [
            [0,7,7],
            [7,7,0]
        ],
        [
            [7,0],
            [7,7],
            [0,7]
        ],
        [
            [0,7,7],
            [7,7,0]
        ],
        [
            [7,0],
            [7,7],
            [0,7]
        ] 
    ],
];

// conpte le nombre de bloque par ligne
let compteurs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Score du joueur
let score = 0;
let hightScore = 0;

let piece = 0;
let abscisse = 3;
let ordonnee = 0;
let position = 0;

//
var gameOn = true;
var newPiece = true
var cpt = 0


// Affichage ---------------------------------------------------------------------------------------------
var grille = document.getElementById("gille");
var tetris = document.createElement("canvas");
grille.appendChild(tetris)
tetris.width = 210;
tetris.height = 399;
let ctx = tetris.getContext("2d")

var info = document.getElementById("info");
var scoreText =  document.createElement("div");
scoreText.innerHTML = "Score";
scoreText.style = "margin-top : 20px;font-size:25px; font-family: 'Alkatra', cursive;"
var scoreAff = document.createElement("div");
scoreAff.innerHTML = score;
scoreAff.style = "border-style: solid; margin-top : 5px; margin-bottom: 45px;padding-top:7px; padding-bottom:7px; font-size:25px; font-family: 'Alkatra', cursive;";
var nextText = document.createElement("div");
nextText.innerHTML = "Next";
nextText.style = "margin-bottom: 10px; font-size:25px; font-family: 'Alkatra', cursive;";
var next = document.createElement("canvas");
let nextctx = next.getContext("2d")
next.style = "margin-left:20px;"
next.width = 84;
next.height = 105;


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

function renderGridNext(nbr1, nbr2) {
    nextctx.clearRect(0, 0, next.width, next.height);
    nextgrid = nextGrid();

    if (nbr1 === 0) {
        nextgrid[0] = shapes[nbr1][0][0];
    } else {
        nextgrid[0]= shapes[nbr1][0][0]
        nextgrid[1]= shapes[nbr1][0][1]
    }
    
    if (nbr2 === 0) {
        nextgrid[3] = shapes[nbr2][0][0];
    } else {
        nextgrid[3]= shapes[nbr2][0][0]
        nextgrid[4]= shapes[nbr2][0][1]
    }
    

    for (let y = 0; y<nextgrid.length; y++) {
        for (let x = 0; x<nextgrid[y].length; x++) {
            if (nextgrid[y][x] !== 0) {
                nextctx.fillStyle=colors[nextgrid[y][x]];
                nextctx.fillRect(x*21, y*21, 20, 20);
            }
        }
    }
}

renderGrid();
//renderGridNext(3, 6); // nbr de 1 à 7



// Fonctionnement ------------------------------------------------------------------------------------------------------
//Event listener ************************************************************************************
document.addEventListener("keydown", (event)  => {
    console.log(event.code);
    if (event.code === "ArrowLeft"){
       arrowLeft();
    } else if (event.code == "ArrowRight"){
        arrowRight();
    // } else if (event.code == "Space") {
    //     space();
    } else if (event.code == "KeyA") {
        keyA();
    } else if (event.code == "KeyD") {
        keyD();
    }
});

function arrowLeft() {
    clearPiece(piece, abscisse, ordonnee, position);
    if (abscisse>0) {
        abscisse -= 1;
    }
    renderPiece(piece, abscisse, ordonnee, position);
}
function arrowRight() {
    clearPiece(piece, abscisse, ordonnee, position);
    nbr = 10-shapes[piece][position][0].length;
    if (abscisse<nbr) {
        abscisse += 1;
    }
    renderPiece(piece, abscisse, ordonnee, position);
}

// function space() {
// }

function keyD() {
    let vrai = true;
    let posi =  position;

    clearPiece(piece, abscisse, ordonnee, position);

    if (position === 3) {
        position = 0;
    } else {
        position += 1;
    }

    if (abscisse > 10 - shapes[piece][position][0].length) {
        vrai = false
    }

    if (!vrai) {
        position = posi
    }
    
    renderPiece(piece, abscisse, ordonnee, position);
}
function keyA() {
    let vrai = true;
    let posi =  position;

    clearPiece(piece, abscisse, ordonnee, position);
    
    if (position === 0) {
        position = 3;
    } else {
        position -= 1;
    }

    if (abscisse > 10 - shapes[piece][position][0].length) {
        vrai = false
    }

    if (!vrai) {
        position = posi
    }

    renderPiece(piece, abscisse, ordonnee, position);
}

function reset() {
    grid = Grid();
    nextgrid = nextGrid();

    // conpte le nombre de bloque par ligne
    compteurs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    // Score du joueur
    score = 0;
    hightScore = 0;

    piece = 0;
    abscisse = 3;
    ordonnee = 0;
    position = 0;

    // 
    gameOn = true
}
// function down() {
// }

function isTournable() {
}

function collision() {
    // if () {
    //     return
    // } 

    for (let y=0; y < shapes[nbr].length; y++) {
        for (let x=0; x < shapes[nbr][y].length; x++) {
            if (grid[ord+y][abs+x] !== 0) {
                return;
            }
        }
    }
}

function renderPiece(nbr, abs, ord, pos) {
    for (let y=0; y < shapes[nbr][pos].length; y++) {
        for (let x=0; x < shapes[nbr][pos][y].length; x++) {
            if (grid[ord+y][abs+x] === 0) {
                grid[ord+y][abs+x] = shapes[nbr][pos][y][x];
            } 
        }
    }
    renderGrid();
}

function clearPiece(nbr, abs, ord, pos) {
    for (let y=0; y < shapes[nbr][pos].length; y++) {
        for (let x=0; x < shapes[nbr][pos][y].length; x++) {
            if (grid[ord+y][abs+x] === nbr+1) {
                grid[ord+y][abs+x] = 0;
            } 
        }
    }
    renderGrid();
}



function writeNext(i)
{
    if(i == 5)
        return;

    setTimeout(function()
    {
        writeNext(i + 1);
        console.log(i);

    }, 1000);
}



function hideEndMenu () {
    document.getElementById('end-menu').style.display = 'none';
    //gameContainer.classList.remove('backdrop-blur');
}

function hideStartMenu () {
    document.getElementById('start-menu').style.display = 'none';
    //gameContainer.classList.remove('backdrop-blur');
}

function showEndMenu () {
    document.getElementById('end-menu').style.display = 'block';
    //gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;
    // This way we update always our highscore at the end of our game
    // if we have a higher high score than the previous
    if (highScore < score) {
        highScore = score;
    }
    document.getElementById('best-score').innerHTML = highScore;
}


// début du jeu quand on appuis sur le bouton play
document.getElementById('play').addEventListener('click', function() {
    hideStartMenu();
    Jeu();
})

// devbut du jeu quand on appuis sur le bouton play
document.getElementById('restart').addEventListener('click', function() {
    hideEndMenu();
    reset();
    Jeu();
})



function interval() {

}

function Jeu() {
    piece = Math.floor(Math.random() * 7);
    renderPiece(piece, abscisse, ordonnee, position);

    let nbr1 = Math.floor(Math.random() * 7);
    let nbr2 = Math.floor(Math.random() * 7);
    renderGridNext(nbr1, nbr2);
    

    var gravity = setInterval(function gravity() {
        if (ordonnee < 19 - shapes[piece][position].length) {
            clearPiece(piece, abscisse, ordonnee, position);
            ordonnee+=1;
            renderPiece(piece, abscisse, ordonnee, position);
        } else {
            newPiece= false;
        }

        if (!newPiece) {
            piece = nbr1;
            nbr1 = nbr2;
            nbr2 = Math.floor(Math.random() * 7); 
            renderGridNext(nbr1, nbr2);
            abscisse = 3;
            ordonnee = 0;
            position = 0;
            newPiece = true
            renderPiece(piece, abscisse, ordonnee, position);
        }
        
    },500);

    
    
    
    
    // const truc =  setInterval(function () {
    //     let nbr1 = Math.floor(Math.random() * 7);
    //     let nbr2 = Math.floor(Math.random() * 7);
    //     renderGridNext(nbr1, nbr2);
    // }, 1000);
    
    
    // setInterval(function () {
    //     let nbr = Math.floor(Math.random() * 7);
    //     renderPiece(piece, abscisse, ordonnee, position);
    // }, 1000);
}

function main() {
}

//main();