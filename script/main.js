//
// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.

// Решение

const colors = ['red', 'green', 'blue'];
console.log(colors.length);


// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

// Решение
const animals = ['monkey', 'dog', 'cat'];

console.log(animals.length-1);

// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.
// delete numbers[0]; -> [undefined, 43, 63, 23, 90]
// > Реализуйте решение двумя способами.
// pop, splice, shift


// Решение
const numbers = [5, 43, 63, 23, 90]
console.log(numbers.pop()) //удаление последнего элемента масссива

console.log(numbers.shift()) //удаление первого элемента масссива// 

const number = [5, 43, 63, 23, 90]
delete number[2];
delete number[4];
console.log(number);

// удаление всех элементов массива
const numberr = [5, 43, 63, 23, 90]
numberr.splice(0,5);
console.log(numberr);

// 2 vatiant
const numDel = [5, 43, 63, 23, 90];
for (let i=0; i<numDel.length; i++) {
    delete numDel[i]  
}
 console.log(numDel);





// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.


// let animals = ['cat', 'dog', 'bird'];

// animals.splice(1, 1, 'Andrew, the Tiger');

// Решение
const students = ['Polina', 'Dasha', 'Masha'];
// 1вариант
students.pop();

students.splice(2,0,`Borya`)
console.log(students);

// 2вариант
students.splice(-1,1,`Borya`);
console.log(students);


// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
const cats = ['Gachito', 'Tom', 'Batman'];
for( let i=0; i<cats.length; i++){
    console.log(cats[i])
};

const catss = ['Foton', 'Kisel', 'Mouth'];
for (let catNew of catss) {
    console.log(catNew)
}


// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один. - concat



const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const arr = evenNumbers.concat(oddNumbers);
console.log(arr)

// + В полученном массиве попробуйте найти индекс числа **`8`** - indexOf
console.log(arr.indexOf(`8`));
// ответ -1


// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
 
// + Наш бинарный массив неполный, в нем явно не хватает единиц.


// > [0, 0, 0, 0] -> '0101010'  

const binary = [0, 0, 0, 0];
binary.splice(1,0,1)
console.log(binary)
binary.splice(3,0,1)
console.log(binary)
binary.splice(5,0,1)
console.log(binary)

// +превратите данный массив в строку
console.log(binary.join())
console.log(typeof(binary));


// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом. -> reverse , then check it
function isPalindrome(s) {
    return s == s.split("").reverse().join("");
}

console.log(isPalindrome("malayalam")); 
console.log(isPalindrome("english")); 



// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.  -> Four average numbers

const matrix = [
            [12, 98, 78, 65, 23],
            [54, 76, 98, 43, 65],
            [13, 324, 65, 312],
            [9092, 22, 45, 90000],]
        
            let sum =0;
            for(let i=0; i<matrix.length; i++) {
                sum = sum + matrix[i]
            }
console.log(sum)

// 

let result = matrix.reduce(function(summ1, elem) {
	return summ1 + elem;
}, 0);

console.log(result);

// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

// решение
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const numPlus= mixedNumbers.filter(i => i > 0);
console.log(numPlus)
const numMinus= mixedNumbers.filter(i => i <0);
console.log(numMinus)


// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
// Math.random() (-1 , 1)

// .map()

// let mapedArray = mixedNumbers.map(number => {
//     number += 2;
//     return number;

