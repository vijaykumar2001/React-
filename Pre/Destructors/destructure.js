let arr = ["Hello", "I", "am", "awesome"]
            // 0     1     2      3

// let a = arr[0];
// let b = arr[1];
// console.log(a);  //Hello
// console.log(b);   //I

// Destructing

// let [a,b,c,d] = arr;
// console.log(a,b,c,d);

// let [p, , ,r,s="okay"] = arr;
// console.log(p,r,s);


//objects

let obj = {
    name : "Paul",
    city : "Delhi",
    age : "30"
}

let {name,city,age} = obj
console.log(name,city,age);