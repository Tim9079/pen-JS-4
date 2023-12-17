const emptyArray = [];

const numbers = [1, 2, 3, 4, 5];

const fruits = ['яблоко', 'банан', 'апельсин'];

console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length);

fruits[1] = 'киви';
fruits.push('манго ');

for (let i = 2; i > numbers.length;) {
    if(numbers[i] / 2) {
        console.log(i * 2)
    } else {
        console.log(i * 3)
    }
}

const p = [MyClass,MyClass2,MyClass3];