
// Logique GameBoard
const Gameboard = (function () {
    var gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    return {
        player1Play: function (x, y) {
            gameboard[x][y] = 'x';
        },
        player2Play: function (x, y) {
            gameboard[x][y] = 'O';
        },
        printGame: function () {
            var string = "";
            for (line of gameboard) {
                for (column of line) {
                    string += column == 0 ? '-' : column;
                }
                string += '\n';
            }
            console.log(string);
        },
        isPlayable: function (x, y) {
            return gameboard[x][y] === 0;
        },
        setBack: function () {
            gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        },
        getGameboard: function () {
            return gameboard;
        }
    };

})();

//Logique Jeu



const WinTester = (function () {
    return {
        winTest: function (gameboard) {
            for (let i = 0; i < 3; i++) {
                console.log("voici i 0    " + gameboard[i][0]);
                if (gameboard[i][0] != 0) {
                    if ((gameboard[i][0] == gameboard[i][1]) && (gameboard[i][1] == gameboard[i][2]))
                        return true;
                }
                if (gameboard[0][i] != 0) {
                    console.log((gameboard[0][i] == gameboard[1][i]) && (gameboard[1][i] == gameboard[2][i]));
                    if ((gameboard[0][i] == gameboard[1][i]) && (gameboard[1][i] == gameboard[2][i]))
                        return true;
                }
            }
            if ((gameboard[0][0] != 0) && (gameboard[0][0] == gameboard[1][1]) && (gameboard[1][1] == gameboard[2][2]))
                return true;
            else if ((gameboard[0][2] != 0) && (gameboard[0][2] == gameboard[1][1]) && (gameboard[1][1] == gameboard[2][0]))
                return true;

            return false;
        }
    }
})();

const DomModifier = (function () {
    var GameBoard = document.getElementById("cadre");
    return {
        player1: function (x, y) {
            GameBoard.children[x * 3 + y].innerText = 'X';
        },
        player2: function (x, y) {
            GameBoard.children[x * 3 + y].innerText = '0';
        },
        setBack: function () {
            for (e of GameBoard.children) {
                e.innerText = '';
            }
        },
        getGameBoard: function () {
            return GameBoard;
        }
    }
})(document);





const Game = (function () {
    var turn = "Player1";
    var hasStarted = false;
    return {

        nextTurn: function () {
            turn = turn == "Player1" ? "Player2" : "Player1";
        },
        getTurn: function () {
            return turn;
        },
        play: function (x, y) {
            if (Gameboard.isPlayable(x, y)) {
                if (turn == "Player1") {
                    Gameboard.player1Play(x, y);
                    DomModifier.player1(x, y);
                }
                else {
                    Gameboard.player2Play(x, y);
                    DomModifier.player2(x, y);
                }

            }
            this.nextTurn();
        }
    };
}
)(Gameboard, DomModifier);

const buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", play
);

const playerTurn = document.getElementById("playerTurn");

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