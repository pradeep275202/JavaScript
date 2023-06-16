let marks_class_12=[94,62,65,65,false,"notpresent"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12.length)
marks_class_12[6]=12
marks_class_12[0]=100
console.log(typeof marks_class_12)

// Array method 1
 let num = [1,2,3,4,,5,6]
let b = num.toString 
console.log(b, typeof b) //b is a now string

let c = num.join("and")
console.log(c,typeof c)

let r = num.pop() //pop returns the popped element
console.log(num,r)

let a = num.push(56) //push returns the new array lenght
console.log(num.a)

let d = num. shift()  //remove and element from the start of the array
console.log(num,d)

let e = num.unshift(78)
console.log(num,e)


