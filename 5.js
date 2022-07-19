/* Задание 5
    Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
    Иначе говоря, умножает x на себя n раз и возвращает результат.
*/
const numberPower = (x, n) => {
    return (x > 0 && n > 0) ? Math.pow(x, n) : console.error('Enter only natural numbers.')
}
console.log(numberPower(2, 3))
