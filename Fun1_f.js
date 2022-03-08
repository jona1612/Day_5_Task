//Return median of two sorted arrays of same size

let a = [1, 6, 5, 4];
let b = [9, 7, 2, 6];

(() => {
const m = (a, b) => {
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half - 1]) / 2;
}

    console.log(m(a, b));
})();