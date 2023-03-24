// Titre : PRESENTATION ************************************************************************
var presenta = document.getElementById("presTitre");
var tit = document.createElement("canvas");
var titrePres = tit.getContext("2d");
presenta.appendChild(tit);
tit.width = 955;
tit.height = 80;


// P de Presentation
titrePres.fillStyle="#3A55FA"; // Bleu foncé
titrePres.fillRect(0, 0, 15, 15);
titrePres.fillRect(15, 0, 15, 15);
titrePres.fillRect(30, 0, 15, 15);
titrePres.fillRect(45, 0, 15, 15);

titrePres.fillRect(0, 16, 15, 15);
titrePres.fillRect(60, 16, 15, 15);

titrePres.fillRect(0, 32, 15, 15);
titrePres.fillRect(15, 32, 15, 15);
titrePres.fillRect(30, 32, 15, 15);
titrePres.fillRect(45, 32, 15, 15);

titrePres.fillRect(0, 48, 15, 15);
titrePres.fillRect(0, 64, 15, 15);




// R de pResentation
titrePres.fillStyle="#FA5C3A"; // ROU
titrePres.fillRect(77, 0, 15, 15);
titrePres.fillRect(92, 0, 15, 15);
titrePres.fillRect(107, 0, 15, 15);

titrePres.fillRect(77, 16, 15, 15);
titrePres.fillRect(122, 16, 15, 15);

titrePres.fillRect(77, 32, 15, 15);
titrePres.fillRect(92, 32, 15, 15);
titrePres.fillRect(107, 32, 15, 15);

titrePres.fillRect(77, 48, 15, 15);


titrePres.fillRect(77, 64, 15, 15);

titrePres.lineWidth = 15;
titrePres.moveTo(99, 42);
titrePres.lineTo(135, 74); // 30 , 32
titrePres.strokeStyle = "#FA5C3A", // ROU
titrePres.stroke();

// E de prEsentation
titrePres.fillStyle="#3AFEF4", // BC
titrePres.fillRect(139, 0, 15, 15);
titrePres.fillRect(154, 0, 15, 15);
titrePres.fillRect(169, 0, 15, 15);
titrePres.fillRect(184, 0, 15, 15);

titrePres.fillRect(139, 16, 15, 15);

titrePres.fillRect(139, 32, 15, 15);
titrePres.fillRect(154, 32, 15, 15);

titrePres.fillRect(139, 48, 15, 15);

titrePres.fillRect(139, 64, 15, 15);
titrePres.fillRect(154, 64, 15, 15);
titrePres.fillRect(169, 64, 15, 15);
titrePres.fillRect(184, 64, 15, 15);

// S de preSentation
titrePres.fillStyle="#EEFA3A", // JAU
titrePres.fillRect(216, 0, 15, 15);
titrePres.fillRect(231, 0, 15, 15);
titrePres.fillRect(246, 0, 15, 15);

titrePres.fillRect(201, 16, 15, 15);

titrePres.fillRect(216, 32, 15, 15);
titrePres.fillRect(231, 32, 15, 15);
titrePres.fillRect(246, 32, 15, 15);

titrePres.fillRect(261, 48, 15, 15);

titrePres.fillRect(216, 64, 15, 15);
titrePres.fillRect(231, 64, 15, 15);
titrePres.fillRect(246, 64, 15, 15);

// E de presEntation
titrePres.fillStyle= "#59FA3A", // VER
titrePres.fillRect(278, 0, 15, 15);
titrePres.fillRect(293, 0, 15, 15);
titrePres.fillRect(308, 0, 15, 15);
titrePres.fillRect(323, 0, 15, 15);

titrePres.fillRect(278, 16, 15, 15);

titrePres.fillRect(278, 32, 15, 15);
titrePres.fillRect(293, 32, 15, 15);

titrePres.fillRect(278, 48, 15, 15);

titrePres.fillRect(278, 64, 15, 15);
titrePres.fillRect(293, 64, 15, 15);
titrePres.fillRect(308, 64, 15, 15);
titrePres.fillRect(323, 64, 15, 15);

// N de preseNtation
titrePres.fillStyle="#DB3AFA"; // Violet
titrePres.fillRect(340, 0, 15,15);
titrePres.fillRect(404, 0, 15,15);

