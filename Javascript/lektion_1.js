/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.
//_______________________________________________________________________________

var greeting1 = "hi";
const greeting3 = "hello"

let times = 4;
if (times > 3) {
    var greeting1 = "hi there";
    let greeting2 = "howdy sir";

    console.log(greeting2);
}
console.log(greeting1);
// console.log(greeting2); //Gives error: "ReferenceError: greeting2 is not defined"
// greeting3 = "hello can you hear me" //Gives error: "TypeError: Assignment to constant variable."
console.log(greeting3);


// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
// 44 - 12 = ?
// 142 * 23 = ?
// 94 / 23  = ?
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log
//_______________________________________________________________________________

let a = 922;
let b = 237;
let c = 44;
let d = 12;
let e = 142;
let f = 23;
let g = 94;
console.log("a + b = " + (a + b));
console.log("c - d = " + (c - d));
console.log("e * f = " + (e * f));
console.log("g / f = " + (g / f));


// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.
//_______________________________________________________________________________
let buttonClick = document.getElementById('clickCounter');
let clicks = 0;
buttonClick.textContent = 'Number of clicks: ' + clicks;
buttonClick.onclick = function () {
    clicks++;
    buttonClick.textContent = 'Number of clicks: ' + clicks;
}

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.
//_________________________________________________________________________________
function passwordValidate() {
    const opg4 = document.getElementById('opg4');
    let password = document.createElement('input');
    password.setAttribute('placeholder', 'Type your password');
    opg4.appendChild(password);
    let errorText = document.createElement('p');
    opg4.appendChild(errorText);
    errorText.classList.add('error');

    password.addEventListener('input', () => {
        let passValue = password.value;
        let errorMessages = [];

        if (password.value.length < 8) {
            errorMessages.push('Password is not long enough!');
        }
        if (passValue.length > 20) {
            errorMessages.push('Password is too long!');
        }
        if (!/[A-Z]/.test(passValue)) {
            errorMessages.push('Password must contain at least one uppercase letter!');
        }
        if (!/[^a-zA-Z]/.test(passValue)) {
            errorMessages.push('Password must contain at least one non-letter character!');
        }
        
        if (errorMessages.length > 0) {
            errorText.innerHTML = errorMessages.map(msg => `<p>${msg}</p>`).join('');
        } else {
            errorText.innerHTML = '';
        }
    });
}
passwordValidate();


// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.
//_________________________________________________________________________________
let cubes = document.getElementsByClassName('cube');

function randColorNum() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
for (let i = 0; i < cubes.length; i++) {
    cubes[i].style.backgroundColor = randColorNum();
    cubes[i].addEventListener('mouseover', () => {
        cubes[i].style.backgroundColor = randColorNum();
    });
}
// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 5. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.
//_________________________________________________________________________________
