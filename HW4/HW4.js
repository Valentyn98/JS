// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let a = 3
// let b = 7
// function pLosha (countOne,countTwo){
//     let s = countOne * countTwo
//     return s
// }
// console.log(pLosha(a,b))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let r = 14
// function pLoshaKola (r){
//     let s = Math.PI*r ** 2
//     return s
// }
// console.log(pLoshaKola (r))
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let h = 10;
// let r = 2;
// function culindr (height,radius){
//     let s = 2 * Math.PI * radius * height
//     return s
// }
// console.log(culindr (h,r))
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,5,4,3]
// function ArLeng (arr){
//     for (let arrElement of arr) {
//         return arrElement
//     }
// }
// console.log(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = 'створити функцію яка створює параграф з текстом. Текст задати через аргумент'
// function t (text){
//     document.write(`<p>${text}</p>`)
// }
// t (text)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUlLi (titi){
//     document.write(`<ul>
//     <li>${titi}</li>
//     <li>${titi}</li>
//     <li>${titi}</li>
// </ul>`)
// }
// createUlLi ('titi')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let text = 'qweqwe'
// let count = 3
//
// function autoUl(text,count){
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// autoUl(text,count)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrM = [33,'asda',true,false,'kakop']
// function primitive(arrM){
//     document.write(`<ul>`)
//         for (let i = 0; i < arrM.length; i++) {
//          document.write(`<li>${arrM[i]}</li>`)
//      }
//     document.write(`</ul>`)
// }
// primitive(arrM)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     let arrOfObject = [
//         {id: 1, name: 'vasya', age: 31},
//         {id: 5, name:'petya', age: 30},
//         {id: 26, name:'kolya', age: 29},
//         {id: 4, name:'olya', age: 28},
//     ]
    // function taker(arr){
    //     for (let i = 0; i < arr.length; i++) {
    //         document.write(`<ul>`)
    //
    //     for (let arrKey in arr[i]) {
    //         document.write(`<li>${arr[i][arrKey]}</li>`)
    //     }
    //         document.write(`</ul>`)
    // } }
    // taker(arrOfObject)
// - створити функцію яка повертає найменьше число з масиву
//     let arrMin = [22,1,4,66,4444]
//
//     function minC(arr){
//         let count = arr[0] ;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < count){
//                 count = arr[i]
//             }
//         }
//         console.log(count)
//     }
//     minC(arrMin)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arrSum = [2,4,1,5]
// function sum(arr){
//     let zero = 0;
//     for (let i = 0; i < arr.length; i++) {
//         zero = zero += arr[i]
//     }
//     return zero
// }
//
// console.log(sum(arrSum));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// let arr = [44,22,33,44]
// let arrTwo = [1,2,3,4]
// function swap(arr){
//     let temp1 = arr[0];
//     let newArr =[]
//     for (let i = 0; i < arr.length; i++) {
//         arr[0] = arr[1];
//         arr[1] = temp1;
//         newArr[newArr.length] = arr[i]
//     }
//     console.log(newArr)
// }
// swap(arr)
// swap(arrTwo)
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



//ВАРІАНТ 1
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let usdt = 'no'
//     let buyUsdt = 'no';
//     let eur = 'yes'
//     let buyEur = 'yes'
//     let final
//
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency &&  buyUsdt === 'yes' && usdt === 'yes' ){
//             return final = sumUAH / currencyValues[i].value
//         }else if (currencyValues[i].currency === exchangeCurrency &&  buyUsdt === 'no' && usdt === 'yes' ) {
//             return final = sumUAH * currencyValues[i].value
//         }else if (currencyValues[i].currency === exchangeCurrency &&  buyEur === 'yes' && eur === 'yes' ) {
//             return final = sumUAH * currencyValues[i].value
//         }else if (currencyValues[i].currency === exchangeCurrency &&  buyEur === 'no' && eur === 'yes' ) {
//             return final = sumUAH * currencyValues[i].value
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))


//ВАРІАНТ 2
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let buyOrSell = 'sell';
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency){
            if (buyOrSell === 'buy'){
                console.log(sumUAH / currencyValues[i].value);
            }else if (buyOrSell === 'sell'){
                console.log(sumUAH * currencyValues[i].value);
            }
        }
    }
}
exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR')



// let arrValue = [{currency:'USD',value:40},
//     {{currency:'EUR',value:40}}]
// function changeC(sumUAH,usdt,eur){
//     let arrUsdt = []
//     let arrEur = []
//
//     arrUsdt[arrUsdt.length] = 'Кількість отриманих $' +  sumUAH / usdt
//     arrEur[arrEur.length] = 'Кількість отриманих Є' + sumUAH / eur
//
//     console.log(arrUsdt,arrEur)
// }
// changeC(1000,38,41)
// let arr = []
// let operation = {}
// operation.currency = prompt("usd or eur")
// operation.type = prompt("sell or buy")
// console.log(operation.type)
// operation.sum = +prompt("Кількість Гривні")
//
// let euroH = 41
// let usdH = 39
//
// function changer(operation,euroH,usdH,arr){
//
//     if (operation.currency = 'usd'){
//         operation.currency = 39
//     }else if (operation.currency = 'eur'){
//         operation.currency = 41
//     }
//
//     if (operation.type = 'buy'){
//         operation.result = operation.sum / operation.currency
//     }else if (operation.type = 'sell'){
//         operation.result = operation.sum * operation.currency
//     }
//     arr[arr.length] = operation
//
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// changer(operation,euroH,usdH,arr)
