import {add} from './calculate'
const a = 1;
const b = 2;
console.log(add(a,b));

const list = [1,2,3,4,5]
const transform = list.map(v=>v*2)
console.log(transform);


const promise = new Promise((resolve)=>{
    setTimeout(() => {
        resolve()
    }, 1000);
})
console.log(promise);

console.log(`123`.includes(`1`));