let [lightdirectionx, lightdirectiony, lightdirectionz] = [0, 0, -1];

export function getLuminosity(nx, ny, nz) {
    let dotprod = -nz * lightdirectionz;
    if (dotprod >= 0) {
        // algo 1 using s
        return dotprod

        // also 2 using s2
        // return s2[bsCeil(s2luminosity, 0, s2.length - 1, dotprod)];
    } else {
        return 0
    }
}