//Rotate an array by k times

let a = [1, 3, 4, 5, 7];
let k = [2];

(() => {
    const arr = (a, k) => {
        for (let i = 0; i < k; i++) {
            a.unshift(a.pop());
        }
        return a;
    }
    console.log(arr(a, k));

})();