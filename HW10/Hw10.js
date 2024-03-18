// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами :
// заповниои форму, натиснули кнопку, під формою
// з'явився блок з вашим об'єктом
// let formss = document.createElement('form')
// document.body.appendChild(formss)
//
//
// let inputOne  = document.createElement('input')
// inputOne.id = 'first'
//
// let inputTwo  = document.createElement('input')
// inputTwo.id = 'second'
//
// let inputThree  = document.createElement('input')
// inputThree.id = 'thirt'
//
//
// let button = document.createElement('button')
// button.innerText = 'SAVE'
// formss.append(inputOne,inputTwo,inputThree,button)
//
//
// button.onclick = function (e,inputOne, inputTwo, inputThree){
//
//     let divFather = document.createElement('div')
//     document.body.append(divFather)
//
//     let childDivOne = document.createElement('p')
//
//     let infoOne = document.getElementById('first');
//     childDivOne.innerText = infoOne.value
//
//
//     let childDivTwo = document.createElement('p')
//
//     let infoTwo = document.getElementById('second')
//     childDivTwo.innerText = infoTwo.value
//
//
//
//     let childDivThree = document.createElement('p')
//
//     let infoThree = document.getElementById('thirt')
//     childDivThree.innerText =  infoThree.value
//
//     divFather.append(childDivOne,childDivTwo,childDivThree)
//     e.preventDefault()
//
// }


// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

// let div = document.getElementById('counter')
// let value = localStorage.getItem('value') || 0;
// let newValue = parseInt(value) + 1;
//
// div.innerText = newValue;
// localStorage.setItem('value', newValue)


// ==========================


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.

// let valueOfTime = JSON.parse(localStorage.getItem('time')) || []
// function visit (valueOfTime) {
//     valueOfTime.push(new Date())
//     localStorage.setItem('time', JSON.stringify (valueOfTime))
// }
// visit(valueOfTime)

// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.


// function getVisitInfo() {
//     const now = new Date();
//     const visitInfo = {
//         dateTime: now.toLocaleString(),
//         screenWidth: window.screen.width,
//         screenHeight: window.screen.height,
//         userAgent: navigator.userAgent,
//         cookieEnabled: navigator.cookieEnabled,
//         language: navigator.language
//     };
//     return visitInfo
// }
//
// console.log(getVisitInfo());
//
// function saveInfo () {
//     let info = getVisitInfo()
//     let allInfo = JSON.parse(localStorage.getItem('allInfo')) || []
//     allInfo.push(info)
//     localStorage.setItem('allInfo', JSON.stringify(allInfo))
// }
// saveInfo()
//
// let inodrmationForBlock = JSON.parse(localStorage.getItem('allInfo'))
// console.log(inodrmationForBlock);
//
// let d = document.createElement('div')
// document.body.append(d)
//
//
//
// for (const elementInodrmationForBlock of inodrmationForBlock) {
//     let dateTime = document.createElement('div')
//     let screenWidth = document.createElement('div')
//     let screenHeight = document.createElement('div')
//     let userAgent = document.createElement('div')
//     let cookieEnabled = document.createElement('div')
//     let language = document.createElement('div')
//     let r = document.createElement('br')
//
//
//     d.append(dateTime,screenWidth,screenHeight,userAgent,cookieEnabled,language,r)
//     for (let elementInodrmationForBlockKey in elementInodrmationForBlock) {
//         dateTime.innerText = `dateTime  ${elementInodrmationForBlock.dateTime}`
//         screenWidth.innerText = `screenWidth  ${elementInodrmationForBlock.screenWidth}`
//         screenHeight.innerText = `screenHeight  ${elementInodrmationForBlock.screenHeight}`
//         userAgent.innerText = `userAgent  ${elementInodrmationForBlock.userAgent}`
//         cookieEnabled.innerText = `cookieEnabled  ${elementInodrmationForBlock.cookieEnabled}`
//         language.innerText = `language  ${elementInodrmationForBlock.language}`
//     }
// }

// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let divWithTime = document.createElement('div')
// document.body.appendChild(divWithTime)
// divWithTime.id = 'TimeOfVisited'


// =========================




let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let ahead = document.getElementById('buOne')
// let back = document.getElementById('buTwo')
//
// let father = document.createElement('div')
// document.body.appendChild(father)
//
//
//
// function pagination (){
//     users.splice(0, 10).map(value => {
//         let dOne = document.createElement('div')
//         dOne.innerText = value.name
//         let dTwo = document.createElement('div')
//         dTwo.innerText = value.age
//         let dThree = document.createElement('div')
//         dThree.innerText = value.status
//         let br = document.createElement('br')
//         father.append(dOne, dTwo, dThree, br)
//     })
//
// }
// pagination()









// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let de = document.createElement('div')
// document.body.append(de)
//
// let blockFromDe = document.createElement('div')
// blockFromDe.innerText = 'Svoboda'
//
// let butForSvoboda = document.createElement('button')
// butForSvoboda.type = 'submit'
// butForSvoboda.innerText = 'delete'
//
// de.append(blockFromDe,butForSvoboda)
//
// butForSvoboda.addEventListener('click', function () {
//     blockFromDe.style.display = 'none'
//     blockFromDe.innerText = ''
// })
//
//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//  При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//  та повідомити про це користувача

// let inputElement = document.createElement('input')
// inputElement.type = 'text'
// inputElement.name = 'age'
//
//
// let buttonForAge = document.createElement('button')
// buttonForAge.innerText = 'Отримати вік'
//
// buttonForAge.addEventListener('click', function () {
//     if (inputElement.value >= 18){
//         console.log(inputElement.value);
//     }else {
//         console.log('Ваш вік менше за 18');
//     }
// })

// document.body.append(inputElement,buttonForAge)

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

    //
    // let butTone = document.getElementById('generate')
    // butTone.addEventListener('click',function genTable(ev) {
    //     ev.preventDefault()
    //     let li = document.getElementById('line').value;
    //     let col = document.getElementById('cols').value;
    //     let inf = document.getElementById('info').value;
    //
    //     let table = document.createElement('table');
    //     document.body.append(table)
    //     table.style.border = '1px solid black';
    //
    //     for (let i = 0; i < li; i++) {
    //         let lLine = document.createElement("tr");
    //         table.appendChild(lLine)
    //         for (let c = 0; c < col; c++) {
    //             let cOl = document.createElement("td");
    //             lLine.appendChild(cOl);
    //             cOl.style.padding = '10px'
    //             cOl.textContent = inf
    //             cOl.style.border = '1px solid black';
    //         }
    //     }
    //
    // })

// (Додатковачастина для завдання)
//

// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let blockCounter = document.createElement('div')
document.body.append(blockCounter)
let co = parseInt(localStorage.getItem('counter')) || 100



let b = document.onreadystatechange = function () {
        if (document.readyState === 'interactive') {
            let time = new Date().getTime()

            let lastReload = parseInt(localStorage.getItem('TimeOfReload')) || time
            if (time-lastReload > 100){
                co = co+10;
                localStorage.setItem('TimeOfReload',time.toString())
            }

            blockCounter.innerText = co
            localStorage.setItem('counter',parseInt(co))
        }

}


