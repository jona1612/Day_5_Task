//Convert all the strings to title caps in a string array

(() => {
    let str = "in the begining god created the heavens and the earth"
    str = str.split(" ")
        .map(([Char, ...rest]) => Char.toUpperCase() + rest.join("").toLowerCase()).join(" ")
    
    console.log(str)
    
})();