//Return all the palindromes in an array

(() => {
    var arr = ["noon", "food", "book", "level", "mom"];
    for (i = 0; i < arr.length; i++) {
        var b = arr[i].split("").reverse().join("")
        if (arr[i] == b)
            console.log(arr[i])
    }
})();