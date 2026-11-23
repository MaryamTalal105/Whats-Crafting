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

const resultScreen = document.querySelector('#result-screen')
const resultTitleEl = document.querySelector('#result-title')
const resultMsgEl = document.querySelector('#result-msg')
const totalDiamondsEl = document.querySelector('#total')

const restartButtonEl = document.querySelector('#restart-btn')
const mainButtonEl = document.querySelector('#main-btn')

const feedbackMsgEl = document.querySelector('#feedback-msg')
/*------------- Functions --------------------------------*/
// A function to handle category selection 
const categorySelectionHandler = (event) => {
    //1. store category selected
    selectedCategory = event.target.textContent;
    //console.log(selectedCategory)
    //2. call restart func
    restGameHandler()
    //3. hide menu and show game screen
    menuScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    //4. check selected category
    if (selectedCategory === 'Food'){
        //assign corresponding array "Food recipes or tools recipes"
        availableRecipes = foodRecipes
        //Test: console.log(availableRecipes)
        
    }else{
        availableRecipes = toolRecipes 
        //Test: console.log(toolRecipes)
    }
    //4. call recipe display handler func
    recipesDisplayHandler()
}

// A funtion to handle recipe display to current round
const recipesDisplayHandler = () => {
    //1.  store current recipe 
    currentRecipe = availableRecipes[currentRound - 1]
    //2. call ingredients display handler func
    ingredientsDisplayHandler()
    //3. call the answer cards handler func
    answerCardsHandler()
    //4. start timer 
    timeLeft = 15
    timeLeftEl.textContent = timeLeft
    startTimer()

}

// A function to handle ingredients display of current round
const ingredientsDisplayHandler = () => {
    //1. loop through the crafting slot
    craftingSlotEls.forEach((slot, index) => {
        //2. clear slot
        slot.textContent = ''
        //3. get the ingredient for this slot
        const ingredient = currentRecipe.ingredients[index]
        //4. check if ingredient is null, skip
        if(ingredient === null) {
            return
            //otherwise, create img element, assign it src and append
        }else{
            const ingredientImg = document.createElement('img');
            ingredientImg.src = ingredient.image
            slot.appendChild(ingredientImg)

        }
        
    });


}

// A function to handle display of answer card options
const answerCardsHandler = () => {
    //1. loop through the 3 answer cards
    answerCardEls.forEach((card,index) => {

        //2. get the answer for this card
        const answer = currentRecipe.options[index]
        
        //3. get the answer name and img
        const answerName = answer.name
        const answerImage = answer.image

        //4. get the answer text and img placeholders from the html
        const answerText = answerCardPs[index]
        const answerImg = answerCardImgs[index]

        //5. assign src, alt and text for placeholders
        answerImg.src = answerImage
        answerImg.alt = answerName
        answerText.textContent = answerName
    });
}

// A function to handle correct answer and rewards
const correctAnswerHandler = () => {
    //1. check if question is answered 
    if(isAnswered === false){
        //stop timer
        stopTimer()
        //reward
        diamonds = diamonds + 4
        diamondCountEl.textContent = diamonds
        //change to answered
        isAnswered = true;
        //show feedback
        showFeedbackHandler(true)
        //otherwise, skip
    }else{
        return
    }

}

// A function to handle wrong answer and lives
const wrongAnswerHandler = () => {
    //1. check if question is answered 
    if(isAnswered === false){
        //stop timer
        stopTimer()
        //remove 1 heart
        hearts = hearts -1
        //remove 1 actual heart html element
        heartEls.lastElementChild.remove()
        //change to answered
        isAnswered = true;
        //show feedback
        showFeedbackHandler(false)
        //otherwise, skip
    }else{
        return
    }
}


