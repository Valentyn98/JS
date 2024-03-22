// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(res => {
//         let {carts} = res;
//         let {products} = res;
//         for (let cart of carts) {
//             for (let cartKey in cart) {
//                 console.log(cart[cartKey])
//
//                 for (let product of products) {
//                     for (let productKey in product) {
//
//                     }
//                 }
//             }
//         }
//     });

fetch('https://dummyjson.com/carts')
    // .then(res => res.json())
    // .then(carts => {
    //     for (const cart of carts.carts) {
    //         let divCarts = document.createElement('div');
    //         document.body.appendChild(divCarts);
    //
    //         for (let cartElement of cart.products) {
    //             let infoProd = document.createElement('h2')
    //             infoProd.innerText = `${cartElement.title} - ${cartElement.price}`
    //                 document.body.appendChild(infoProd)
    //         }
    //     }
    // });
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
//                 // div.innerText = recipe[recipeKey]
//
//                 if (recipeKey === 'ingredients'){
//                     recipe[recipeKey].forEach(word =>{
//                         let ulL = document.createElement('ul')
//                         div.appendChild(ulL)
//                         let LLi = document.createElement('li')
//                         ulL.append(LLi)
//                         LLi.innerText = word
//                     })
//                 }else{
//                     div.innerText = recipe[recipeKey]
//                 }
//             }
//
//         }
//         }
//     );
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => {
        for (let userElement of user) {
            let hOne = document.createElement('h1')
            document.body.append(hOne)
            for (let userElementKey in userElement) {
                hOne.innerText = "Name : " + userElement.name
            }
        }
    });

//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => {
        for (let userElement of user) {
            let hOne = document.createElement('h1')
            console.log(userElement.name)
            document.body.append(hOne)
                hOne.innerText = `${userElement.id} ${userElement.name}`
                hOne.addEventListener('click', ()=>{
                    location.href = 'user-details.html?id=' + userElement.id
                    console.log(userElement.id)
                })

        }
    });
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)