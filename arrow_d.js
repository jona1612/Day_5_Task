//Return all the prime numbers in an array

const prime = () => {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let b = [];
    const fun = function () {
        for (var n of a) {
            let c = 0;
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    c = 1;
                    break;
                }
            }
            if (c == 0) {
                b.push(n)
            }
        }
        return b
    }
        (a)
    console.log(fun);
}
prime();