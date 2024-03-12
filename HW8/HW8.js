// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
console.log(new User(1, "Oleg", "Viktorov", "werwer@.com", 234234234));
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user = [
    new User(22, 'Olya', 'Polka', 'pol@gmail.com', 2131 ),
    new User(2, 'Anya', 'cushka', 'cushka@gmail.com', 2132),
    new User(56, 'Uker', 'rukav', 'rukav@gnail.com', 4533),
    new User(234, 'Uker', 'rukav', 'rukav@gnail.com', 4534),
    new User(23, 'Dker', 'rukav', 'rukav@gnail.com', 4535),
    new User(12, 'Rnder', 'rukav', 'rukav@gnail.com', 4536),
    new User(12, 'Nuer', 'rukav', 'rukav@gnail.com', 4537),
    new User(66, 'Uper', 'rukav', 'rukav@gnail.com', 4538),
    new User(5, 'Geer', 'rukav', 'rukav@gnail.com', 4539),
    new User(1, 'Utyu', 'rukav', 'rukav@gnail.com', 4530)
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let res = user.filter((user) => user.id % 2 === 0)
console.log(res)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let minmax = user.sort((a, b) => (a.id - b.id))
console.log(minmax)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let cl = new Client(22, 'Jova', 'Pupkin', 'qweqwe@gmail.com', 45678765, ['stakan' , 'lopata', 'muska', 'utug'])

// створити пустий масив, наповнити його 10 об'єктами Client

let Clientt =[
    new Client( 1, 'luda', 'Ludovna', 'lud@gmail.com', 221,['stakan' , 'lopata', 'muska', 'utug'] ),
    new Client( 2, 'lobo', 'sdLob3ob', 'ldsdobob@gmail.com', 222,['stakan' , 'muska', 'utug']),
    new Client( 3, 'Udon' ,'Usdonov' , 'udkda@gmail.com' ,223, ['stakan' ,]),
    new Client( 4, 'sdlobsdfo', 'Lobob', 'lobfob@gmail.com', 224,['stakan' ,  'utug']),
    new Client( 53, 'Udon' ,'Udonov' , 'udka@gmail.com' ,225, ['stakan' ,'utug']),
    new Client( 12, 'lobo', 'Lobovb', 'hlobob@gmail.com', 226,['stakan' , 'lopata', 'muska', 'utug']),
    new Client( 22, 'Udvon' ,'Udonov' , 'udka@gmail.com' ,227, ['stakan' , 'lopata', 'utug']),
    new Client( 15, 'lqweobo', 'Lobosb', 'lobob@gmail.com', 228,[ 'lopata', 'muska', 'utug']),
    new Client( 66, 'Udon' ,'Udonov' , 'udka@gmail.com' ,229, ['stakan' , 'lopata', 'muska', 'utug']),
    new Client( 2346, 'lonbo', 'Lowbob', 'lobob@gmail.com', 220,['stakan' , 'muska', 'utug']),
    new Client( 334, 'Udodfn' ,'Udonov' , 'udhka@gmail.com' ,223, ['stakan' , 'lopata', 'muska', 'utug', 'utug'])
];
console.log(Clientt);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sQort = Clientt.sort((a, b) => (a.order.length - b.order.length))
console.log(sQort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
function Car (model, producer, year, speedlimit, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speedlimit = speedlimit;
    this.volume = volume;

    this.drive = (speedlimit) => {
        console.log(`їдемо зі швидкістю ${speedlimit}` )
    }

    this.info = () => {
        console.log(` Model: ${this.model} Producer: ${this.producer} Year: ${this.year} Speedlimit: ${this.speedlimit} Volume: ${this.volume}`)
    }

    this.increaseMaxSpeed = (newSpeed) => {
        this.speedlimit += newSpeed
    }

    this.changeYear = (newValue) => {
        this.year = newValue
    }

    this.addDriver = (driver) => {
         this.driver = driver
    }
}
let ca = new Car('Lex', 'Japan', 2024, 220, 3.0)
ca.increaseMaxSpeed(20)
ca.changeYear(2025)
ca.addDriver('Tolik y aparata')
ca.info(this)
console.log(ca)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` v
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` v
// -- increaseMaxSpeed (newSpeed) - яка підвищує
// значення максимальної швидкості на значення newSpeed v
// -- changeYear (newValue) - змінює рік випуску на значення newValue v
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Carcar {
    constructor(model, producer, year, speedlimit, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speedlimit = speedlimit;
        this.volume = volume;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.speedlimit}`)
    }
    info(){
        for (let thisKey in this) {
            `${thisKey} ${this[thisKey]}`
        }
    }
    increaseMaxSpeed(newSpeed){
        this.speedlimit += newSpeed
    }

    changeYear (newValue){
        this.year = newValue
    }
    addDriver (driver){
        this.driver = driver
    }
}
let entered = new Carcar ('Tesla', 'Mask',2021, 200, 650)
entered.drive()
entered.increaseMaxSpeed(20)
entered.changeYear(2050)
entered.addDriver('Tigipko')
console.log(entered)
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class Popailushki {
    constructor(name, year, footsize) {
        this.name = name;
        this.year = year;
        this.footsize = footsize;
    }
}

let girls = [
    new Popailushki('Olegh', 56, 43),
    new Popailushki('Tolik', 46, 42),
    new Popailushki('Nikolya', 56, 41),
    new Popailushki('Yevgen', 33, 14),
    new Popailushki('Andry', 59, 40),
    new Popailushki('Olegh', 56, 41),
    new Popailushki('julia', 76, 43),
    new Popailushki('Olegh', 56, 43),
    new Popailushki('Olegh', 66, 23),
    new Popailushki('Vitka', 56, 15),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince (nameOfPrince, year, size){
    this.nameOfPrince = nameOfPrince;
    this.year = year;
    this.size = size;
}

let prince = new Prince ('Brat Bolodya', 30, 15)


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let love = (girls ,prince) => {
    for (const girl of girls) {
            if (girl.footsize === prince.size){
                console.log(`The name of our princes is ${girl.name}`)
            }
    }
}
love (girls ,prince)
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let bonus = girls.find((girl) => girl.footsize === prince.size)
console.log(bonus)