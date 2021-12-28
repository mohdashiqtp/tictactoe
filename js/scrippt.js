import Game from './Game.js';
import Gameview from './Gameview.js'


let game=new Game();
let Gamevie=new Gameview();


document.querySelector(".restart").addEventListener("click",()=>{
     newGame();
})



let tiles=document.querySelectorAll(".board-tile");
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i);
    Gamevie.updateBoard(game);
    
    

}

function newGame(){
   game=new Game();
   Gamevie.updateBoard(game)
}
Gamevie.updateBoard(game)