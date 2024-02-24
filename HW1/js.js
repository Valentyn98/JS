//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a)
let b = 'owu';
console.log(b)
let c = 'com';
console.log(c)
let d = 'ua';
console.log(d)
let one = 1;
console.log(one)
let num2 = 10;
console.log(num2)
let num3 = -999;
console.log(num3)
let num4 = 123;
console.log(num4)
let Pi = 3.14;
console.log(Pi)
let num6 = 2.7;
console.log(num6)
let num7 = 16;
console.log(num7)
let t = 1; //true or
console.log(t)
let tr = true;
console.log(tr)
let f = 0; //false or
console.log(f)
let fa = false;
console.log(fa)



//- Створити 3 змінних firstName, middleName,
// lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Valentyn";
let middleName = "Postolenko";
let lastname = "Viktorovych";

console.log(firstName +" "+middleName+" "+lastname);


// let pib = `${firstName} ${middleName} ${lastname}`
// console.log(pib)



//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let q = 100;
let w = '100';
let e = true;

console.log(typeof q);
let r = typeof w;
console.log(r)
let ty = !!typeof e;
console.log(ty)

//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які
// являються вашими Імям, По-Батькові та роками. та вивести в консоль

let odin = prompt("");
let dova = prompt("");
let triva = prompt("");

console.log(odin)
console.log(dova)
console.log(triva)

let odt = `${odin} ${dova} ${triva}`

console.log(odt)

let odttwo = odin + " " + dova + " " + triva

console.log(!!odttwo)
