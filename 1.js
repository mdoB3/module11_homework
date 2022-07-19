/* Задание1
    Данмассив.Нужно вывести в консоль количество чётных и нечётных элементов вмассиве.
    Если в массиве есть нулевой элемент,то онучитывается и выводится отдельно.
    При выполнении задания необходимо учесть,что массив может содержать не только числа,но и знаки,например null и такдалее.
*/
constelementsArray = [12, 1, 234, 5, null, {}, 0, 2, 'string', 14, 0];
let evenCount, oddCount, nullCount;
evenCount = oddCount = nullCount = 0;

const countEvenOddNull = (element) => {
	if (typeofelement === 'number' && !isNaN(element)) {
		if (element === 0) {
			nullCount += 1
		} else {
			element % 2 === 0 ? evenCount += 1 : oddCount += 1;
		}
	}
}
elementsArray.map((element) => countEvenOddNull(element));
console.log(`Evennumbersinarray: ${evenCount}. Oddnumbersinarray: ${evenCount}. Nullnumbersinarray: ${nullCount}.`);
