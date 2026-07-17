console.log("JavaScript подключен!");
alert("Добро пожаловать!");

const firstCard = document.querySelector(".product-card");
firstCard.style.backgroundColor = "lightblue";

const allCards = document.querySelectorAll(".product-card");

allCards.forEach(function (card) {
    card.style.border = "2px solid #4caf50";
    });

console.log("Это сообщение в консоли.");
alert("Это окно alert!");

const title = document.querySelector(".title");

title.addEventListener("mouseenter", function () {
    console.log(title.textContent);
});

const button = document.querySelector("#change-card-color-button");

button.classList.add("change-button");

button.addEventListener("click", function () {
    button.classList.toggle("active");
    });