/* Задание 4
    Напишите функцию, которая принимает два числа.
    Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
    Используйте setInterval.
*/
function logNumberRangeEverySec(min, max, timeSec) {
    const myInterval = setInterval(function() {
        console.log(min)
        min === max ? clearInterval(myInterval) : min++
    }, timeSec);
}
logNumberRangeEverySec(4, 8, 1000);
