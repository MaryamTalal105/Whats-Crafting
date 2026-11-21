/*--------- Food Recipes Array ----------------------------*/
const foodRecipes = [
    {
        name: "Rabbit Stew",
        image: "Rabbit_Stew_Img.png",
        options: ["Beetroot Soup","Mushroom Stew","Rabbit Stew"],
        ingredients: [
            "Baked Potato","Cooked Rabbit","Bowl",
            "Carrot","Brown Mushroom",null,
            null,null,null
        ]
    },
    {
        name: "Mushroom Stew",
        image: "Mushroom_Stew_Img.png",
        options: ["Rabbit Stew","Beetroot Soup","Mushroom Stew"],
        ingredients: [
            "Brown Mushroom","Red Mushroom","Bowl",
            null,null,null,
            null,null,null
        ]
    },
    {
        name: "Beetroot Soup",
        image: "Beetroot_Soup_Img.png",
        options: ["Pumpkin Pie","Mushroom Stew","Beetroot Soup"],
        ingredients: [
            "Bowl","Beetroot","Beetroot",
            "Beetroot","Beetroot","Beetroot",
            "Beetroot",null,null
        ]
    },
    {
        name: "Bread",
        image: "Bread_Img.png",
        options: ["Cookie","Bread","Cake"],
        ingredients: [
            "Wheat","Wheat","Wheat",
            null,null,null,
            null,null,null
        ]
    },
    {
        name: "Cake",
        image: "Cake_Img.png",
        options: ["Cake","Pumpkin Pie","Cookie"],
        ingredients: [
            "Milk Bucket","Milk Bucket","Milk Bucket",
            "Sugar","Egg","Sugar",
            "Wheat","Wheat","Wheat"
        ]
    },
    {
        name: "Cookie",
        image: "Cookie_Img.png",
        options: ["Bread","Cookie","Cake"],
        ingredients: [
            "Wheat","Cocoa Beans","Wheat",
            null,null,null,
            null,null,null
        ]
    },
    {
        name: "Pumpkin Pie",
        image: "Pumpkin_Pie_Img.png",
        options: ["Rabbit Stew","Cake","Pumpkin Pie"],
        ingredients: [
            "Pumpkin","Sugar","Egg",
            null,null,null,
            null,null,null
        ]
    },
]

/*--------- Tools Recipes Array ----------------------------*/
const toolRecipes = [
    {
        name: "Iron Pickaxe",
        image: "Iron_Pickaxe_Img.png",
        options: ["Wooden Pickaxe","Gold Pickaxe","Iron Pickaxe"],
        ingredients: [
            "Iron Ingot","Iron Ingot","Iron Ingot",
            null,"Stick",null,
            null,"Stick",null
        ]
    },
    {
        name: "Wooden Shovel",
        image: "Wooden_Shovel_Img.png",
        options: ["Wooden Shovel","Diamond Shovel","Gold Shovel"],
        ingredients: [
            null,"Wooden Plank",null,
            null,"Stick",null,
            null,"Stick",null
        ]
    },
    {
        name: "Diamond Sword",
        image: "Diamond_Sword_Img.png",
        options: ["Golden Sword","Diamond Sword","Wooden Sword"],
        ingredients: [
            "Diamond",null,null,
            "Diamond",null,null,
            "Stick",null,null
        ]
    },
    {
        name: "Shears",
        image: "Shears_Img.png",
        options: ["Gold Shovel","Brush","Shears"],
        ingredients: [
            null,"Iron Ingot",null,
            "Iron Ingot",null,null,
            null,null,null
        ]
    },
    {
        name: "Fishing Rod",
        image: "Fishing_Rod_Img.png",
        options: ["Fishing Rod","Wooden Shovel","Gold Pickaxe"],
        ingredients: [
            "Milk Bucket","Milk Bucket","Milk Bucket",
            "Sugar","Egg","Sugar",
            "Wheat","Wheat","Wheat"
        ]
    },
    {
        name: "Brush",
        image: "Brush_Img.png",
        options: ["Brush","Shield","Wooden Sword"],
        ingredients: [
            "Feather",null,null,
            "Copper Ingot",null,null,
            "Stick",null,null
        ]
    },
    {
        name: "Shield",
        image: "Shield_Img.png",
        options: ["Fishing Rod","Brush","Shield"],
        ingredients: [
            "Wooden Plank","Iron Ingot","Wooden Plank",
            "Wooden Plank","Wooden Plank","Wooden Plank",
            null,"Wooden Plank",null
        ]
    },
]

/*------------- Constants --------------------------------*/




/*--------- Variables (state) ----------------------------*/
let selectedCategory = "";




/*----- Cached Element References ------------------------*/
const instructionsButtonEl = document.querySelector('#open-instructions')
const instructionsModalEl = document.querySelector('#instructions')
const closeInstructionsButtonEl = document.querySelector("#close-instructions")
const categorySelectionButtonEls = document.querySelectorAll('.category-Btn')
// Test
//console.log(instructionsButtonEl,instructionsModalEl,closeInstructionsButtonEl)
//console.log(categorySelectionButtonEls)

/*------------- Functions --------------------------------*/
// A function to handle category selection 
const categorySelectionHandler = (event) => {
    selectedCategory = event.target.textContent;
    console.log(selectedCategory)
}




/*---------- Event Listeners -----------------------------*/
instructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.showModal()
})

closeInstructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.close()
})

categorySelectionButtonEls.forEach(element => {
    element.addEventListener('click', categorySelectionHandler)
});

