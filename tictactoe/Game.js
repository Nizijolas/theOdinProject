export const Game = (function () {
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