/* Задание 2
    Напишите функцию, которая принимает на входе любое число (но не больше 1 000),
    определяет, является ли оно простым, и выводит, простое число или нет.
    Если введено больше 1 000, то выводится сообщение, что данные неверны.
    Обратите внимание на числа 0 и 1.
*/
const primeNumbers = [];

const isPrimeNumber = (n) => {
  if(n > 1000) {
    console.log('N cant be greater then 1000');
    return;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }
}

for (let i = 0; i < 1002; i++) {
  if (isPrimeNumber(i)) primeNumbers.push(i)
}
console.table(primeNumbers);
