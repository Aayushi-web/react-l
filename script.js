//loosely equality opeerator(== b/t ===)

// let age= 23
// console.log(age==="23")
// //type conversion
// let string ="54";
// console.log(string, typeof string)
// //number
// let number= Number(string)
// console.log(number, typeof number)
// let str= String(number)
// console.log(str, typeof str)
//arrays
let dishes=["biriyani","paratha","bhatut",""]
dishes[0]="roti"
console.log(dishes)
console.log(dishes[3])
console.log(dishes.join(","))
console.log(dishes.indexOf("roti"))
let newDishes=["sweet","roshogulla","pithe"]

updatedDishes=dishes.concat(newDishes)
console.log(updatedDishes)
console.log(updatedDishes.length)
//push method
console.log(updatedDishes.push("bhallay"))
console.log(updatedDishes)
console.log(updatedDishes.pop())
console.log(updatedDishes)
let email="mishraayushi66@gmail.com";
let boolean =email.includes("@");
console.log(boolean)

