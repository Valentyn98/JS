// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['a','b','c',true,false,'boolean',0,'try','catch']
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]) //і т.д
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let tableOfBookOne = {
    title: "Чорний лебідь",
    pageCount: 111,
    genre: 'mrak'
}
let tableOfBookTwo = new Object();
    tableOfBookTwo.title = "Чорний лебідь";
    tableOfBookTwo.pageCount = 222,
    tableOfBookTwo.genre =  'mrak'
    console.log(tableOfBookTwo)

let tableOfBookThree = {
    title: "Зелений лебідь",
    pageCount: 333,
    genre: 'mrak'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let newBooksOne = new Object();
    newBooksOne.title = "X";
    newBooksOne.pageCount = 100500
    newBooksOne.genre = 'Fantastic'
    newBooksOne.authors = [
        name = "Ilon",
        age = 45
    ]

let newBooksTwo= {
    title:"Y",
    pageCount: 100,
    genre: 'xxx',
    authors: [
        name = 'Anton',
        age = 76
    ]
}
let newBooksThree= {
    title:"Z",
    pageCount: 1,
    genre: 'novel',
    authors: [
        name = 'Ler',
        age = 10
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

    let arrTenObject = [
        {
            name: 'Igor',
            username: 'Kovkin',
            password: 'a1s2d3f4'
        },
        {
            name: 'Kolya',
            username: 'Tilipoka',
            password: 'f3g4h5j7'
        },
        {
            name: 'Tanya',
            username: 'Pilipjo',
            password: 'lkju890'
        },
        {
            name: 'Olya',
            username: 'Tripko',
            password: 'kozakivka'
        },
        {
            name: 'Oleg',
            username: 'Shmarko',
            password: 'Tiope'
        },
        {
            name: "Tol",
            username: 'Polina',
            password: "Rtyuiop"
        },
        {
            name: "Lopin",
            username: "Cinopi",
            password: "hahahaha"
        },
        {
            name: "Zavarka",
            username: "Kolino",
            password: "FFFFFFF"
        },
        {
            name: "Kykyryza",
            username: "Sabrina",
            password: "Knopka229"
        },
        {
            name: "Kadiak",
            username: "Gulash",
            password: "Doska123"
        }

    ]

console.log(arrTenObject[0].password)
console.log(arrTenObject[1].password)
console.log(arrTenObject[2].password)
console.log(arrTenObject[3].password)
console.log(arrTenObject[4].password)
console.log(arrTenObject[5].password)
console.log(arrTenObject[6].password)
console.log(arrTenObject[7].password)
console.log(arrTenObject[8].password)
console.log(arrTenObject[9].password)
//або можна все в одну консоль пихнути через кому.


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 123
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if(x === 0){
    console.log('Вірно')
}else {
    console.log("Невірно")
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = +prompt("Введи число від 0 до 59")
if (time >= 0 && time < 15){
    console.log(time + " " + "перша")
}else if (time > 15 && time < 30){
    console.log(time + " "  + "друга")
}else if (time > 30 && time < 45){
    console.log(time + " "  + "третя")
}else {
    console.log(time + " "  + "четверта")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("Введи число від 1 до 31")
if (day >= 0 && day < 10){
    console.log(day + " " + "перша")
}else if (day > 10 && day < 20){
    console.log(day + " "  + "друга")
}else{
    console.log(day + " "  + "Третя")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = prompt('день тижня з великої букви')

switch (dayOfWeek){
    case "Понеділок":
        console.log('Monday')
        break;
    case "Вівторок":
        console.log('Tuesday')
        break;
    case "Середа":
        console.log('Wednesday')
        break;
    case "Четвер":
        console.log('Thursday')
        break;
    case "П'ятниця":
        console.log('Friday')
        break;
    case "Субота":
        console.log('Saturday')
        break;
    case "Неділя":
        console.log('Sunday')
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let countOne = 3;
let countTwo = 45;

if(countOne > countTwo){
    console.log(countOne)
}else if (countOne < countTwo){
    console.log(countTwo)
}else {
    console.log("Числа рівні")}

//     - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined,
//     null  і тд включно).Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній y значення "default"
//         якщо значення змінної y являється falsy
//         (хибноподібні, тобто приводиться до false)

//*******************************************
let y = 0;

if (typeof y === true){
    console.log('true')
}else {
    console.log('false')
}
//другий варіант. Сорі як зрозумів завдання так і виконав...
if (y === ' ' || y === null || y === !true || y === undefined || y === 0){
    y = "default"
    console.log(y)
}else {
    y = true
    console.log(typeof y)
}
//*******************************************
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
// перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let more = 6
if (coursesAndDurationArray[0].monthDuration >= more){
    console.log("Cупер")
}
if (coursesAndDurationArray[1].monthDuration >= more){
    console.log("Cупер")
}
if (coursesAndDurationArray[2].monthDuration >= more){
    console.log("Cупер")
}
if (coursesAndDurationArray[3].monthDuration >= more){
    console.log("Cупер")
}
if (coursesAndDurationArray[4].monthDuration >= more){
    console.log("Cупер")
}
if (coursesAndDurationArray[5].monthDuration >= more){
    console.log("Cупер")
}


