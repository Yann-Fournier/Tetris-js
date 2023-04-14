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

let grid = Grid(); // grille du jeu
let nextgrid = nextGrid(); // grille des pièces suivantes

// tableau des différentes couleurs utilisées
let colors = [
    "#565656", // Gris
    "#3AFEF4", // Bleu Clair
    "#FAB33A", // Orange
    "#3A55FA", // Bleu Foncé
    "#EEFA3A", // Jaune
    "#DB3AFA", // Violet
    "#FA5C3A", // Rouge
    "#59FA3A" // Vert
];

// Tableau avec toutes les pièces et leurs positions
let shapes = [
    [ // 4 aligné
        [
            [1,1,1,1]
        ],[
            [1],
            [1],
            [1],
            [1]
        ],[
            [1,1,1,1]
        ],[
            [1],
            [1],
            [1],
            [1]
        ]
    ],[ // L vers la droite
        [
            [0,0,2], // Exeption collision gauche
            [2,2,2]
        ],[
            [2,0], 
            [2,0],
            [2,2]  
        ],[
            [2,2,2], // Exeption collision droit
            [2,0,0]
        ],[
            [2,2], // Exeption collision bas
            [0,2],
            [0,2]
        ]
    ],[ // L vers la gauche 
        [
            [3,0,0], // Exeption collision droit
            [3,3,3]
        ],[
            [3,3], // Exeption collision bas
            [3,0],
            [3,0]
        ],[
            [3,3,3], // Exeption collision gauche
            [0,0,3] 
        ],[
            [0,3], 
            [0,3], 
            [3,3]
        ] 
    ],[ // carré 
        [
            [4,4],
            [4,4]
        ],[
            [4,4],
            [4,4]
        ],[
            [4,4],
            [4,4]
        ],[
            [4,4],
            [4,4]
        ]
    ],[ // T 
        [
            [0,5,0],
            [5,5,5]
        ],[
            [5,0],
            [5,5],
            [5,0]
        ],[
            [5,5,5],
            [0,5,0]
        ],[
            [0,5],
            [5,5],
            [0,5]
        ],
    ],[ // esca Mont 
        [
            [6,6,0],
            [0,6,6]
        ],[
            [0,6],
            [6,6],
            [6,0]
        ],[
            [6,6,0],
            [0,6,6]
        ],[
            [0,6],
            [6,6],
            [6,0]
        ],
    ],[ // esca Decs
        [
            [0,7,7],
            [7,7,0]
        ],[
            [7,0],
            [7,7],
            [0,7]
        ],[
            [0,7,7],
            [7,7,0]
        ],[
            [7,0],
            [7,7],
            [0,7]
        ] 
    ],
];

let compteurs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // conpte le nombre de bloque par ligne
let score = 0; // Score du joueur (max : 999999)
let highScore = 0; // hight Score du moment
let piece = 0; // 
let abscisse = 3; // position horizontale de la pièce
let ordonnee = 0; // position verticale de la pièce
let position = 0; // orientation de la pièce
var newPiece = false // pour indiquer au programme de générer une nouvelle pièce

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

renderGrid();

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

function renderPiece() {
    for (let y=0; y < shapes[piece][position].length; y++) {
        for (let x=0; x < shapes[piece][position][y].length; x++) {
            if (grid[ordonnee+y][abscisse+x] === 0) {
                grid[ordonnee+y][abscisse+x] = shapes[piece][position][y][x];
            } 
        }
    }
    renderGrid();
}

function clearPiece() {
    for (let y=0; y < shapes[piece][position].length; y++) {
        for (let x=0; x < shapes[piece][position][y].length; x++) {
            if (shapes[piece][position][y][x] !==0) {
                grid[ordonnee+y][abscisse+x] = 0;
            } 
        }
    }
    renderGrid();
}

