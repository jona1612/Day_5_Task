//Sum of all numbers in an array

(() => {
    let arr = [10, 20, 30, 40, 50];
    let Sum = 0;
    for (let i = 0; i < arr.length; i++) {
        Sum += arr[i];
    }
    console.log(Sum);
})();