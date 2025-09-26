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


export { Gameboard };