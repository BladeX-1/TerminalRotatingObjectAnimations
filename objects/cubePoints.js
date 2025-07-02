export function getCubePoints(sideLength, divisions) {
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
            pointsXYZ.push([x, y, sideLength / 2]);
            normalXYZ.push([0, 0, 1]);
        }
    }

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
            pointsXYZ.push([x, y, -sideLength / 2]);
            normalXYZ.push([0, 0, -1]);
        }
    }

    for (
        let y = -sideLength / 2;
        y < sideLength / 2;
        y += sideLength / divisions
    ) {
        for (
            let z = -sideLength / 2;
            z < sideLength / 2;
            z += sideLength / divisions
        ) {
            pointsXYZ.push([sideLength / 2, y, z]);
            normalXYZ.push([1, 0, 0]);
        }
    }

    for (
        let y = -sideLength / 2;
        y < sideLength / 2;
        y += sideLength / divisions
    ) {
        for (
            let z = -sideLength / 2;
            z < sideLength / 2;
            z += sideLength / divisions
        ) {
            pointsXYZ.push([-sideLength / 2, y, z]);
            normalXYZ.push([-1, 0, 0]);
        }
    }

    for (
        let x = -sideLength / 2;
        x < sideLength / 2;
        x += sideLength / divisions
    ) {
        for (
            let z = -sideLength / 2;
            z < sideLength / 2;
            z += sideLength / divisions
        ) {
            pointsXYZ.push([x, sideLength / 2, z]);
            normalXYZ.push([0, 1, 0]);
        }
    }

    for (
        let x = -sideLength / 2;
        x < sideLength / 2;
        x += sideLength / divisions
    ) {
        for (
            let z = -sideLength / 2;
            z < sideLength / 2;
            z += sideLength / divisions
        ) {
            pointsXYZ.push([x, -sideLength / 2, z]);
            normalXYZ.push([0, -1, 0]);
        }
    }

    let [xmin, xmax, ymin, ymax] = [
        -sideLength,
        sideLength,
        -sideLength,
        sideLength,
    ];
    return [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]];
}
