//  imprimir

console.log("first line");
console.log("second line");
console.log("third line");
console.log("fourth line");

//  declaracion de variables

var integerValue = 10;
var stringVar = "String 1";
var stringVar2 = "String 2";
var stringVar3 = "String 3";
var doubleVar = 2.3;
var characterVar = 'a';
var isHere = true;

var undefined = undefined;
var notNumber = NaN;
var isOlder = null;
var wayBehind = -Infinity;
var wayFar = Infinity;

// declaraciones con let

let integerValue_ = 10;
let stringVar_ = "String 1";
let stringVar2_ = "String 2";
let stringVar3_ = "String 3";
let doubleVar_ = 2.3;
let characterVar_ = 'a';
let isHere_ = true;

let undefined_ = undefined;
let notNumber_ = NaN;
let isOlder_ = null;
let wayBehind_ = -Infinity;
let wayFar_ = Infinity;

// prompt

let numberOne = 0;

numberOne = Number(prompt("Input a number")); 
numberTwo = Number(prompt("Input a number")); 

console.log("el resultado es: "+(numberOne+numberTwo));

//funciones

function sum(n1,n2){
    return n1+n2;
}

console.log(`la suma de ${numberOne} + ${numberTwo} es: `+sum(numberOne, numberTwo));

//funciones anonimas

const resta = function(n1,n2){
    return n1-n2
}

console.log(`la resta de ${numberOne} - ${numberTwo} es: `+resta(numberOne, numberTwo));

//funciones flecha

const multiplicacion = (n1,n2) => n1*n2;

//funciones
function _isOlder(age){
    let message;
    if(age >= 18)
        message = "eres mayor";
    else
        message =  "eres menor";

    return message;
}

console.log(_isOlder(18));

//power

function power(base, power){
    let result = 1;

    for(let i = 0; i<power; i++)
        result *= base;

    return result; 
}

console.log(power(2,2));

//dia de la semana

let dia = prompt("ingresa el dia de la semana")

switch(dia){
    case 'lunes':
        console.log("empezando la sema");
        break;
    case 'martes':
        console.log("sigue sigue");
        break;
    case 'miercoles':
        console.log("ombligo de la semana");
        break;
    case 'jueves':
        console.log("juebebes");
        break;
    case 'viernes':
        console.log("viernesuki");
        break;
    case 'sabado':
        console.log("sabaduki?");
        break;
    case 'domingo':
        console.log("dominguito");
        break;
}