function replaceRows() {
    let ligneGrid = [0,0,0,0,0,0,0,0,0,0];
    let cpt = 0;
    for (let i = 0; i <compteurs.length; i++) {
        if (compteurs[i] === 10) {
            let lenGrid = grid.splice(i, 1);
            let lenCompteurs = compteurs.splice(i,1);
            lenGrid = grid.unshift(ligneGrid);
            lenCompteurs = compteurs.unshift(0);
            cpt += 1;
        }
    }

    if (cpt === 2) {
        score = score + 300;
        scoreAff.innerHTML = score;
    } else if (cpt === 3) {
        score = score + 500;
        scoreAff.innerHTML = score;
    } else if (cpt === 4) {
        score = score + 1000;
        scoreAff.innerHTML = score;
    } else if (cpt===1) {
        score = score + 100;
        scoreAff.innerHTML = score; 
    }
    renderGrid();
}

function hideStartMenu () {
    document.getElementById('start-menu').style.display = 'none';
}

function hideEndMenu () {
    document.getElementById('end-menu').style.display = 'none';
}

function showEndMenu () {
    document.getElementById('end-menu').style.display = 'block';
    document.getElementById('end-score').innerHTML = score;
    if (highScore < score) {
        highScore = score;
    }
    document.getElementById('best-score').innerHTML = highScore;
}

// Fonctionnement ------------------------------------------------------------------------------------------------------
function checkBottom() {
    //Colision du dessous
    let hauteur = shapes[piece][position].length-1;
    if(piece === 1 && position === 3) {
        if ((grid[ordonnee + hauteur + 1][abscisse + 1] !== 0) || (grid[ordonnee + hauteur - 1][abscisse] !== 0)) {
            return true;
        }
    } else if (piece === 2 && position === 1) {
        if ((grid[ordonnee + hauteur + 1][abscisse] !== 0) || (grid[ordonnee + hauteur - 1][abscisse + 1] !== 0)) {
            return true;
        }
    } else {
        for (let x=0; x<shapes[piece][position][hauteur].length; x++) {
            if (shapes[piece][position][hauteur][x] === piece+1) {
                if (grid[ordonnee + hauteur + 1][abscisse + x] !== 0) {
                    return true;
                }
            } else if (shapes[piece][position][hauteur][x] === 0) {
                if (grid[ordonnee + hauteur][abscisse + x] !== 0) {
                    return true;
                }
            } 
        }
    }
    return false;
}

function checkLeft() {
    if (piece === 1 && position === 0) {
        if(grid[ordonnee][abscisse+1] !== 0 || grid[ordonnee+1][abscisse-1] !== 0) {
            return true
        }
    } else if (piece === 2 && position === 2) {
        if(grid[ordonnee][abscisse-1] !== 0 || grid[ordonnee+1][abscisse+1] !== 0) {
            return true
        }
    } else {
        for (let y = 0; y<shapes[piece][position].length; y++) {
            if (shapes[piece][position][y][0] === piece+1) {
                if (grid[ordonnee+y][abscisse-1] !==0) {
                    return true;
                }
            } else if (shapes[piece][position][y][0] === 0) {
                if (grid[ordonnee+y][abscisse] !==0) {
                    return true;
                } 
            }
        }
    }
    return false;
}

function checkRight() {
    let hauteur = shapes[piece][position].length-1;
    let largeur = shapes[piece][position][0].length-1;
    if (piece === 1 && position === 2) {
        if(grid[ordonnee][abscisse+largeur+1] !== 0 || grid[ordonnee+1][abscisse+largeur-1] !== 0) {
            return true
        }
    } else if (piece === 2 && position === 0) {
        if(grid[ordonnee][abscisse + largeur-1] !== 0 || grid[ordonnee+1][abscisse+largeur+1] !== 0) {
            return true
        }
    } else {
        for (let y = 0; y<shapes[piece][position].length; y++) {
            if (shapes[piece][position][y][largeur] === piece+1) {
                if (grid[ordonnee+y][abscisse + largeur +1] !==0) {
                    return true;
                }
            } else if (shapes[piece][position][y][largeur] === 0) {
                if (grid[ordonnee+y][abscisse + largeur] !==0) {
                    return true;
                } 
            }
        } 
    }
    return false;
}

