export function getPlatePoints(sideLength, divisions) {
    let pointsXYZ = [];
    let normalXYZ = [];

    for (
        let y = -sideLength / 2;
        y < sideLength / 2;
        y += sideLength / divisions
    ) {
        for (
            let x = -sideLength / 2;
            x < sideLength / 2;
            x += sideLength / divisions
        ) {
            pointsXYZ.push([x, y, 0]);
            normalXYZ.push([0, 0, 1]);
        }
    }
    let [xmin, xmax, ymin, ymax] = [
        -sideLength / 2,
        sideLength / 2,
        -sideLength / 2,
        sideLength / 2,
    ];
    return [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]];
}
