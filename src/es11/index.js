const buttom = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});


const aBigNumber = 9007195874147515n;
const anotherBigNumber = BigInt(9007195874147515);
console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((reslove,reject) => reject("reject"));
const promise2 = new Promise((reslove,reject) => reject("resolve"));
const promise3 = new Promise((reslove,reject) => reject("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]);
    .then (Response => console.log(Response));

console.log(window);
console.log(globalThis);

const fooo = null
