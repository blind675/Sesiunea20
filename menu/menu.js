// PAS 1: Selectam elementele de care avem nevoie.
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// PAS 2: In momentul in care se declanseaza evenimentul, modificam html-ul cum avem nevoie.
function handleMenuButtonClick() {
  if(menu.style.visibility === 'hidden') {
    // Pentru a seta o proprietate de CSS, lucrurile sunt mai simple, ne folosim de obiectul style.
    menu.style.visibility = 'visible';
  } else {
    menu.style.visibility = 'hidden';
  }
}

// PAS 3: Adaugam event listeneri pentru elementele pe care dorim sa le urmarim.
menuButton.addEventListener('click', handleMenuButtonClick);