// ```dataviewjs
const selectElementToAdd = ['Jambon', 'Poulet', 'Salade', 'Steak haché', 'Dinde', 'Riz complet', 'Pâtes complètes', 'Orange', 'Poire', 'Pomme', 'Banane', 'Fromage à pâte dur', 'Concombre', 'Tomate', 'Tomate cerise', 'Epinards', 'Brocoli', 'Oignon blanc', 'Oignon rouge', 'Champignon', 'Carotte', 'Oeuf', 'Fromage blanc', 'Crème fraiche', 'Quinoa', 'Houmous', 'Tapenade', 'Avocat', 'Eau pétillante', 'PQ'];
const finalList = [];

// Pour chaque élément, crée un bouton qui, lorsqu'il est cliqué, l'ajoute ou le supprime de la liste finale
selectElementToAdd.forEach((element, index) => {
  let button = document.createElement("button");
  button.textContent = element;
  button.style.margin = "5px";

  button.onclick = function () {
    // Si l'élément est déjà dans la liste, on le retire
    if (finalList.includes(element)) {
      finalList.splice(finalList.indexOf(element), 1);
      button.style.backgroundColor = ""; // not selected
    } else { // Sinon, on l'ajoute à la liste
      finalList.push(element);
      button.style.backgroundColor = "green"; // selected
    }
  };

  // Ajoute le bouton au conteneur DataviewJS
  dv.container.appendChild(button);
});

dv.paragraph('---');

// Création d'un conteneur pour la liste finale
let finalListContainer = document.createElement("div");
finalListContainer.id = "finalListContainer"; // Ajout d'un ID pour faciliter l'accès ultérieurement

let cleanListButton = document.createElement("button");
cleanListButton.style.margin = "5px";
cleanListButton.textContent = "Clear list";
// Clean fonction
cleanListButton.onclick = function () {
  // Vide la liste finale
  finalList.length = 0;

  // Réinitialise l'état de tous les boutons
  document.querySelectorAll("button").forEach(button => {
    if (selectElementToAdd.includes(button.textContent)) {
      button.style.backgroundColor = ""; // not selected
    }
  });

  // Vide le conteneur de la liste finale
  finalListContainer.innerHTML = '';
};

// Ajouter un bouton pour afficher la liste finale dans la console ou où vous le souhaitez
let showFinalListButton = document.createElement("button");
showFinalListButton.style.margin = "5px";
showFinalListButton.textContent = "Display list";
showFinalListButton.onclick = function () {
  // Vide le conteneur avant d'ajouter les éléments de la liste finale
  finalListContainer.innerHTML = '';

  // Crée une liste à puces pour les éléments de la liste finale
  let ul = document.createElement("ul");
  finalList.forEach(item => {
    let li = document.createElement("li");

    // Crée la case à cocher
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;
    checkbox.name = item;
    checkbox.value = item;

    // Crée un label pour la case à cocher
    let label = document.createElement("label");
    label.htmlFor = item;
    label.appendChild(document.createTextNode(item));

    // Ajoute la case à cocher et le label au li, puis ajoute le li au ul
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  });
  finalListContainer.appendChild(ul);

  // Si la liste est vide, affiche un message
  if (finalList.length === 0) {
    finalListContainer.textContent = "List is empty.";
  }
};

dv.container.appendChild(showFinalListButton);
dv.container.appendChild(cleanListButton);
dv.container.appendChild(finalListContainer);
// ```