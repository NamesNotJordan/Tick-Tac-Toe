const theGameBoard = (function(){
    const gameBoard = [
        "","","",
        "","","",
        "","",""]
    
    const addToBoard = (thing) => gameBoard.push(thing)
    //TODO: Check board for every win condition
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
    }
    return {gameBoard}
})
//TODO: gameControl
const gameControl = (function() {
    player_1 = createPlayer()
    player_2 = createPlayer()
    
    //TODO: Add ability to alternate between players
    if (playerWins('x')) {
        console.log(`${player_1.name} wins!`)
    }
    if (playerWins('o')) {
        console.log(`${player_2.name} wins!`)
    }
    
})
//TODO: Player factory
function createPlayer(name) {
    // Player attributes
    this.name = name
    this.score = 0
    
    const increaseScore = () => {this.score++}
    return { name, score }
}
//TODO: Create playing grid with each cell having coordinates corresponding to gameboard array