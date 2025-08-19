/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const text = 'hello world from javascript'

function capitalizeWords(text) {
  let result = '';
  let makeUpper = true; // нужно ли сделать след букву заглавной

  for (let i = 0; i < text.length; i++){
    let sentence = text[i]; // берем текущий символ строки
    if(makeUpper){
      result += sentence.toUpperCase(); //делаем заглавной буквой
      makeUpper = false;
      } else {
        result += sentence;
      }
      if (sentence === ' '){
        makeUpper = true;
      }
  }
  return result;
}

const capitalizedText = capitalizeWords(text)
console.log(capitalizedText)