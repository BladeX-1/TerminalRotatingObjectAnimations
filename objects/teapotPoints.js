import fs from "fs";

export function getTeapotPoints() {
    let pointsXYZ = [];
    let normalXYZ = [];

    let data = fs.readFileSync("objects/teapot_bezier2.tris", "utf8");
    data = data.split("\n");
    let triangleCount = data[0];
    for (let i = 1; i < data.length - 1; i += 4) {
        let [x1, y1, z1] = data[i].split(" ");
        let [x2, y2, z2] = data[i + 1].split(" ");
        let [x3, y3, z3] = data[i + 2].split(" ");

        x1 = Number(x1);
        y1 = Number(y1);
        z1 = Number(z1);

        x2 = Number(x2);
        y2 = Number(y2);
        z2 = Number(z2);

        x3 = Number(x3);
        y3 = Number(y3);
        z3 = Number(z3);

        let [x, y, z] = [
            (x1 + x2 + x3) / 3,
            (y1 + y2 + y3) / 3,
            (z1 + z2 + z3) / 3,
        ];

        let [nx, ny, nz] = [
            (y2 - y1) * (z3 - z1) - (z2 - z1) * (y3 - y1),
            (z2 - z1) * (x3 - x1) - (x2 - x1) * (z3 - z1),
            (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1),
        ];

        pointsXYZ.push([x, y, z]);

        let normalLength = Math.sqrt(nx * nx + ny * ny + nz * nz);
        normalXYZ.push([
            nx / normalLength,
            ny / normalLength,
            nz / normalLength,
        ]);
        if (Number.isNaN(x)) {
            console.log("hello");
        }
    }

    let [xmin, xmax, ymin, ymax] = [10000, -10000, 10000, -10000];

    for (let i = 0; i < pointsXYZ.length; i++) {
        let [x, y, z] = pointsXYZ[i];

        if (x < xmin) {
            xmin = x;
        }
        if (y < ymin) {
            ymin = y;
        }

        if (x > xmax) {
            xmax = x;
        }
        if (y > ymax) {
            ymax = y;
        }
    }
    console.log(xmin, xmax, ymin, ymax);
    // process.exit();
    return [pointsXYZ, normalXYZ, [-3.5, 3.5, -3.5, 3.5]];
    return [pointsXYZ, normalXYZ, [xmin, xmax, ymin, ymax]];
}
