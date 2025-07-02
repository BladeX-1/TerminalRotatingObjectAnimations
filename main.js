import { getDonutPoints } from "./objects/donutPoints.js";
import { getEmptyBoard } from "./helper/emptyBoard.js";
import { linearMapping } from "./helper/linearMapping.js";
import { getPlatePoints } from "./objects/platePoints.js";
import { getTeapotPoints } from "./objects/teapotPoints.js";
import { printBoard } from "./helper/printBoard.js";
import { xrot, yrot, zrot } from "./helper/rotationMat.js";
import { delay } from "./helper/delay.js";
import { getCubePoints } from "./objects/cubePoints.js";
import { getLuminosityChar } from "./helper/luminosity.js";
import { clearScreen } from "./helper/clearScreen.js";

let pointsXYZ, normalXYZ, xmin, xmax, ymin, ymax;

[pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getDonutPoints(20, 30, 1, 1);

// [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getPlatePoints(2, 100);
// [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getCubePoints(2, 100);
// [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]] = getTeapotPoints();

let boardHeight = 100;
let boardWidth = 100;

for (let theta = 0; theta < Math.PI * 2; theta += 0.01) {
    let [board, zbuffer] = getEmptyBoard(boardHeight, boardWidth);
    for (let i = 0; i < pointsXYZ.length; i++) {
        let [x, y, z] = pointsXYZ[i];
        [x, y, z] = xrot(x, y, z, theta);
        [x, y, z] = yrot(x, y, z, 2 * theta);

        let [nx, ny, nz] = normalXYZ[i];
        [nx, ny, nz] = xrot(nx, ny, nz, theta);
        [nx, ny, nz] = yrot(nx, ny, nz, 2 * theta);

        let xi = linearMapping(xmin - 0.1, 0, xmax + 0.1, boardWidth - 1, x);
        let yi = linearMapping(ymin - 0.1, 0, ymax + 0.1, boardHeight - 1, y);
        try {
            if (zbuffer[yi][xi] == null || zbuffer[yi][xi] < z) {
                board[yi][xi] = getLuminosityChar(nx, ny, nz);
                zbuffer[yi][xi] = z;
            }
        } catch (TypeError) {
            console.log(zbuffer, yi, xi, x, y);
            throw TypeError;
        }
    }
    clearScreen();
    printBoard(board);
    await delay(10);
}
