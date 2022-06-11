const menu = [
        {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./image/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./image/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./image/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./image/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./image/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./image/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./image/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./image/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./image/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./image/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
];


const menuElement = document.getElementById("menu");

    const render =  menu.map( (item) => { 
        return(/*html*/`
        <div class="menu-item">
            <img class="products-img" src=${item.img} alt="">
            <div class="menu-content">
                <div class="title">
                    <span class="title">${item.title}</span>
                    <span class="price">$${item.price}</span>
                </div>
                <div class="item">
                    <span class="description">${item.desc}</span>
                </div>
            </div>
        </div>
    </div>
    `)});
        menuElement.innerHTML = render.join("");


const Btns = document.querySelectorAll(".btn");
    Btns.forEach(function (item) {
    item.addEventListener('click', function(event) {
        const category = event.currentTarget.getAttribute('data-id');
        if(category === "all") {
        render(menu)
        } else {
        const catgoryMenu = menu.filter(function(item) {
            return item.category === category
        })
        render(catgoryMenu)
        }
    })
});
    
function addFillterClass(element) {
    clearFilterClass()
    element.classList.add('btn-filtered')
}

function clearFilterClass(){
    filterBtns.forEach(function(item) {
        item.classList.remove('btn-filtered')
    })
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {    
        render(menu);
    },1000);
});