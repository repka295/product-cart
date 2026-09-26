const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lowerNumbers = numbers.filter(num => num >= 5);
console.log(lowerNumbers); 

const books = [
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949,
        color: "серый",
        genre: "антиутопия"
    },
    {
        title: "Гарри Поттер и философский камень",
        author: "Дж. К. Роулинг",
        year: 1997,
        color: "красный",
        genre: "фэнтези"
    },
    {
        title: "Великий Гэтсби",
        author: "Фрэнсис Скотт Фицджеральд",
        year: 1925,
        color: "зеленый",
        genre: "роман"
    },
    {
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        color: "синий",
        genre: "роман"
    }
]
const romanBooks = books.includes( genre => genre === "роман");
console.log(romanBooks);

numbers.reverse();
books.reverse();

