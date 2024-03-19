const X_mark = "X"
const O_mark = "O"


const theGameBoard = (function(){
    const gameBoard = Array(9, null)
    
    const addToBoard = (thing) => {gameBoard.push(thing)}

    const playerWins = (symbol) => {
        //Check lines for symbol
        // Check Diagonals    
        if (gameBoard[0] == symbol &&
            gameBoard[4] == symbol &&
            gameBoard[8] == symbol) {
                return true
        }
        if (gameBoard[2]== symbol &&
            gameBoard[4]== symbol &&
            gameBoard[6]== symbol) {
                return true
        }
        // Check across
        if ((gameBoard[0] == symbol && 
            gameBoard[1] == symbol && 
            gameBoard[2]== symbol) ||
            
            (gameBoard[3] == symbol && 
            gameBoard[4] == symbol && 
            gameBoard[5]== symbol) ||
            
            (gameBoard[6] == symbol && 
            gameBoard[7] == symbol && 
            gameBoard[8]== symbol)) {
                return true
        }
        // Check Columns
        if ((gameBoard[0]==symbol &&
            gameBoard[3] == symbol &&
            gameBoard[6] == symbol)||
            
            (gameBoard[1]==symbol &&
            gameBoard[4] == symbol &&
            gameBoard[7] == symbol) ||
            
            (gameBoard[2]==symbol &&
            gameBoard[5] == symbol &&
            gameBoard[8] == symbol)) {
                return true
        }
        return false
    }
    return {gameBoard, playerWins, addToBoard}
})

function createPlayer(name) {
    // Player attributes
    this.name = name
    this.score = 0
    
    const increaseScore = () => {this.score++}
    return { name, score, increaseScore }
}

//TODO: gameControl
const gameControl = (function() {
    player_1 = createPlayer()
    player_2 = createPlayer()
    
    const player_mark = X_mark
    //TODO: Add ability to alternate between players
    const addListeners = () => {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }
    }
    while (!playerWins(X_mark) || playerWins(O_mark)) {
        
    }
    
    
})
