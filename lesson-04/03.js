/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let score1 = [1, 2, 3, 5, 6, 7, 9];
let score2 = [2, 3, 4, 5, 7, 8, 10];

function findCommonElements(array1, array2) {
  const score0 = []
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j] &&  
        !includesElement(score0, array1)){
        score0.push(array1[i])
        }
    }
  }
  return score0
}

console.log(findCommonElements(score1, score2))
