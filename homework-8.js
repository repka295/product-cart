const person = {
  name: "David",
  subname: "Mardanov",
  mail: "davidmardanov@mail.ru",
  age: 18,
  city: "Cairo",
}
  
const car = {
  brand: "BMW",
  model: "X5",
  year: 2020,
  color: "black",
 type of gearbox: "automatic",
}

const carOwner = {
    name: "John",
    surname: "Doe",
    age: 30,
}

function addMaxSpeed(car) {
    if (!("максимальная скорость" in car)) {
        car["максимальная скорость"] = 300;
    }
}

function getProperty(person, property) {
    console.log(person[property]);
}

const products = ["Хлеб", "Молоко", "Сыр", "Яблоки", "Шоколад"];

const books = [
    { title: "Война и мир", author: "Лев Толстой", year: 1869 },
    { title: "1984", author: "Джордж Оруэлл", year: 1949 },
    { title: "Унесённые ветром", author: "Маргарет Митчелл", year: 1936 },
    { title: "Гордость и предубеждение", author: "Джейн Остин", year: 1813 },
];

books.push(
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954
);

const HarryPotterBooks = [
    { title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997 },
    { title: "Гарри Поттер и Тайная комната", author: "Дж. К. Роулинг", year: 1998 },
    { title: "Гарри Поттер и узник Азкабана", author: "Дж. К. Роулинг", year: 1999 },
]

const AllBooks = [...books, ...HarryPotterBooks];

function addRare(books) {
      return books.map(function(book) {
        book.isRare = book.year < 2000;
        return book;
    });
}