function hideString(str) {
    return str.replace(/[a-zA-z]/g, "*");
}

var hidden = hideString("Hello World");
console.log(hidden);
console.log("end");