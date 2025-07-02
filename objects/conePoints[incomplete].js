export function getPlatePoints(
    radius,
    height,
    radiusdivisions,
    heightdivisions
) {
    let pointsXYZ = [];
    let normalXYZ = [];

    //base
    for (let r = 0; r < radius; r += radius / radiusdivisions) {}

    let [xmin, xmax, ymin, ymax] = [
        -sideLength / 2,
        sideLength / 2,
        -sideLength / 2,
        sideLength / 2,
    ];
    return [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]];
}
