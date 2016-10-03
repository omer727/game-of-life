    'use strict';

    var Settings = {
        ROWS_MAX: 200,
        COLS_MAX: 400,
        BOARD_ROWS: 400,
        BOARD_COLS: 800,
        get CELL_WIDTH() {
            return this.BOARD_COLS / this.COLS_MAX;
        },
        get CELL_HEIGHT() {
            return this.BOARD_ROWS / this.ROWS_MAX;
        },

    };


    var Board = function() {


        this.isEmpty = function(boardArray, r, c) {
            if (boardArray[r]) {
                var rowArray = boardArray[r];

                if (rowArray.indexOf(c) != -1) {
                    console.log('not empty:' + c + ' ' + r);
                    return false;
                }
            }
            return true;
        }

        this.draw = function(boardArray) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            // ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;

            for (var r = 0; r < Settings.ROWS_MAX; r++) {
                for (var c = 0; c < Settings.COLS_MAX; c++) {

                    if (!this.isEmpty(boardArray, r, c)) {
                        console.log('Cell=' + Settings.CELL_WIDTH);
                        console.log('Cell=' + Settings.CELL_HEIGHT);
                        console.log('Cell=' + Settings.CELL_WIDTH);
                        console.log('Cell=' + Settings.CELL_WIDTH);

                        ctx.strokeRect(c * Settings.CELL_WIDTH, r * Settings.CELL_HEIGHT, Settings.CELL_WIDTH, Settings.CELL_HEIGHT);
                        // ctx.strokeRect(c * CELL_WIDTH, r * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
                    }
                }
            }
            ctx.stroke();

        }



    }


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