// --створити масив з:
//     - з 5 числових значень
let arr = [12,14,16,18,25]
// - з 5 стічкових значень
let arrText = ['qwe','rty','uio','p','aad']
// - з 5 значень стрічкового, числового та булевого типу
let arrMixed = ['qwwe','qwe','sdf','vkv','sdf',423,235,11,12,57, true, false,false,true,false]
// - та вивести його в консоль
for (let arrMixedElement of arrMixed) {
    console.log(arrMixedElement)
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = ['wef',true,444,56,345,2134]
console.log(arrEmpty[2])

//
// - є масив
// 1. перебрати його циклом while
let arrAdd = [2,17,13,6,22,31,45,66,100,-18]

let i = 0;
while (i < arrAdd.length){
    console.log(`${arrAdd[i]}`)
    i++
}
//     2. перебрати його циклом for
for (let number of arrAdd) {
    console.log(number)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;
while (j < arrAdd.length){
    console.log(`${arrAdd[j]}`)
    j+=2
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arrAdd.length; k+=2) {
    console.log(arrAdd[k])
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let q = 0;
while (q < arrAdd.length){
    if (`${arrAdd[q]}` % 2 === 0)
    console.log(`${arrAdd[q]}`)
    q++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let c = 0; c < arrAdd.length; c++) {
    if (arrAdd[c] % 2 === 0){
        console.log(arrAdd[c])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let numberOfArrAdd of arrAdd) {
    if (numberOfArrAdd % 3 === 0 ){
        numberOfArrAdd = 'okten'
    }
    console.log(numberOfArrAdd)
}
// 8. вивести масив в зворотньому порядку.
for (let h = arrAdd.length -1 ; h >= 0 ; h--) {
    console.log(arrAdd[h])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arrAddTwo = [2,17,13,6,22,31,45,66,100,-18];
let e = arrAddTwo.length - 1;
while (e >= 0){
    console.log(`${arrAddTwo[e]}`)
    e--;
}

let u = arrAddTwo.length - 1;
while (u >= 0){
    console.log(`${arrAddTwo[u]}`)
    u-=2;
}

for (let k = arrAddTwo.length - 1; k >= 0 ; k-=2) {
    console.log(arrAdd[k])
}

let z = arrAddTwo.length - 1;
while (z >= 0){
    if (`${arrAddTwo[z]}` % 2 === 0){
        console.log(`${arrAddTwo[z]}`)
    }
    z--;
}

for (let c = arrAddTwo.length -1 ; c >= 0; c--) {
    if (arrAddTwo[c] % 2 === 0){
        console.log(arrAddTwo[c])
    }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let newArrAdd = [12,14,155,166,12,14,155,166]
for (let d = 0; d < newArrAdd.length; d++) {
    console.log(newArrAdd[d])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let newArrText = ['qwe,','qweqweqwe','ccc','wefwfwf','wefwqqqqqqq','qqqqq','ccc','wefwfwf','wefwqqqqqqq','qqqqq']
for (let string of newArrText) {
    console.log(string)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let newArrTextCounts = ['qwe,','qweqweqwe','ccc','wefwfwf','wefwqqqqqqq','qqqqq','ccc','wefwfwf','wefwqqqqqqq','qqqqq',12,14,155,166,12,14,155,166]
for (const newArrTextCount of newArrTextCounts) {
    console.log(newArrTextCount)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrMixPlus = ['qwe,','qweqweqwe','ccc','wefwfwf','wefwqqqqqqq','qqqqq','ccc','wefwfwf','wefwqqqqqqq','qqqqq',12,14,155,166,12,14,155,166,false,true,false,false,true,false,false,false,true]
for (const arrMixPlus1 of arrMixPlus) {
    if (typeof arrMixPlus1 === "boolean"){
        console.log(arrMixPlus1)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const arrMixPlus1 of arrMixPlus) {
    if (typeof arrMixPlus1 === "number"){
        console.log(arrMixPlus1)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const arrMixPlus1 of arrMixPlus) {
    if (typeof arrMixPlus1 === "string"){
        console.log(arrMixPlus1)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
for (let n = 0; n < arrMixPlus.length; n++) {
    console.log(arrMixPlus[n])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let dd = 0; dd <= 10; dd++) {
    document.write(`<div>dd.${[dd]}</div>`)
    console.log(`dd.${[dd]}`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let dd = 0; dd <= 100; dd++) {
    document.write(`<div>aa.${[dd]}</div>`)
    console.log(`dd.${[dd]}`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let dd = 0; dd <= 100; dd+=2) {
    document.write(`<div>aa.${[dd]}</div>`)
    console.log(`dd.${[dd]}`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let dd = 0; dd <= 100; dd+=2) {
    document.write(`<div>${[dd]}</div>`)
    console.log(`${[dd]}`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let dd = 0; dd <= 100; dd+=3) {
    document.write(`<div>${[dd]}</div>`)
    console.log(`${[dd]}`)
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let usersAA = [
    {name: 'vasyakolya', page: 100, aughtors: 'Omar, Haval', genre:'horor, fantazy'},
    {name: 'petyaf', page: 30, aughtors: 'Shstka, Kolbaca, fghjk, fghjk', genre: 'fantazy, old'},
    {name: 'kolyawwwkklkll', page: 29, aughtors: 'Vinuk, Sovok, jj, jj, ki', genre:'old'},
    {name: 'olya', page: 218, aughtors: 'Kastrula, Varikoz', genre:'history'},
];


// -знайти наібльшу книжку.

let maxPage = 0
let n = ' '
for (let g = 0; g < usersAA.length; g++) {
    let pageValue = usersAA[g]
    if (pageValue.page > maxPage){
        maxPage = pageValue.page
        n = pageValue.name
}
}
console.log(maxPage + " " + n)



// - знайти книжку/ки з найбільшою кількістю жанрів
let genres = []
let finishGenre = []
for (let c = 0; c < usersAA.length; c++) {
    genres[genres.length] = usersAA[c].genre
    if (){

    }
    console.log(genres)
    // console.log(finishGenre)
}
// - знайти книжку/ки з найдовшою назвою

let maxLength = 0
let m = ' '
for (let g = 0; g < usersAA.length; g++) {
    let leng = usersAA[g]
    if (leng.name.length > maxLength){
        maxLength = leng.name.length
        m = leng.name
    }
}
console.log(maxLength + " " + m)

// - знайти книжку/ки які писали 2 автори

// - знайти книжку/ки які писав 1 автор