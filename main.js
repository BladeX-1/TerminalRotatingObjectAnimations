import { getDonutPoints } from "./objects/donutPoints.js";
import { getEmptyBoard } from "./helper/emptyBoard.js";
import { linearMapping } from "./helper/linearMapping.js";
import { getPlatePoints } from "./objects/platePoints.js";
// import { getTeapotPoints } from "./objects/teapotPoints.js";
import { printBoardCanvas } from "./helper/printBoardCanvas.js";
import { xrot, yrot, zrot } from "./helper/rotationMat.js";
import { delay } from "./helper/delay.js";
import { getCubePoints } from "./objects/cubePoints.js";
import { getLuminosity } from "./helper/getLuminosity.js";
import { clearScreenCanvas } from "./helper/clearScreenCanvas.js";
import { getTeapotPoints } from "./objects/teapotPoints2.js";
import {clearScreen} from "./helper/clearScreen.js"
import {printBoard} from "./helper/printBoard.js"
import { getLuminosityChar } from "./helper/getLuminosityChar.js";

let mode;
try{
    document.getElementById
    mode = 'web'
}
catch(err){
    if(err instanceof ReferenceError){
        mode = 'terminal'
    }
    else{
        throw ReferenceError;
    }
}

let ctx;
if(mode == 'web'){
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}


let pointsXYZ, normalXYZ, xmin, xmax, ymin, ymax;

// [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getDonutPoints(530, 530, 1, 1);

// [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getCubePoints(2, 200);
[pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getTeapotPoints();

let boardHeight = 100;
let boardWidth = 100;

let a = 50;
let b = 100;

function updateAB(ev) {
    a = (ev.clientX - 1366 / 2)/100;
    b = (ev.clientY - 768 / 2)/100;
}

// window.addEventListener('mousemove', updateAB)

while (true) {

    for (let theta = 0; theta < Math.PI * 2; theta += 0.02) {
        let [board, zbuffer] = getEmptyBoard(boardHeight, boardWidth);
        for (let i = 0; i < pointsXYZ.length; i++) {
            let [x, y, z] = pointsXYZ[i];
            [x, y, z] = xrot(x, y, z, theta);
            [x, y, z] = yrot(x, y, z, 2 * theta);

            let frac = 1;
            // frac = (z + a) / (z + a + b)
            x *= frac
            y *= frac


            let [nx, ny, nz] = normalXYZ[i];
            [nx, ny, nz] = xrot(nx, ny, nz, theta);
            [nx, ny, nz] = yrot(nx, ny, nz, 2 * theta);

            let xi = linearMapping(xmin - 0.1, 0, xmax + 0.1, boardWidth - 1, x);
            let yi = linearMapping(ymin - 0.1, 0, ymax + 0.1, boardHeight - 1, y);

            if (0<=yi && yi < board.length && 0<=xi && xi < board[0].length) {
                if (zbuffer[yi][xi] == null || zbuffer[yi][xi] < z) {
                    if(mode=='web'){
                        board[yi][xi] = getLuminosity(nx, ny, nz);
                    }
                    else if(mode=='terminal'){
                        board[yi][xi] = getLuminosityChar(nx,ny,nz);
                    }
                    
                    zbuffer[yi][xi] = z;
                }
            }
        }
        
        if(mode == 'web'){

            clearScreenCanvas(ctx);
            printBoardCanvas(board, ctx);
        }
        else if (mode == 'terminal'){

            clearScreen();
            printBoard(board);
        }

        await delay(10);
    }

}