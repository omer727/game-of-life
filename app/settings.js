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