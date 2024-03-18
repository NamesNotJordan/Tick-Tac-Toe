function createGameBoard(){
    const gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]]
    
    const addToBoard = (thing) => gameBoard.push(thing)
    //TODO: Check board for every win condition
    const playerWins = (symbol) => {
        //Check lines for symbol
        for (let i = 0; i < gameBoard.length; i++) {
            // Check across
            if (gameBoard[i][0] == symbol && 
                gameBoard[i][1] == symbol && 
                gameBoard[i][2]== symbol) {
                    return true
            }

            // Check Col
            if (gameBoard[0][i]==symbol &&
                gameBoard[1][i] == symbol &&
                gameBoard[2][i] == symbol) {
                    return true
            }
        } 
        // Check Diagonals    
        if (gameBoard[0][0] == symbol &&
            gameBoard[1][1] == symbol &&
            gameBoard[2][2] == symbol) {
                return true
        }
        if (gameBoard[0][2] == symbol &&
            gameBoard[1][1] == symbol &&
            gameBoard[2][0] == symbol) {
                return true
        }
    }
    return {gameBoard}
}
//TODO: displayControl
//TODO: Player factory
function createPlayer() {
    // Player attributes
    return { }
}
