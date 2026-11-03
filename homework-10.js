const productsDescription = products.reduce((acc, product) => {
    acc[product.productName] = product.forWhat;

    return acc;
}, {});

console.log(productsDescription);

function getCardsCount() {
    let count = Number(prompt('Сколько карточек отобразить? От 1 до 5'));

    while (true) {
        if (count >= 1 && count <= 5 && Number.isInteger(count)) {
            return count;
        } else {
            count = Number(prompt('Введите корректное число от 1 до 5'));
        }
    }
}
