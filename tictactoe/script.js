const Gameboard = (function(){
    var gameboard = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    return {
        player1Play:function(x, y){
            gameboard[x][y] = 'x';
        },
         player2Play:function(x, y){
            gameboard[x][y] = 'O';
        },
        printGame:function(){
            var string = "";
            for ( line of gameboard){
                for( column of line){
                    string += column == 0 ? '-' : column;
                }
                string +='\n';
            }
            console.log(string);
        }
    };
    
})();

Gameboard.printGame();
Gameboard.player1Play(0, 0);
Gameboard.printGame();
