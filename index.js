var cfjson=require('./fun-with-json.json');
const fs=require('fs');
const express = require('express');
const app=express();
const { append } = require('express/lib/response');
const port=8080;
// console.log(cfjson.result.length);
let num=cfjson.result.length;
cfjson.result.reverse();
// console.log(cfjson.result[0]);
let result=[];
for(let question of cfjson.result){
    // console.log(question.problem);
    let problem = question.contestId+question.problem.index+"   "+question.problem.name+"   "+question.problem.rating;
    if(result.indexOf(problem)===-1){
        result.push(problem);
    }
}
// result.sort();
console.log(result);
console.log("I am Steve Rogers");
app.get('/',(req,res)=>{
    res.json({data:result});
})
app.listen(port,(req,res)=>{
    console.log("Server chalu hai");
})