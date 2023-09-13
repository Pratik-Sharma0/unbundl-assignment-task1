let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dairy milk silk',
        image: 'Dairymilksilk.jpeg',
        price: 120.00
    },
    {
        id: 2,
        name: 'Dairy milk',
        image: 'Dairy milk.jpeg',
        price: 120.00
    },
    {
        id: 3,
        name: "Midiron",
        image: 'friends.jpeg',
        price: 220.00
    },
    {
        id: 4,
        name: 'Mr Beast',
        image: 'mr beast.jpeg',
        price: 123.00
    },
    {
        id: 5,
        name: 'Dark Chocolate',
        image: 'dark.jpeg',
        price: 320.00
    },
    {
        id: 6,
        name: 'Strawberry',
        image: 'straw.jpeg',
        price: 120.00
    },
    {
        id:7,
        name: 'Milky bar',
        image: 'milky bar.jpeg',
        price: 100.00

    },
    {
        id:8,
        name: 'Nestle',
        image: 'nestle.jpeg',
        price: 150.00

    },
    {
        id:9,
        name: "Hershey's",
        image: 'hershey.jpeg',
        price: 130.00

    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity==9){
       return null;
    }
    else if(quantity == 0 ){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}