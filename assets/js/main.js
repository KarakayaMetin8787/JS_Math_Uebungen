// ========================================
//          Math-Level-1_1
// ========================================

console.log(Math.PI);

const PI = Math.PI;

const roundedPI = (Math.PI).toFixed(2);

console.log(PI);
console.log(roundedPI);

// ========================================
//   CodeFlow Übung lev1_2: Math.round()
// ========================================

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];  

const numbersRound = array.forEach((elt) => {
    console.log(Math.round(elt));
})

// ========================================
//             Math-Level-1_3
// ========================================

const randomNum = Math.random();
const randomNum1_10 = Math.random() * 10;
const randomNum1_100 = Math.random() * 100;

console.log(randomNum)
console.log(randomNum1_10)
console.log(randomNum1_100)

// ========================================
//             Math-Level-1_4
// ========================================

console.log(Math.min(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));

console.log(Math.max(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));

// ========================================
//             Math-Level-2_1
// ========================================

function roundTo(Zahl, Genauigkeit){
    const neueZahl = Number(Zahl.toFixed(Genauigkeit));
    return neueZahl;
}

console.log(roundTo(3.1415926535, 5)); // 3.14159

// ========================================
//             Math-Level-2_2
// ========================================
let numCPU = 0;

function rateSpiel () {
    numCPU = (Math.random() * 10).toFixed();
    const guessedNum = window.prompt("Guess the number!");
    if (guessedNum === numCPU) {
        console.log("you guessed right");
    } else {
        console.log("you guessed wrong. Correct number was " + numCPU);
    }
};
rateSpiel()