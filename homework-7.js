function getWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

const LIGHT_SPEED = 299792458;
function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

const product = "Груши";
const price = 100;
function buy(budget) {
    if (budget >= price)
        console.log(`${product} приобретён. Спасибо за покупку!`);
    if (budget < price)
        const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
}
function sayHello() {
    console.log("Привет!");
}
const name = "George";
let age = 17;
const city = "Moscow";