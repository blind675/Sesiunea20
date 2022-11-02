const currentPageLink = document.getElementById('cursuri');
console.log(currentPageLink);

// 1. Modificarea proprietatilor de CSS si a claselor:

// currentPageLink.style.color = 'black';
// currentPageLink.style.fontSize = '100px';

// Adaugarea/stergerea claselor se face pornind de la obiectul classList:
//NU ASA currentPageLink.style = {color : 'black', fontSize : '50px'}
currentPageLink.classList.add('bigOrange');

// Modificarea oricarei proprietati de CSS se face prin obiectul style:
const buttonElement = document.querySelector('button');
buttonElement.style.visibility = 'hidden';
// visibility : hidden | visible
// display : none | block | flex ..

// 2. Crearea elementelor individual, aduagare de atribute, adaugare in DOM:
// Cream un div:
const imageContainer = document.getElementById('myContainer');
imageContainer.innerHTML = '<img src="https://via.placeholder.com/150" alt="placeholder"></img>';

// Cum putem goli continutul unui tag de HTML:
// imageContainer.innerHTML = '';

// innerHTML poate fi periculos, daca continutul vine de la user, sau o sursa pe care n-o cunoastem. O alta varianta este urmatoarea:

// 3. Crearea elementelor individual, aduagare de atribute, adaugare in DOM:
const imagePlaceholderElement = document.getElementById('imagePlaceholder');
imagePlaceholderElement.innerHTML = '';
// Cream un div:
const img = document.createElement('img');
// Ii adaugam atributele corespunzatoare:
img.setAttribute('src', 'https://via.placeholder.com/50');
img.setAttribute('alt', 'Very Small Placeholder');
// Adaugam imaginea drept copil al imageContainer:
imageContainer.appendChild(img);
