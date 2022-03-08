//Print odd numbers in an array

const odd = () => {
    let a = [1, 2, 3, 5, 8, 7, 9, 10, 11];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
};
odd();