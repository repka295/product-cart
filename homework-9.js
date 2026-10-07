const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lowerNumbers = numbers.filter(num => num >= 5);
console.log(lowerNumbers);

const books = [
    {
        title: "1984",
    },
    {
        title: "Гарри Поттер и философский камень",
    },
    {
        title: "Великий Гэтсби",
    },
    {
        title: "Война и мир",
    }
]
function checkBooks(books) {
    return books.includes("1984");
}

const romanBooks = checkBooks(books);

console.log(romanBooks);

numbers.reverse();
books.reverse();

const filteredComments = comments.filter(comment => comment.email.includes('.com'));
console.log(filteredComments);

const idFilteredComments = comments.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));
console.log(idFilteredComments);

const idAndNameOnly = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});
console.log(idAndNameOnly);

const lengthComments = comments.map(comment => {
    return {
        ...comment,
        bodyLength: comment.body.length > 180
    };
});
console.log(lengthComments);

const emails = comments.map(comment => comment.email);
console.log(emails);

const emails2 = comments.reduce((result, comment) => {
    result.push(comment.email);
    return result;
}, []);
console.log(emails2);

const emailString = emails.toString();
console.log(emailString);