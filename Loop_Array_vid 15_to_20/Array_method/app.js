       // Dellete

let num =[1,2,3,4,5,6,7,8,9]
delete num [5]
console.log(num.length)

//concat

let a = [1,2,3,4,5,6,7,8,9]
let a_more =[11,12,13,14,15,16,17,,18,19]
let even_more = [211,212,213,214,215,216,217,218,219]
let newArray = num.concat(a_more,even_more)
console.log(newArray)
console.log(a,a_more)


// sort method ,Reverce

let compare = (a,b)=>{
    return b-a
}

let b = [551,22,3,14,5,6,7,8,229]
b.sort(compare)
console.log(b)


//splice and slice

let k =[551,55,22,33,44,66,12,1,2,3,4,]
k.splice(2,4,1021,1022,1023,1024,1025,)
console.log(k)

// slice
let l = [551,22,23,7,15,14,52,229]
let newNum = l.slice(3,7)
console.log(newNum)
