// Event Listeners
const resetButton = document.querySelector("#reset-btn")
resetButton.addEventListener("click", gameBoard.reset())

// Factories


// Modules
const gameBoard = (function (){
    const tiles = Array(9).fill(null)
    const reset = () => {
        // reset the gamboard array and the tiles
    }
})