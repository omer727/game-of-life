    'use strict';


    function Game() {

        var board = new Board();

        var boardArray = {
            0: [0, 1, 2, 3],
            1: [0, 1, 2, 3],
            3: [3]
        };
        console.dir(board)
        board.draw(boardArray);

    }