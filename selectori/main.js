// 1. Selectam dupa id.
const clickMeButton = document.getElementById("myButton");
console.log(clickMeButton);

// 2. Selectam dupa numele tagului.
const buttons = document.getElementsByTagName("button");
console.log(buttons);

// 3. Selectam dupa clasa.
const containers = document.getElementsByClassName("container");
console.log(containers);
// Pentru a returna doar div-ul identificat de clasa, extragem primul element din ce returneaza getElementsByClassName
console.log(containers[0]);

// Toate cele 3 metode de mai sus pot fi inlocuite de una singura: querySelector.
// querySelector returneaza un singur element, daca exista mai multe tag-uri de tip button, va fi returnat doar primul.
// Daca dorim sa selectam toate elementele de un anumit tip, folosim querySelectorAll.

// #<id> - id
// .<class>
// <tag>

// 1. Selectam dupa id (numele id-ului este prefixat de #, ca in CSS).
let element = document.querySelector("#myButton");
console.log(element);
// 2. Selectam dupa tag (string-ul primit ca argument contine doar numele tag-ului).
element = document.querySelector(".container");
console.log(element);
// 3. Selectam dupa clasa (numele clasei este prefixat de ., ca in CSS).
element = document.querySelector("div");
console.log(element);

// div button
// BONUS: Putem folosi selectori compusi, ca in CSS.
// element = document.querySelector('div , #btn');
// console.log(element);

// Selectam toate tag-urile de tip button:
const allButtons = document.querySelectorAll("button");
console.log(allButtons);
