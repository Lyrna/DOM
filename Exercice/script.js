//récupérer le texte de la balise h1

let titre = document.getElementsByTagName('h1')[0].innerHTML;
console.log('Premier h1 -> Contenu : ' + titre);

//on récupère les li
let liste = document.getElementsByTagName("li");

//première balise li
let firstLI = liste[0].innerHTML;
console.log('first LI : ' + firstLI);

//dernière balise li
let lastLI = liste[3].innerHTML;
console.log('last LI : ' + lastLI);

//troisième balise li
let thirdLI = liste[2].innerHTML;
console.log('troisième LI : ' + thirdLI);

//affichier le contenu html du parent de ul

let parent = document.querySelectorAll('#menu')[0].innerHTML;
console.log('HTML du parent de <ul> :' + parent);

//afficher parent du quatrième li
let parents = document.getElementsByTagName('ul')[0].innerHTML;
console.log('HTML du parent du quatrième <li> :' + parents);

//mouseover texte ul en rouge sinon noir
//je cible l'id de la div qui contient l'ul
//Addeventlistener pour le mouseover
document.getElementById('menu').addEventListener("mouseover", mouseOver);
//Addeventlistener pour le mouseout
document.getElementById('menu').addEventListener("mouseout", mouseOut);

//je colore en rouge pour le mouseover
function mouseOver() {
  document.getElementById('menu').style.color = "red";
}

//je recolore en noir si mouseout
function mouseOut() {
  document.getElementById('menu').style.color = "black";
}