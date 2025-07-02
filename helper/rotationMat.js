export function xrot(x, y, z, theta) {
    let sinT = Math.sin(theta);
    let cosT = Math.cos(theta);
    return [x, y * cosT - z * sinT, y * sinT + z * cosT];
}

export function yrot(x, y, z, theta) {
    let sinT = Math.sin(theta);
    let cosT = Math.cos(theta);
    return [x * cosT + z * sinT, y, -x * sinT + z * cosT];
}

export function zrot(x, y, z, theta) {
    let sinT = Math.sin(theta);
    let cosT = Math.cos(theta);
    return [x * cosT - y * sinT, x * sinT + y * cosT, z];
}
