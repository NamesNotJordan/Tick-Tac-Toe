// Event Listeners
const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () =>{
    gameBoard.reset();
})

// #region Factories
function createPlayer(name, mark) {
    return { name, mark }
}
//#endregion

//#region Modules
const gameBoard = (function (){
    let tiles = Array(9).fill("");

    const reset = () => {
        // reset the gameboard array and the tiles
        tiles = tiles.fill(null);
        render();
    }

    const render = () => {
        // put contents of tiles into html gameboard
        for (let i = 0; i < tiles.length; i++) {
            let tileElement = document.querySelector(`#${i}`);
            tileElement.innerHTML = tiles[i];
        }
    }

    return { reset, render}
})()

const displayController = (function () {

})()

const Game = (()=> {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;
    
    const begin = () => {
        players = [createPlayer("tom", "X"), createPlayer("dick", "O")]
    }
})()
//#endregion