// A function to handle next round
const nextRoundHandler = () => {
    //1. check if player lost all hearts
    if (hearts <= 0){
        //game over
        isGameOver = true
        resultScreenHandler()
        return
    }
    //2. check if there are more rounds
    if(currentRound < 7 ) {
        //move to next round
        currentRound++
        //reset answer state
        isAnswered = false
        selectedAnswer = null
        //update round number
        roundTextEl.textContent = `Round ${currentRound} / 7`
        //call recipe display handler func
        recipesDisplayHandler()
    }
    //otherwise, game is over
    else{
        isGameOver = true;
        resultScreenHandler()

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

// A function to start countdown
const startTimer = () => {
    timerId = setInterval(updateTimer,1000);
}

// A function to stop countdown
const stopTimer = () => {
    clearInterval(timerId)
    timerId = null
}

//A function to display result screen
const resultScreenHandler = () => {
    menuScreen.style.display = 'none'
    gameScreen.style.display = 'none'
    resultScreen.style.display = 'flex'

   if(isGameOver === true &&  hearts <=0){
    resultTitleEl.textContent = 'You Lose!'
    resultMsgEl.textContent = 'Oh no! you lose all your hearts.'
    totalDiamondsEl.textContent = diamonds
   } else{
    resultTitleEl.textContent = 'You Win!'
    resultMsgEl.textContent = 'Well done! your crafting skills are legendary.'
    totalDiamondsEl.textContent = diamonds
   }
}

// A function to rest the game data
const restGameHandler = () => {
    stopTimer()
    currentRound = 1
    currentRecipe = 1
    isAnswered = false
    isGameOver = false
    hearts = 3
    diamonds = 0
    selectedAnswer = null
    timeLeft = 15

    roundTextEl.textContent = `Round ${currentRound} / 7`
    diamondCountEl.textContent = diamonds
    timeLeftEl.textContent = timeLeft
    feedbackMsgEl.textContent = ''
    feedbackMsgEl.className = ''

    heartEls.innerHTML = `<img src="assets/images/Heart_Img.png" alt="Heart">
                <img src="assets/images/Heart_Img.png" alt="Heart">
                <img src="assets/images/Heart_Img.png" alt="Heart">`
            }

// A function to handle starting a new game after game over
const restartGameHandler = () => {
    restGameHandler()
    resultScreen.style.display = 'none'
    gameScreen.style.display = 'block'
    recipesDisplayHandler();
}

// A function to return to main menu
const mainMenuReturnHandler = () => {
    stopTimer()
    resultScreen.style.display = 'none'
    gameScreen.style.display = 'none'
    menuScreen.style.display = 'block'
}

// A function to show feedback 
const showFeedbackHandler = (isCorrect) => {
    //1. check answer is correct
    if(isCorrect === true){
        //display correct message and apply css "green"
        feedbackMsgEl.textContent = "Correct, Well done!"
        feedbackMsgEl.className = 'correct'
    }else{
        //otherwise, display wrong message and apply css "red"
        feedbackMsgEl.textContent = "Incorrect, Hard luck!"
        feedbackMsgEl.className = 'incorrect'
    }
    //after 2 sec, clear message and css, move to next round
      setTimeout(() => {
        feedbackMsgEl.textContent = ''
        feedbackMsgEl.className = ''
        nextRoundHandler()
    }, 2000)
}
/*---------- Event Listeners -----------------------------*/
//Instructions 
instructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.showModal()
})

closeInstructionsButtonEl.addEventListener('click', () => {
    instructionsModalEl.close()
})
//Category selection
categorySelectionButtonEls.forEach(element => {
    element.addEventListener('click', categorySelectionHandler)
});


//Answer Cards
answerCardEls.forEach((card,index) => {
    card.addEventListener('click', () => {
        //1. store selected answer
        selectedAnswer = currentRecipe.options[index]
        //2. check if answer is correct
        if(selectedAnswer.name === currentRecipe.name){
            //if correct
            correctAnswerHandler()
        }else{
            //if wrong
            wrongAnswerHandler()
        }
    })
});

//Restart
restartButtonEl.addEventListener('click',restartGameHandler)

//Return to main 
mainButtonEl.addEventListener('click',mainMenuReturnHandler)