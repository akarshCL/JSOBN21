// // // "Array declaration and initialization
// // // Accessing elements (indexing)
// // // length property
// // // Basic iteration with loops
// // // for of  loop
// // // push(), pop(), shift, unshift, splice()



// let fr1="Apple";
// let fr2="Banana"
// let fruits=["Apple","Banana","orange","pineapple","strawberry","mango"];
// // let fr={0:"Apple",1:"Banana",2:"Anaother"}

// // console.log(fruits[0]);
// // console.log(fruits[4]);
// // console.log(fruits[1])

// // console.log(fruits.length);
// // console.log(fruits[Math.floor(fruits.length/2)])
// // console.log(fruits[Math.floor(5/2)])

// let n=fruits.length-1
// for(let i=0;i<=n;i++){
//     console.log(fruits[i],"forword")
// }


// for(let i=n;i>=0;i--){
//     console.log(fruits[i],"reverse")
// }








// // Print all elements
// // Print last element
// // Find array length
// // Loop Practice
// // Sum of array
// // Find largest element
// // Count even numbers
// // Reverse print array
// // let array=[1,2,3,4,5]
// // let high=array[0]
// // for(let i=0;i<array.length;i++){

// //     if(array[i]>high){
// //         high=array[i]
// //     }
// // }
// [1,2,3,4,5]
// [2,4,5,6,7]


// find maximum , 2nd maximum, minmum, second minmum


// // Method Practice

// // Add elements using push
// // Remove using pop
// // Add at beginning using unshift
// // Remove first using shift





// for(let i=0;i<=n;i++){
//     console.log(fruits[i])
// }


// let arr=[1,2,43,4,5,6,67,6,6];
// [1,0,43,0,5,0,67,0,0]

// for(let res of arr){

//     console.log(res,"one by one")

// }

// arr[0]="akatsh"

// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//      arr[i]=0
//     }else{
//       arr[i]=1  
//     }
// }
// console.log(arr)

let arr=[1,2,3,345,5,5,55,5,5,5,56];
// // arr[arr.length]=4
let res=arr.push(4);
console.log(res,"push")
console.log(arr,"push")


let res2=arr.pop();
console.log(res2,"pop")
console.log(arr,"pop")

let res3=arr.unshift("akarsh");
console.log(res3,"unshift")
console.log(arr,"unshift")

let res4=arr.shift();
console.log(res4,"shift")
console.log(arr,"shift")


// function customPush(arr,n){
// arr[arr.length]=n
// }

// customPush(arr,4)

let arr=[1,2,3,2];
let arr2=[4,5,6,7,8];
// console.log(arr.concat(arr2))

let newarr=[]

for(let i=0;i<arr.length;i++){
    newarr[newarr.length]=arr[i]
    // newarr[i]=arr[i]
}


for(let i=0;i<arr2.length;i++){
     newarr[newarr.length]=arr2[i]
    //   newarr[i+arr.length]=arr2[i]
}
console.log(newarr)

// console.log(arr.indexOf(2),"hh");
// let target=2

// function customIndex(){
//      for(let i=0;i<arr.length;i++){
//      if(arr[i]==target){
//       console.log(i,"pp")
//       return;
//      }
//  }
// console.log(-1,"oo")
// }

// customIndex()

// function customPush(arr,n){
//     arr[arr.length]=n;
//     return arr.length;
    
// }

// console.log(customPush(arr,9))
// console.log(arr)

// function customPop(arr){
//     let result=arr[arr.length-1];
    
//         arr.length--
    
//     return result
    
// }

// console.log(customPop(arr))
// console.log(arr)