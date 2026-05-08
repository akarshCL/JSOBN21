// // // Check whether a number is positive, negative, or zero. done
// // // Find greatest among 3 numbers using nested if. done
// // // Check whether a person can vote and has voter ID.  done
// // // Create a simple login system.   done
// // // Check whether a number is divisible by both 3 and 5. 
// // // Create a grading system using nested if-else.


// // 91 and above A ,, 81-90 B, 71-80, c , 61-70 D and 60 below fail.
// // // Check leap year.
// // // Create ATM withdrawal logic.
// // // Check if a character is uppercase or lowercase.
// // // Find smallest among 3 numbers.


// // // // Create a simple login system.

// // let userName="admin";
// // let userPass="Ak123";


// // if(userName==="admin"){
// //    console.log("username match")
// // }
// // else if(userPass==="Ak123"){
// // console.log("welcome to the dashboard")
// // }else{
// //         console.log("user password is wrong")
// // }



// // // Create ATM withdrawal logic.
// // let success=true
// // if(success===true){
// // console.log("u won")
// // }

// // if(true==false){
// //     console.log("true")
// // }
// // else if(5<0){
// // console.log("another task")
// // }
// // else if(10==="10"){
// // console.log("last task")
// // }else{
// // console.log("some error occure")
// // }


// admin !== admin
// if (userName !== "admin") {
//     console.log("userName is invalid")
// }
// else {
//     if (userPass === "Ak123") {
//         console.log("welcome to the dashboard")
//     } else {
//         console.log("user password is wrong")
//     }
// }



// // // Find greatest among 3 numbers using nested if.

// let a = 10;
// let b = 200;
// let c = 30;

// if (a > b) {
//     if (a > c) {
//         console.log("A is greatest")

//     } else {
//         console.log("c is greatest")
//     }
// } else {
//     if (b > c) {
//         console.log("b")
//     } else {
//         console.log("c")
//     }
// }



// leap year? 4 100 400
let leap =2028;
if(leap%4==0){
    if(leap%100!==0){
        console.log("leap year")
    
    }else if(leap%400===0){
        console.log("its a leap year")}
        else{
    console.log("its not a leap year")
        }
}else{
    
  console.log("its not a leap year")

}