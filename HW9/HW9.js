// - створити блок,

let block = document.createElement('div')

console.log(block)
//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap','collapse','alpha','beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.innerText = 'sadadad'
block.style.background = 'orange'
block.style.width = '50%'
block.style.fontSize = '100px'
// - додати цей блок в body.
document.body.append(block)
// - клонувати його повністю, та додати клон в body.
let clone = block.cloneNode(true)
console.log(clone)
document.body.append(clone)
// - Є масив:
let array = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let u = document.createElement('ul')
document.body.appendChild(u)
for (let i = 0; i < array.length; i++) {
    let l = document.createElement('li')
    u.appendChild(l)
    l.innerText = array[i]
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок
// в якому вивести інформацію про title та monthDuration

let c = document.createElement('div')
document.body.appendChild(c)


for (let coursesAndDurationArrayElement of coursesAndDurationArray) {

}
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let pOne = document.createElement('p')
    let pTwo = document.createElement('p')
    c.appendChild(pOne)
    c.appendChild(pTwo)
    pOne.innerText = `${coursesAndDurationArray[i].title}`
    pTwo.innerText = `${coursesAndDurationArray[i].monthDuration}`
}
// Завдання робити через цикли.
//
// =========================
//
//     - Є масив
let coursesAndDurationArrayTwo = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let desh = document.createElement('div')
desh.classList.add('item')
document.body.append(desh)

for (let i = 0; i <coursesAndDurationArrayTwo.length; i++) {
    let h = document.createElement('h1')
    h.classList.add('heading')

    h.innerText = coursesAndDurationArrayTwo[i].title

    let pi = document.createElement('p')
    pi.classList.add('description')

    pi.innerText = coursesAndDurationArrayTwo[i].monthDuration

    desh.append(h)
    desh.append(pi)


}
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту



let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let sim = document.createElement('div')
document.body.append(sim)

for (let i = 0; i < simpsons.length; i++) {
    let n = document.createElement('div')
    n.classList.add('member')
    sim.append(n)

    let name = document.createElement('p')
    name.innerText = simpsons[i].name
    let surname = document.createElement('p')
    surname.innerText = simpsons[i].surname
    let age = document.createElement('p')
    age.innerText = simpsons[i].age
    let info = document.createElement('p')
    info.innerText = simpsons[i].info
    let photo = document.createElement('p')
    photo.innerText = simpsons[i].photo

    n.append(name)
    n.append(surname)
    n.append(age)
    n.append(info)
    n.append(photo)


}
//
// =========================
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


for (const coursesArrayElement of coursesArray) {

    let elements = document.createElement('div')
    let topicOne = document.createElement('div')
    let topicTwo = document.createElement('div')
    let topicThree = document.createElement('div')
    let topicFour = document.createElement('div')


    document.body.append(elements)
    elements.append(topicOne,topicTwo,topicThree,topicFour)


    for (let topicArrayKey in coursesArrayElement) {
        topicOne.innerText = 'Title: ' + coursesArrayElement.title
        topicTwo.innerText = 'MonthDuration: ' + coursesArrayElement.monthDuration
        topicThree.innerText = 'HourDuration: ' + coursesArrayElement.hourDuration



        for (let i = 0; i < coursesArrayElement[topicArrayKey].length; i++) {
            let el = document.createElement('li')
            topicFour.appendChild(el)
            el.innerText = 'Modules: ' + coursesArrayElement[topicArrayKey][i]
        }

    }
}







//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------