titrePres.fillRect(340, 16, 15,15);
titrePres.fillRect(356, 16, 15,15);
titrePres.fillRect(404, 16, 15,15);

titrePres.fillRect(340, 32, 15,15);
titrePres.fillRect(372, 32, 15,15);
titrePres.fillRect(404, 32, 15,15);

titrePres.fillRect(340, 48, 15,15);
titrePres.fillRect(388, 48, 15,15);
titrePres.fillRect(404, 48, 15,15);

titrePres.fillRect(340, 64, 15,15);
titrePres.fillRect(404, 64, 15,15);

// T de presenTation
titrePres.fillStyle="#FAB33A", // OR
titrePres.fillRect(421, 0, 15, 15);// 15+1
titrePres.fillRect(436, 0, 15, 15);
titrePres.fillRect(451, 0, 15, 15);
titrePres.fillRect(466, 0, 15, 15);
titrePres.fillRect(481, 0, 15, 15);

titrePres.fillRect(451, 16, 15, 15);
titrePres.fillRect(451, 32, 15, 15);
titrePres.fillRect(451, 48, 15, 15);
titrePres.fillRect(451, 64, 15, 15);

// A de presentAtion
titrePres.lineWidth = 15;
titrePres.moveTo(489, 80);
titrePres.lineTo(520, 0); // 30 , 32
titrePres.strokeStyle = "#3A55FA", // BF
titrePres.stroke();

titrePres.fillStyle = "#3A55FA"; // BF
titrePres.fillRect(513, 35, 15, 15);

titrePres.lineWidth = 15;
titrePres.moveTo(552, 80);
titrePres.lineTo(520, 0); // 30 , 32
titrePres.strokeStyle = "#3A55FA", // BF
titrePres.stroke();

// T de presentaTion
titrePres.fillStyle="#FA5C3A"; // ROU
titrePres.fillRect(546, 0, 15, 15);// 15+1
titrePres.fillRect(561, 0, 15, 15);
titrePres.fillRect(576, 0, 15, 15);
titrePres.fillRect(591, 0, 15, 15);
titrePres.fillRect(606, 0, 15, 15);

titrePres.fillRect(576, 16, 15, 15);
titrePres.fillRect(576, 32, 15, 15);
titrePres.fillRect(576, 48, 15, 15);
titrePres.fillRect(576, 64, 15, 15);

// I de presentatIon
titrePres.fillStyle="#3AFEF4"; // BC
titrePres.fillRect(626, 0, 15, 15);
// ti.moveTo(289, 8)
// ti.arc(289, 8, 8, 0, 2 * Math.PI, false);
// ti.fillStyle = "#DB3AFA";
// ti.fill();


titrePres.fillRect(626, 32, 15, 15);
titrePres.fillRect(626, 48, 15, 15);
titrePres.fillRect(626, 64, 15, 15);

// O de presentatiOn
titrePres.fillStyle = "#EEFA3A"; // JAU
titrePres.fillRect(661, 0, 15, 15);
titrePres.fillRect(676, 0, 15, 15);
titrePres.fillRect(691, 0, 15, 15);

titrePres.fillRect(646, 16, 15, 15);
titrePres.fillRect(706, 16, 15, 15);

titrePres.fillRect(646, 32, 15, 15);
titrePres.fillRect(706, 32, 15, 15);

titrePres.fillRect(646, 48, 15, 15);
titrePres.fillRect(706, 48, 15, 15);

titrePres.fillRect(661, 64, 15, 15);
titrePres.fillRect(676, 64, 15, 15);
titrePres.fillRect(691, 64, 15, 15);

// N de preseNtation
titrePres.fillStyle="#59FA3A", // VER
titrePres.fillRect(729, 0, 15,15);
titrePres.fillRect(789, 0, 15,15);

titrePres.fillRect(729, 16, 15,15);
titrePres.fillRect(745, 16, 15,15);
titrePres.fillRect(789, 16, 15,15);

titrePres.fillRect(729, 32, 15,15);
titrePres.fillRect(759, 32, 15,15);
titrePres.fillRect(789, 32, 15,15);

titrePres.fillRect(729, 48, 15,15);
titrePres.fillRect(774, 48, 15,15);
titrePres.fillRect(789, 48, 15,15);

titrePres.fillRect(729, 64, 15,15);
titrePres.fillRect(789, 64, 15,15);