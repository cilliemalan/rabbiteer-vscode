
let a = 10;
let b = 20;

console.log('hello world');

//print some stuffs
printstuff((b - a) / 2);

function printstuff(cnt) {
    for (let i = 0; i < cnt; i++) {
        console.log(`hello world ${i}`);
    }
}
