function hideString(str, fdone) {
    fdone(str.replace(/[a-zA-z]/g, "*"));
}

hideString("Hello World", (hidden) => { 
    console.log(hidden);
  });
console.log("end");