//Convert all the strings to title caps in a string array

const titleCase = () => {
   let str = "happy birthday"
    str = str.split(" ")
        .map(([Char, ...rest]) => Char.toUpperCase() + rest.join("").toLowerCase()).join(" ")
    
    console.log(str)
}
titleCase();