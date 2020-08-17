const cluster = require("cluster");
const http = require("http");
const os = require("os");
const { child_process } = require('child_process');

let arr = [2,9,1,4];

 const tempfun = (num) => {
    let sum = 0;
    let last = arr[0];
    for(let i=1;i < arr.length;i++){
        sum = last + arr[i];
        if(sum === num){
            return `numbers are :: ${last}  ${arr[i]}`;
        }
        last = arr[i];
    }
}

console.log(tempfun(10));
