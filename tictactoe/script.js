
//Logique plateau de jeu
import { Gameboard } from "./gameboard.js";

//Logique pour tester victoire
import { WinTester } from "./WinTester.js";

//Logique Jeu
import { Game } from "./Game.js";

//Modifier le Dom
import { DomModifier } from "./DomModifier.js";


//Button Commencement
const buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", play
);

//Status jeu dans le dom
const playerTurn = document.getElementById("playerTurn");

//Commencement parti après appui sur start
function play() {
    buttonStart.style.visibility = 'hidden';
    playerTurn.innerText = "Player1 Turn";
    DomModifier.getGameBoard().addEventListener("click", (e) => {
        var child = e.target;
        var index = Array.from(child.parentNode.children).indexOf(child);
        var x = Math.floor(index / 3);
        var y = index % 3;
        Game.play(x, y);
        playerTurn.innerText = Game.getTurn() + " turn";
        if (WinTester.winTest(Gameboard.getGameboard()))
            playerTurn.innerText = Game.getTurn() == "Player1" ? "Player2 won" : "Player1 won";
    })
}