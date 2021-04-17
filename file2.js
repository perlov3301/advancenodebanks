function fdelay(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

console.log("starting delays");
fdelay(2, () => {
    console.log("two seconds");
    fdelay(1, () => {
        console.log("another (third) second");
        fdelay(1, () => {
            console.log("again another (fourth) second");
        });
    });
});