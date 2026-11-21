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

/*--------- Food Recipes Array ----------------------------*/


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

