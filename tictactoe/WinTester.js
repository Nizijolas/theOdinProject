export const WinTester = (function () {
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