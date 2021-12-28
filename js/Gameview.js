export default class Gameview{
     constructor(){
         
     }
     updateBoard(game){
         this.updateTurn(game);
         const winningCombination=game.findWinningCombination();
        for(let i=0;i<game.board.length;i++){
            let tile=document.querySelector(`.board-tile[data-index='${i}']`)
            tile.textContent=game.board[i];

            let tiletype=game.board[i]=='X' ? "tile-x": "tile-o";
            tile.innerHTML=`<span class="${tiletype}">${game.board[i]?game.board[i]:""}</span>`
            tile.classList.remove("winner")
            if(winningCombination&&winningCombination.includes(i)){
                tile.classList.add("winner")
            }

        }
        
     }
     updateTurn(game){
        let playerX=document.querySelector(".player-x");
        let playerO=document.querySelector(".player-o");
        playerO.classList.remove('active');
        playerX.classList.remove('active');

        if(game.turn=="X"){
        playerX.classList.add('active');
     }else{
         playerO.classList.add('active');
     }
 }
}