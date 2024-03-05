// - Знайти та вивести довижину наступних стрінгових значень
let o = 'hello world'
let n = 'lorem ipsum'
let e = 'javascript is cool'
console.log(o.length);
console.log(n.length);
console.log(e.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let oo = 'hello world'
let nn = 'lorem ipsum'
let ee = 'javascript is cool'

console.log(oo.toUpperCase());
console.log(nn.toUpperCase());
console.log(ee.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
    let t = 'HELLO WORLD'
let w = 'LOREM IPSUM'
let ow = 'JAVASCRIPT IS COOL'
console.log(t.toLowerCase());
console.log(w.toLowerCase());
console.log(ow.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let strr = 'Ревуть воли як ясла повні';
console.log(strr.split(' '));
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let a = []
let arrOfNum = [10,8,-7,55,987,-1011,0,1050,0]
arrOfNum.map(value => {
   return  a.push(value += " ")
})
console.log(a);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];

let sortNums = (nums,direction) => {
    if (direction === 0){
        return nums.sort((a,b) => (a - b))}
    else if (direction === 1){
        return nums.sort((a,b) => (b - a))
    }
}
console.log(sortNums(nums,0));
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let spad = coursesAndDurationArray.sort((a, b)=>(b.monthDuration - a.monthDuration))
console.log(spad);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let yy = coursesAndDurationArray.filter((value)=>{
    return value.monthDuration > 5
});
console.log(yy);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 let hurd =  coursesAndDurationArray.map((value,index) => {
    let u = {
        id : index + 1,
        title : value.title,
        monthDuration : value.monthDuration
    }
    return u;
})
console.log(hurd);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let desk = [
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'}
];


// - знайти піковий туз
function item (value){
    if (value.cardSuit === 'spade' && value.value === 'ace'){
        console.log(value);
    }
}
desk.forEach(item)

desk.forEach((item) => {
    if (item.cardSuit === 'spade' && item.value === 'ace'){
        console.log(item);
    }
})
// - всі шістки
let age = desk.filter((value) => value.value === '6')
console.log(age);


// - всі червоні карти
let red = desk.map((card) => {
    if (card.color = 'red'){
        console.log(card)
    }
})
// - всі буби
let diamond = desk.filter((value) => value.cardSuit === 'diamond')
console.log(diamond);

// - всі трефи від 9 та більше


let clubs = desk.filter((value) => {
    return value.cardSuit === "clubs"
})
console.log(clubs)
let res = clubs.splice(4,5)
console.log(res);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let b = desk.reduce((accumulator, user) => {
    if (user.cardSuit === 'spade'){
        accumulator[0].push(user)
    }if (user.cardSuit === 'clubs'){
        accumulator[1].push(user)
        }if (user.cardSuit === 'heart'){
            accumulator[2].push(user)
        }if (user.cardSuit === 'diamond'){
            accumulator[3].push(user)
        }
    return accumulator
    },
    [[],[],[],[]])
console.log(b);
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass
let gg = (coursesArray.filter((value) => {
    return (value.modules.find(v => v === "sass"));
}));
console.log(gg)

// --написати пошук всіх об'єктів, в який в modules є docker
let qq = (coursesArray.filter((value) => {
    return (value.modules.find(v => v === "docker"));
}));
console.log(qq)

let rr = (coursesArray.filter((value) => {
    return (value.modules.find(v => console.log(v)));
}));
console.log(rr);