
function dodawanie(a, b) {
    return a + b;
}


function odejmowanie(a, b) {
    return a - b;
}


function mnozenie(a, b) {
    return a * b;
}

function dzielenie(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Nie można dzielić przez zero.";
    }
}


const liczba1 = 10;
const liczba2 = 5;

console.log(`Dodawanie: ${liczba1} + ${liczba2} = ${dodawanie(liczba1, liczba2)}`);
console.log(`Odejmowanie: ${liczba1} - ${liczba2} = ${odejmowanie(liczba1, liczba2)}`);
console.log(`Mnożenie: ${liczba1} * ${liczba2} = ${mnozenie(liczba1, liczba2)}`);
console.log(`Dzielenie: ${liczba1} / ${liczba2} = ${dzielenie(liczba1, liczba2)}`);
