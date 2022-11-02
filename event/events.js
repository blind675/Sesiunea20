// Adaugare de evenimente:
const buttons = document.querySelectorAll('button');

// 1. Adaugare de eveniment pe un element selectat (o parte din document) - click:

function handleFirstButtonClickCallback() {
  console.log(' click on the button ');
}

// O modalitate de a pasa functia ca cel de-al doilea argument: o definim separat. Pentru a trimite ca parametru o intreaga functie, ii scriem DOAR NUMELE (fara paranteze).
const firstButton = buttons[0];
firstButton.addEventListener("click", handleFirstButtonClickCallback);

// handleButtonClickCallback();

// 2. Adaugare de eveniment pe window - resize:
window.addEventListener("resize", () => {
  console.log('browser window resize');
});

// 3. Audaugare de eveniment pe document - scroll:
document.addEventListener("scroll", () => {
  console.log('Scroll event');
});

const secondButton = buttons[1];

// secondButton.addEventListener("click", (event) => {
//   console.log('second button click event:', event);
// });

// Cand userul da click, browserul executa functia si ii trimite ca valoare pentru parametrul event un obiect ce contine toate detaliile despre evenimentul produs (click-ul dat).
function handleSecondButtonClick(event) {
  console.log(event);
}

secondButton.addEventListener("click", handleSecondButtonClick);