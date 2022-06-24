let obj1 = {
    name : "ABC",
    address : {
        country : "India",
        state : {
            city : "Delhi",
            Pincode : "110001"
        }
    }
}

// let obj2 = obj1  //copy
let obj2 = {...obj1,address:{...obj1.address,state:{...obj1.address.state}}}
obj1.name = "PQR"
// console.log(obj1);
// console.log(obj2);


obj1.address.country = "England"
obj1.address.state.Pincode = "201005"
console.log(obj1);  
console.log(obj2);
