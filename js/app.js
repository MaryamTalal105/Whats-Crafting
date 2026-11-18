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

