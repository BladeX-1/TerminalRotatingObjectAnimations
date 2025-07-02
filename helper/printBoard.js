export function printBoard(board) {
    let s = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== null) {
                s += board[i][j] + board[i][j];
            } else {
                s += " " + " ";
            }
        }
        s += "\n";
    }
    console.log(s);
}
