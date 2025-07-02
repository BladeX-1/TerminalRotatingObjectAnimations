export function linearMapping(x1, y1, x2, y2, i) {
    return Math.round(((i - x1) * (y2 - y1)) / (x2 - x1) + y1);
}
