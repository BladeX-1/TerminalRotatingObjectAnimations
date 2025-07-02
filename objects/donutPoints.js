import { zrot } from "../helper/rotationMat.js";

export function getDonutPoints(
    crossAngleDivision,
    outerAngleDivision,
    holeRadius,
    crossRadius
) {
    let pointsXYZ = [];
    let normalXYZ = [];

    let dtheta = (2 * Math.PI) / outerAngleDivision;
    let dphi = (2 * Math.PI) / crossAngleDivision;

    for (let phi = 0; phi < 2 * Math.PI; phi += dphi) {
        let xtemp = holeRadius + crossRadius + Math.cos(phi) * crossRadius;
        let ztemp = Math.sin(phi) * crossRadius;
        let [nx, ny, nz] = [Math.cos(phi), 0, Math.sin(phi)];
        for (let theta = 0; theta < 2 * Math.PI; theta += dtheta) {
            let x = xtemp * Math.cos(theta);
            let y = xtemp * Math.sin(theta);
            let z = ztemp;

            pointsXYZ.push([x, y, z]);
            normalXYZ.push(zrot(nx, ny, nz, theta));
        }
    }
    let [xmin, xmax, ymin, ymax] = [
        -holeRadius - 2 * crossRadius,
        holeRadius + 2 * crossRadius,
        -holeRadius - 2 * crossRadius,
        holeRadius + 2 * crossRadius,
    ];
    return [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]];
}