function checkTurn() {
    for (let y = 0; y<shapes[piece][position].length; y++) {
        for (let x = 0; x<shapes[piece][position][y].length; x++) {
            if (shapes[piece][position][y][x] !== 0 && grid[ordonnee+y][abscisse+x] !== 0) {
                return true;
            }
        }
    }
    return false;
}


function moveLeft() {
    clearPiece();
    if (abscisse>0) {
        if (!checkLeft(piece, position)) {
            abscisse -= 1;
        }
    }
    renderPiece();
}

function moveRight() {
    clearPiece();
    nbr = 10-shapes[piece][position][0].length;
    if (abscisse<nbr) {
        if (!checkRight()) {
            abscisse += 1;
        }
    }
    renderPiece();
}

function turnRight() {
    let vrai = true;
    let posi =  position;
    clearPiece();
    if (position === 3) {
        position = 0;
    } else {
        position += 1;
    }
    if (abscisse > 10 - shapes[piece][position][0].length) {
        vrai = false
    }
    if (ordonnee > 19-shapes[piece][position].length) {
        vrai = false;
    }
    if(checkTurn()) {
        vrai = false;
    }
    if (!vrai) {
        position = posi
    }
    renderPiece();
}

function turnLeft() {
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
    if (ordonnee > 19-shapes[piece][position].length) {
        vrai = false;
    }
    if(checkTurn()) {
        vrai = false;
    }
    if (!vrai) {
        position = posi
    }
    renderPiece(piece, abscisse, ordonnee, position);
}

function reset() {
    grid = Grid();
    nextgrid = nextGrid();
    compteurs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    score = 0;
    scoreAff.innerHTML = score;
    piece = 0;
    abscisse = 3;
    ordonnee = 0;
    position = 0;
    gameOn = true;
}

function compter() {
    for (let y = 0; y < shapes[piece][position].length; y++) {
        for (let x = 0; x <shapes[piece][position][y].length; x++) {
            if (shapes[piece][position][y][x] !== 0) {
                compteurs[ordonnee+y] += 1;
            }
        }
    }
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

//Event listener ************************************************************************************
document.addEventListener("keydown", (event)  => {
    if (event.code === "ArrowLeft"){
       moveLeft();
    } else if (event.code == "ArrowRight"){
        moveRight();
    } else if (event.code == "KeyA") {
        turnLeft();
    } else if (event.code == "KeyD") {
        turnRight();
    } else if (event.code == "Space") {
        turnLeft();
    }
});

function Jeu() {
    piece = Math.floor(Math.random() * 7);
    renderPiece();

    let nbr1 = Math.floor(Math.random() * 7);
    let nbr2 = Math.floor(Math.random() * 7);
    renderGridNext(nbr1, nbr2);
    

    var gravity = setInterval(function gravit() {
        if (ordonnee < 19 - shapes[piece][position].length) {
            clearPiece();
            if (checkBottom()) {
                if (ordonnee === 0) {
                    clearInterval(gravity);
                    showEndMenu();
                } else {
                    renderPiece();
                    newPiece = true;
                }
            } else {
                ordonnee+=1;
                renderPiece();
            }
        } else {
            newPiece= true;
        }


        if (newPiece) {
            // Remplacer les lignes 
            compter();
            replaceRows();
            piece = nbr1;
            nbr1 = nbr2;
            nbr2 = Math.floor(Math.random() * 7); 
            renderGridNext(nbr1, nbr2);
            abscisse = 3;
            ordonnee = 0;
            position = 0;
            newPiece = false;
            renderPiece();
        }
    },500);
}
