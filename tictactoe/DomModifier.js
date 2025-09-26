export const DomModifier = (function () {
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