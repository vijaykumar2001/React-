let arr = [1,2,3]

// let arr2 = arr;

let arr2 = [...arr]

arr.push(4)
arr2.push(5)
console.log(arr) //1,2,3
console.log(arr2); //1,2,3 
