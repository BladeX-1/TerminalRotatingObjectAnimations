// import Math from "Math";

export function printBoardCanvas(board,ctx){
    let ylen = board.length;
    let xlen = board[0].length;

    let xgrad = (600/xlen)
    let ygrad = (600/ylen)

    for(let y=0;y<ylen;y++){
        for(let x=0;x<xlen;x++){
            let luminosity = Math.floor(board[y][x]*255)
            ctx.fillStyle = "rgb("+luminosity+' '+luminosity+' '+luminosity+")"
            ctx.fillRect(Math.floor(y*ygrad),Math.floor(x*xgrad),3,3)
        }
        // console.log()
    }
}