//Remove duplicates from an array

(() => {
    let arr = ['A', 'B', 'A', 'C', 'B', 'D', 'G', 'D', 'E'];
    let dup = arr.filter((c, i) => {
        return arr.indexOf(c) !== i;
    });
    console.log(dup);
})();