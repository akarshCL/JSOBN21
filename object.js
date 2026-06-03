// // // // 1. `let obj = { a: 1, b: 2 };` isme `c: 3` add karke final object likho.
// // // // 2. `let obj = { "full name": "A B" };` isme value access karne ka correct code likho.
// // // // 3. `let key = "age"; let user = { name: "X" };` dynamic key se `age: 20` add karo.
// // // //{name: "X",age: 20}

// // // // 5. Dot notation kab fail ho sakta hai? Ek example do.
// // // // 6. `delete` use karke `{ a: 1, b: 2 }` se `b` remove karo.

// // // // delete 

// // // let objectdata={name:"X"}
// // // let key ="age"
// // // objectdata[key]=20; // objectdata[age]=20
// // // console.log(objectdata,"objectdata")




// // // // 7. `{ x: 10, y: 20 }` me `Object.keys()` ka output kya hoga?
// // // // 8. `{ x: 10, y: 20 }` me `Object.values()` ka output kya hoga?





// // // let arr=[1,2,3,4]
// // // console.log(arr[4])


// // // // what are objects?  JS me Objects are non Premitive data type. which basically store the key value pairs mei data store kerta hai.
// // // // let a=10;
// // // // let names="kjshdgz"
// // // let obj={
// // // "number":10,
// // // "name":"Virat",
// // // "champ":"2Times",
// // // "played":true,
// // // "Fullname":"Akarsh gupta"
// // // }

// // // obj.isAdmin="Harsh"
// // // delete obj
// // // console.log(obj)




// // // // obj.number=40;
// // // // obj["FullName"]="Sanju"// u can add// u can update as well 
// // // // console.log(obj,"obj")// by using Dot Notation > means> obj.name
// // // // console.log(obj.names)// Dot Notation
// // // // console.log(obj["name"],"by using bracket Notation")
// // // // console.log(obj[names],"by using bracket Notation")// obj["kjshdgz"]
// // // // console.log(obj["Full name"],"full name")


// // // Array.indexOf
// // // let n="name"
// // // let obj={
// // //     name:"Umar",
// // //     age:100,
// // //     mob:100,
// // //     address:"Police station",
// // //     add:function(){
// // //         console.log(10+20)
// // //     }
// // // }

// // let obj2={
// //     name:"Umar",
// //     age:100,
// //     mob:100,
// //     address:"Police station",
// //     add:function(){
// //         return "hello"
// //         // console.log(10+20)
// //     },
// //     addressd:{
// //        house1:{
// //         plot:12345,
// //         street:"kjhgfd",
// //         pincode:202797,
// //         country:"india"
// //        } ,
// //         house2:{
// //         plot:12345,
// //         street:"kjhgfd",
// //         pincode:202797,
// //         country:"US"
// //        } 
// //     }
// // }
// // // console.log(obj2.addressd.house2.plot,"kjhgfd")

// // // console.log(Object.keys(obj2.age),"pp")
// // console.log(obj2.add())

// // // let keysData=Object.keys(obj);
// // // console.log(keysData)

// // // for(let k of keysData){
// // //    console.log( obj[k])// obj["name"]//obj[age]
// // // }


// // // for(let d in obj){
// // //     console.log(obj[d])
// // // }
// // // let dynamicKey="Object2class"
// // // let dynamicKey2="Object2class"
// // // let value="dynamic data we are appending"
// // // let value2="dynamic data we are appending"


// // // // obj.addressss="kjhgfds";
// // // // obj[dynamicKey]=value//
// // // // obj[dynamicKey2]=value2//
// // // // delete obj.address

// // // // console.log(obj)

// // // // let data=Object.keys(obj);
// // // // let data2=Object.values(obj);
// // // // console.log(data,"keys")
// // // // console.log(data2,"keys2")



// // array of objects.

// let userData=[
//     {
//         roleNo:1,
//         Name:"Kasuhal",
//         Address:"UP",
//         MobNo:9876543211
//     },
//     {
//         roleNo:2,
//         Name:"Harsh",
//         Address:"DLF Mall",
//         MobNo:100
//     },
//     {
//         roleNo:21,
//         Name:"Harsh",
//         Address:"D-69",
//         MobNo:98765434567765456
//     },
//      {
//         roleNo:21,
//         Name:"uytf",
//         Address:"D-69",
//         MobNo:98765434567765456
//     },
//     {
//         roleNo:6,
//         Name:"Arif",
//         Address:"Noida",
//         MobNo:101
//     },
//     {
//         roleNo:3,
//         Name:"Arif",,
//         Address:"GIO",
//         MobNo:9876545
//     }
// ]
// let result={};
// for(let singleData of userData){
//     // console.log(singleData.roleNo==3,"singleData")
//     result[userData[singleData]]=userData[singleData]
//     console.log(result[userData[singleData]])
// //    if(userData[singleData])
// }


// let [a,s,d,g,...sd]=[{1},2,3,4,5,6,7,8,98,[{6:"h"},{9:"
//     h"},{9},0]]

let dataa={
    a:"sd",
    b:"sf"
}
let {a,asdfadf}={...dataa};
console.log(a,b)
// let d={...dataa};
