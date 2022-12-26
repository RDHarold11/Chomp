
//Show Menu Responsive

const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.btn-menu')

menuBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("show-nav")
})


//QUESTIONS DROPDOWN

const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", ()=>{
        /* questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        }) */
        question.classList.toggle("show-text")
    })
})

//menu items

const menu = [
    {
        id: 1,
        title: "Burger Dreams",
        price: 9.29,
        img: "/img/rec1.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 2,
        title: "Burger Waldo",
        price: 10.00,
        img: "/img/b2.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 3,
        title: "Burger Cali",
        price: 8.00,
        img: "/img/b3.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 4,
        title: "Burger Bacon Buddy",
        price: 9.99,
        img: "/img/b4.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 5,
        title: "Burger Spicy",
        price: 9.20,
        img: "/img/b5.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 6,
        title: "Burger Classic",
        price: 8.00,
        img: "/img/b6.png",
        category: "burger",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 7,
        title: "Salad Ceaser",
        price: 6.00,
        img: "/img/s1.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 8,
        title: "Beans Slow Cooked",
        price: 4.00,
        img: "/img/s2.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 9,
        title: "Fries Cheese",
        price: 5.00,
        img: "/img/s3.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 10,
        title: "Salad Ceaser",
        price: 6.00,
        img: "/img/s4.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 11,
        title: "Fries Rustic",
        price: 4.00,
        img: "/img/s5.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 12,
        title: "Salad Ceaser",
        price: 6.00,
        img: "/img/s6.png",
        category: "sides",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 13,
        title: "Drink Fig & Lime ",
        price: 4.00,
        img: "/img/d1.png",
        category: "drink",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 14,
        title: "Drink Liquor",
        price: 7.00,
        img: "/img/d2.png",
        category: "drink",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 15,
        title: "Drink Lime ",
        price: 4.00,
        img: "/img/d3.png",
        category: "drink",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
    {
        id: 16,
        title: "Drink Cola ",
        price: 3.00,
        img: "/img/d4.png",
        category: "drink",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat labore, esse cumque voluptatum saepe soluta.",
    },
]

const recipeContainer = document.querySelector(".recipe-container")
const recipeBtns = document.querySelectorAll(".btn-recipe");

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenu(menu);
})

recipeBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter(function(item){
            if(item.category === category){
                return item;
            }
        });
        if(category === "all"){
            displayMenu(menu)
        }else{
            displayMenu(menuCategory)
        }
    })
})

function displayMenu(menus){
    let menuItems = menus.map(function(item){

        return `<div class="recipe">
        <div class="left">
            <img src=${item.img} alt="">
        </div>
        <div>
        <div class="top">
            <h4>${item.title}</h4>
            <p><span>$ ${item.price} USD</span></p>
        </div>
        <div class="center">
            <p>${item.descripcion}</p>
            <input type="number" value="1">
            <button class="btn">Add to Cart</button>
        </div>
    </div>
    </div>`
    })
    menuItems = menuItems.join("");
    recipeContainer.innerHTML = menuItems;
}