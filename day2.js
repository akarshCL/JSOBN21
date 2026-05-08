// // // // /* swap 
// // // // a variable
// // // //  using third 
// // // //  variable
// // // //  */

// // // //  let a=10;  //20 // 30
// // // //  let b=20;  //10

// // // //  // a= 20
// // // // //  //b =10

// // // // //  let temp=a; //10
// // // // //   a=b // 20
// // // // //   b=temp

// // // // //   console.log(a,b)

// // // // //   let 

// // // // // a=a+b // 30;  10+20=30
// // // // // b= a-b // b=30-20=10 
// // // // // a=a-b //30-10=20


// // // // console.log(b,a)

// // // let num=2;
// // // let num2=3;
// // // let num3=40;


// // // console.log ((num+num2)*num3)
// // // console.log (num+(num2*num3))
// // // console.log ((num+num2)*num3)
// // // console.log(num**num2)
// // // console.log(num*num)

// // // console.log(2*4/2)//4


// // // console.log((5**2 - 3**2) /2)


// // // console.log(10-2**2*3+1)
// // // // 10-4*3+1
// // // // 10-12+1
// // // // -2+1
// // // // -1


// // // let number=16// 15
// // // number=15
// // // number=number+5 // 15+5
// // // number += 6
// // // number -= 5
// // // number= number-5

// // // console.log(number)//20 //16


// // // //61. 16

// // // let obj={
// // //     key:value
// // // }

// // // obj.key

// // let marks=5.4578375263 //5
// // // console.log(Math.round(marks))
// // console.log(Math.floor(marks))
// // // console.log(Math.ceil(marks))

// // console.log( parseInt("-5.4px"))
// // console.log(  parseFloat("-4.6psdfyt"))

// // // .toFixed()
// // console.log( typeof marks.toFixed())

// // console.log(Math.pow(10,2))

// // let num=Infinity
// // console.log(1/0)
// let data= Math.random() * (15-5) + 6;
// console.log(data.toFixed(8), typeof data)
// console.log(Math.floor(data))
// console.log(Math.sqrt(6454))
// console.log(Math.cbrt(9))
// console.log(Math.abs(234.987654))



// console.log(Math.random()) //0>1
// console.log(Math.random() * 4 + 6 ) // 6> 16

let number=67;
let result= number%10;
let firstDigit=Math.floor(number/10)
let rev=0;
rev=result * 10  + firstDigit 
console.log(rev);