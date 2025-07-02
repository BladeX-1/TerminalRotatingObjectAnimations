export function getEmptyBoard(boardHeight, boardWidth) {
    let board = [];
    let zbuffer = [];
    for (let i = 0; i < boardHeight; i++) {
        board.push([]);
        zbuffer.push([]);
        for (let j = 0; j < boardWidth; j++) {
            board[i].push(null);
            zbuffer[i].push(null);
        }
    }
    return [board, zbuffer];
}
