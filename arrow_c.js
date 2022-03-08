//Sum of all numbers in an array

const sum = () => {
    let arr = [100, 200, 300, 400, 500];
    let b=0;
    for (let i = 0; i < arr.length; i++)
    {
        b += arr[i];
    }
        console.log(b);
}
sum();