// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(carts => {
//         for (const cart of carts.carts) {
//             let divCarts = document.createElement('div');
//             divCarts.innerText = `${cart.id}`
//             document.body.appendChild(divCarts);
//
//             for (let cartElement of cart.products) {
//                 let infoProd = document.createElement('h2')
//                 infoProd.innerText = ` Назва корзини: ${cartElement.title} - Ціна: ${cartElement.price}`
//
//                 let quantity = document.createElement("p")
//                 quantity.innerText = `Кількість:  ${cartElement.quantity}`
//
//                 let total = document.createElement("p")
//                 total.innerText = `Загальний:  ${cartElement.total}`
//
//                 let discountPercentage = document.createElement("p")
//                 discountPercentage.innerText = `Відсоток знижки:  ${cartElement.discountPercentage}`
//
//                 let discountedPrice = document.createElement("p")
//                 discountedPrice.innerText = `Ціна зі знижкою:  ${cartElement.discountedPrice}`
//
//                 let img = document.createElement('img')
//                 img.src = `${cartElement.thumbnail}`
//
//                 divCarts.append(infoProd,quantity,total,discountPercentage,discountedPrice,img)
//             }
//         }
//     });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути в списку під час відображення.

// document.body.appendChild(rec)


// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(recipes => {
//         for (let recipe of recipes.recipes) {
//             for (let recipeKey in recipe) {
//
//                 let div = document.createElement('div')
//                 document.body.append(div)
//
//                 if (recipeKey === 'ingredients'){
//                     let ulL = document.createElement('ul')
//                     div.appendChild(ulL)
//                     ulL.innerText = 'Інгрідієнти:'
//                     recipe[recipeKey].forEach(word =>{
//
//                         let LLi = document.createElement('li')
//                         ulL.append(LLi)
//                         LLi.innerText = word
//                     })
//                 }else{
//                     div.innerText =   `${recipeKey} :  ${recipe[recipeKey]}`
//                 }
//             }
//         }
//         }
//     );
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// fetch('http://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(user => {
//         for (let userElement of user) {
//             let hOne = document.createElement('h1')
//             document.body.append(hOne)
//             for (let userElementKey in userElement) {
//                 hOne.innerText = "Name : " + userElement.name
//             }
//         }
//     });

//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => {
        for (let userElement of user) {
            let hOne = document.createElement('h1')
            console.log(userElement.name)
            document.body.append(hOne)
                hOne.innerText = `ID: ${userElement.id} NAME: ${userElement.name}`
                hOne.addEventListener('click', ()=>{
                    location.href = 'user-detail.html?id=' + userElement.id
                    console.log(userElement.id)
                })
        }
    });
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)