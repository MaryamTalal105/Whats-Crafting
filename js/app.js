/*--------- Food Recipes Array ----------------------------*/
const foodRecipes = [
    {
        name: "Rabbit Stew",
        image: "Rabbit_Stew_Img.png",
        options: [
            { name: "Beetroot Soup", image: "assets/images/Beetroot_Soup_Img.png" },
            { name: "Mushroom Stew", image: "assets/images/Mushroom_Stew_Img.png" },
            { name: "Rabbit Stew", image: "assets/images/Rabbit_Stew_Img.png" }
        ],
        ingredients: [
            { name: "Baked Potato", image: "assets/images/Potato_Img.png" },
            { name: "Cooked Rabbit", image: "assets/images/Rabbit_Img.png" },
            { name: "Bowl", image: "assets/images/Bowl_Img.png" },
            { name: "Carrot", image: "assets/images/Carrot_Img.png" },
            { name: "Brown Mushroom", image: "assets/images/Brown_Mushroom_Img.png" },
            null, null, null, null
        ]
    },
    {
        name: "Mushroom Stew",
        image: "Mushroom_Stew_Img.png",
        options: [
            { name: "Rabbit Stew", image: "assets/images/Rabbit_Stew_Img.png" },
            { name: "Beetroot Soup", image: "assets/images/Beetroot_Soup_Img.png" },
            { name: "Mushroom Stew", image: "assets/images/Mushroom_Stew_Img.png" }
        ],
        ingredients: [
            { name: "Brown Mushroom", image: "assets/images/Brown_Mushroom_Img.png" },
            { name: "Red Mushroom", image: "assets/images/Red_Mushroom_Img.png" },
            { name: "Bowl", image: "assets/images/Bowl_Img.png" },
            null, null, null, null, null, null
        ]
    },
    {
        name: "Beetroot Soup",
        image: "Beetroot_Soup_Img.png",
        options: [
            { name: "Pumpkin Pie", image: "assets/images/Pumpkin_Pie_Img.png" },
            { name: "Mushroom Stew", image: "assets/images/Mushroom_Stew_Img.png" },
            { name: "Beetroot Soup", image: "assets/images/Beetroot_Soup_Img.png" }
        ],
        ingredients: [
            { name: "Bowl", image: "assets/images/Bowl_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            { name: "Beetroot", image: "assets/images/Beetroot_Img.png" },
            null, null
        ]
    },
    {
        name: "Bread",
        image: "Bread_Img.png",
        options: [
            { name: "Cookie", image: "assets/images/Cookie_Img.png" },
            { name: "Bread", image: "assets/images/Bread_Img.png" },
            { name: "Cake", image: "assets/images/Cake_Img.png" }
        ],
        ingredients: [
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            null, null, null, null, null, null
        ]
    },
    {
        name: "Cake",
        image: "Cake_Img.png",
        options: [
            { name: "Cake", image: "assets/images/Cake_Img.png" },
            { name: "Pumpkin Pie", image: "assets/images/Pumpkin_Pie_Img.png" },
            { name: "Cookie", image: "assets/images/Cookie_Img.png" }
        ],
        ingredients: [
            { name: "Milk Bucket", image: "assets/images/Milk_Img.png" },
            { name: "Milk Bucket", image: "assets/images/Milk_Img.png" },
            { name: "Milk Bucket", image: "assets/images/Milk_Img.png" },
            { name: "Sugar", image: "assets/images/Sugar_Img.png" },
            { name: "Egg", image: "assets/images/Egg_Img.png" },
            { name: "Sugar", image: "assets/images/Sugar_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" }
        ]
    },
    {
        name: "Cookie",
        image: "Cookie_Img.png",
        options: [
            { name: "Bread", image: "assets/images/Bread_Img.png" },
            { name: "Cookie", image: "assets/images/Cookie_Img.png" },
            { name: "Cake", image: "assets/images/Cake_Img.png" }
        ],
        ingredients: [
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            { name: "Cocoa Beans", image: "assets/images/Cocoa_Img.png" },
            { name: "Wheat", image: "assets/images/Wheat_Img.png" },
            null, null, null, null, null, null
        ]
    },
    {
        name: "Pumpkin Pie",
        image: "Pumpkin_Pie_Img.png",
        options: [
            { name: "Rabbit Stew", image: "assets/images/Rabbit_Stew_Img.png" },
            { name: "Cake", image: "assets/images/Cake_Img.png" },
            { name: "Pumpkin Pie", image: "assets/images/Pumpkin_Pie_Img.png" }
        ],
        ingredients: [
            { name: "Pumpkin", image: "assets/images/Pumpkin_Img.png" },
            { name: "Sugar", image: "assets/images/Sugar_Img.png" },
            { name: "Egg", image: "assets/images/Egg_Img.png" },
            null, null, null, null, null, null
        ]
    }
];


/*--------- Tools Recipes Array ----------------------------*/
const toolRecipes = [
    {
        name: "Iron Pickaxe",
        image: "Iron_Pickaxe_Img.png",
        options: [
            { name: "Wooden Pickaxe", image: "assets/images/Wooden_Pickaxe_Img.png" },
            { name: "Golden Pickaxe", image: "assets/images/Golden_Pickaxe_Img.png" },
            { name: "Iron Pickaxe", image: "assets/images/Iron_Pickaxe_Img.png" }
        ],
        ingredients: [
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null,
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null
        ]
    },
    {
        name: "Wooden Shovel",
        image: "Wooden_Shovel_Img.png",
        options: [
            { name: "Wooden Shovel", image: "assets/images/Wooden_Shovel_Img.png" },
            { name: "Diamond Shovel", image: "assets/images/Diamond_Shovel_Img.png" },
            { name: "Golden Shovel", image: "assets/images/Golden_Shovel_Img.png" }
        ],
        ingredients: [
            null,
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            null,
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null,
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null
        ]
    },
    {
        name: "Diamond Sword",
        image: "Diamond_Sword_Img.png",
        options: [
            { name: "Golden Sword", image: "assets/images/Golden_Sword_Img.png" },
            { name: "Diamond Sword", image: "assets/images/Diamond_Sword_Img.png" },
            { name: "Wooden Sword", image: "assets/images/Wooden_Sword_Img.png" }
        ],
        ingredients: [
            null,
            { name: "Diamond", image: "assets/images/Diamond_Img.png" },
            null,
            null,
            { name: "Diamond", image: "assets/images/Diamond_Img.png" },
            null,
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null
        ]
    },
    {
        name: "Shears",
        image: "Shears_Img.png",
        options: [
            { name: "Golden Shovel", image: "assets/images/Golden_Shovel_Img.png" },
            { name: "Brush", image: "assets/images/Brush_Img.png" },
            { name: "Shears", image: "assets/images/Shears_Img.png" }
        ],
        ingredients: [
            null,
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            null,
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            null, null, null, null, null
        ]
    },
    {
        name: "Fishing Rod",
        image: "Fishing_Rod_Img.png",
        options: [
            { name: "Fishing Rod", image: "assets/images/Fishing_Rod_Img.png" },
            { name: "Wooden Shovel", image: "assets/images/Wooden_Shovel_Img.png" },
            { name: "Golden Pickaxe", image: "assets/images/Golden_Pickaxe_Img.png" }
        ],
        ingredients: [
            null, null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            { name: "String", image: "assets/images/String_Img.png" },
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null,
            { name: "String", image: "assets/images/String_Img.png" }
        ]
    },
    {
        name: "Brush",
        image: "Brush_Img.png",
        options: [
            { name: "Brush", image: "assets/images/Brush_Img.png" },
            { name: "Shield", image: "assets/images/Shield_Img.png" },
            { name: "Wooden Sword", image: "assets/images/Wooden_Sword_Img.png" }
        ],
        ingredients: [
            null,
            { name: "Feather", image: "assets/images/Feather_Img.png" },
            null,
            null,
            { name: "Copper Ingot", image: "assets/images/Copper_Ingot_Img.png" },
            null,
            null,
            { name: "Stick", image: "assets/images/Stick_Img.png" },
            null
        ]
    },
    {
        name: "Shield",
        image: "Shield_Img.png",
        options: [
            { name: "Fishing Rod", image: "assets/images/Fishing_Rod_Img.png" },
            { name: "Brush", image: "assets/images/Brush_Img.png" },
            { name: "Shield", image: "assets/images/Shield_Img.png" }
        ],
        ingredients: [
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            { name: "Iron Ingot", image: "assets/images/Iron_Ingot_Img.png" },
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            null,
            { name: "Wooden Plank", image: "assets/images/Wooden_Planks_Img.png" },
            null
        ]
    }
];



/*--------- Variables (state) ----------------------------*/
let selectedCategory = ""
let currentRound = 1
let currentRecipe = 1
let availableRecipes = []
let isAnswered = false
let isGameOver = false
let hearts = 3
let diamonds = 0
//stores the remaining seconds
let timeLeft = 15
//stores identifier for the repeating timer to stop later
let timerId = null 
let selectedAnswer = null


/*----- Cached Element References ------------------------*/
const instructionsButtonEl = document.querySelector('#open-instructions')
const instructionsModalEl = document.querySelector('#instructions')
const closeInstructionsButtonEl = document.querySelector("#close-instructions")

const foodButtonEl = document.querySelector('#food')
const toolButtonEl = document.querySelector('#tools')

const menuScreen = document.querySelector('#main-menu')
const gameScreen = document.querySelector('#game-screen')

const categorySelectionButtonEls = document.querySelectorAll('.category-btn')

const roundTextEl = document.querySelector('#round')

const craftingSlotEls = document.querySelectorAll('.sqr')
const answerCardEls = document.querySelectorAll('.answer-card')

const answerCardImgs = document.querySelectorAll('.answer-card img')
const answerCardPs = document.querySelectorAll('.answer-card p')

const diamondCountEl = document.querySelector('#diamond-count')
const heartEls =  document.querySelector('#hearts')

const timeLeftEl = document.querySelector('#time-left')
timeLeftEl.textContent = timeLeft

/*------------- Functions --------------------------------*/
// A function to handle category selection 
const categorySelectionHandler = (event) => {
    selectedCategory = event.target.textContent;
    //console.log(selectedCategory)
    menuScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    if (selectedCategory === 'Food'){
        availableRecipes = foodRecipes
        //Test: console.log(availableRecipes)
        
    }else{
        availableRecipes = toolRecipes 
        //Test: console.log(toolRecipes)
    }
    recipesDisplayHandler()
}

// A funtion to handle recipe display to current round
const recipesDisplayHandler = () => {
    currentRecipe = availableRecipes[currentRound - 1]
    ingredientsDisplayHandler()
    answerCardsHandler()
    timeLeft = 15
    timeLeftEl.textContent = timeLeft
    startTimer()

}

// A function to handle ingredients display of current round
const ingredientsDisplayHandler = () => {
    craftingSlotEls.forEach((slot, index) => {
        slot.textContent = ''
        const ingredient = currentRecipe.ingredients[index]
        if(ingredient === null) {
            return
        }else{
            const ingredientImg = document.createElement('img');
            ingredientImg.src = ingredient.image
            slot.appendChild(ingredientImg)

        }
        
    });


}

// A function to handle display of answer card options
const answerCardsHandler = () => {
    answerCardEls.forEach((card,index) => {

        const answer = currentRecipe.options[index]

        const answerName = answer.name
        const answerImage = answer.image

        const answerText = answerCardPs[index]
        const answerImg = answerCardImgs[index]

        answerImg.src = answerImage
        answerImg.alt = answerName
        answerText.textContent = answerName
    });
}

// A function to handle correct answer and rewards
const correctAnswerHandler = () => {
    if(isAnswered === false){
        stopTimer()
        diamonds = diamonds + 4
        diamondCountEl.textContent = diamonds
        isAnswered = true;
        nextRoundHandler()
    }else{
        return
    }

}

// A function to handle wrong answer and lives
const wrongAnswerHandler = () => {
    if(isAnswered === false){
        stopTimer()
        hearts = hearts -1
        heartEls.lastElementChild.remove()
        isAnswered = true;
        nextRoundHandler()

    }else{
        return
    }
}


// A function to handle next round
const nextRoundHandler = () => {
    if (hearts <= 0){
        isGameOver = true
        return
    }
    if(currentRound < 7 ) {
        currentRound++
        isAnswered = false
        selectedAnswer = null
        roundTextEl.textContent = `Round ${currentRound} / 7`
        recipesDisplayHandler()
    }
    else{
        isGameOver = true;

    }
    
}

// A function to substract 1 seconds at a time from timeLeft
const updateTimer = () => {
    timeLeft = timeLeft - 1
    timeLeftEl.textContent = timeLeft
    if(timeLeft === 0){
        stopTimer()
        wrongAnswerHandler()
    }
}

const startTimer = () => {
    timerId = setInterval(updateTimer,1000);
}

const stopTimer = () => {
    clearInterval(timerId)
    timerId = null
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



answerCardEls.forEach((card,index) => {
    card.addEventListener('click', () => {
        selectedAnswer = currentRecipe.options[index]
        if(selectedAnswer.name === currentRecipe.name){
            correctAnswerHandler()
        }else{
            wrongAnswerHandler()
        }
    })
});