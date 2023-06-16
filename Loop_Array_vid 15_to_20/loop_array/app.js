let num = [3,5,1,2,4]
for(let i=0; i<num.length;i++){
   console.log(num[i])
}


// Foreach

let k = [4,5,6,12,3,7,8,9,4,55555,44,]
k.forEach((Element)=>{
    console.log(Element*Element)
})

// Array .Form

let Name = "harry"
let arr = Array.from(Name)
console.log(arr)

//for of

let z =[11,12,13,14,5,16,17,18]
for(let item of z){
    console.log(item)
}

// for....in

let x =[4455,55,22,11,22,44,55,66,77,99]
for (let i in x){
console.log (i)
}