const sort_letters = function (letter) {

    const str = letter.split("").sort().join("");
    return str;

}

console.log(sort_letters("webmaster"));