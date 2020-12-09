//récupérer le texte de la balise h1

let titre = document.getElementsByTagName('h1').textContent;
console.log('Premier h1 -> Contenu : ' + titre);

//on récupère les li
let liste = document.getElementsByTagName("li");

//première balise li
let firstLI = liste[0].innerHTML;
console.log('first LI : ' + firstLI);

//premiere balise li
let cible = document.querySelector("ul li:first-child").innerHTML;
console.log('first LI2 : ' + cible);

//dernière balise li
let lastLI = liste[3].innerHTML;
console.log('last LI : ' + lastLI);

let dernier = document.querySelector("ul li:last-child").innerHTML;
console.log('last LI2 : ' + dernier);

//troisième balise li
let thirdLI = liste[2].innerHTML;
console.log('troisième LI : ' + thirdLI);

//afficher le contenu html du parent de ul

let parent = document.querySelector('#menu').innerHTML;
console.log('HTML du parent de <ul> :' + parent);

//afficher parent du quatrième li
let parents = document.querySelector('li:nth-child(4)').parentNode.innerHTML;
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