/* Задание 3
    Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
    Выведите в консоль результат.
*/
function example(a) {
    return function(b) {
        return a + b
    }
}
const sumfunction = example(2);
const sum = sumfunction(3);
console.log(sum)
