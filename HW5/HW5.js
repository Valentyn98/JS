// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let s = (a,b) => a * b;
console.log(s(2,5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sP = (r) => {
    return Math.PI * r ** 2
}
console.log(sP(14));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cul = (height,radius) => {
    return 2 * Math.PI * radius * height
}
console.log(cul(10, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1,2,5,4,3]
let aroundArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
aroundArr(arr)
// - створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
let createP = text =>{
    document.write(`<p>${text}</p>`)
}
createP('sacscascscsac')
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let ulLi = text =>{
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}
ulLi('iqwsikqw')
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let autoLi = (text,count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
autoLi('Yoperdo',4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let arrM = [33,'asda',true,false,'kakop']
let arrElem = (arrM) =>{
    document.write(`<ul>`)
    for (let i = 0; i < arrM.length; i++) {
        document.write(`<li>${arrM[i]}</li>`)
    }
    document.write(`</ul>`)
}
arrElem(arrM)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    let arrOfObject = [
        {id: 1, name: 'vasya', age: 31},
        {id: 5, name:'petya', age: 30},
        {id: 26, name:'kolya', age: 29},
        {id: 4, name:'olya', age: 28},
    ]

let taker = arrOfObject =>{
    for (let arrOfObjectElement of arrOfObject) {
        document.write(`<ul>`)
        for (let arrOfObjectElementKey in arrOfObjectElement) {
            document.write(`<li>${arrOfObjectElementKey}:${arrOfObjectElement[arrOfObjectElementKey]}</li>`)
        }

        document.write(`</ul>`)

    }
}
taker(arrOfObject)
// - створити функцію яка повертає найменьше число з масиву
let arrMin = [22,1,4,66,4444]
let min = (arrMin) =>{
    let count = arrMin[0]
    for (let i = 0; i < arrMin.length; i++) {
        if (arrMin[i] < count){
            count = arrMin[i]
        }
    }
}
min(arrMin)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrSum = [2,4,1,5]
let sum = (arrSum) => {
    let z = 0
    for (let i = 0; i < arrSum.length; i++) {
        z = z += arrSum[i]
    }
    console.log(z)
}
sum(arrSum)
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let se = (arr,index1,index2) => {
    let zero = arr[0]

    arr[0] = arr[1];
    arr[1] = zero;
    console.log(arr)
}
se([11,22,33,44],0,1)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    let buyOrSell = 'sell';

    for (let i = 0; i <currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency ){
            if (buyOrSell === 'buy'){
                console.log(sumUAH / currencyValues[i].value);
            }else if (buyOrSell === 'sell'){
                console.log(sumUAH * currencyValues[i].value);
            }
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250