
const fxn = ()=>{
    console.log("Answer here")
}
const obj =  {ques : fxn,  name:"bhaskar"}
const {ques,name} = obj


console.log(ques())