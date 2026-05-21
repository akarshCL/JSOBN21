// // // // // scopes in JS
// // // // // Global scope
// // // // // Local scope
// // // // // Block scope
// // // // // Function scope

// // // // // TDZ
// // // // // hoisting





// // // // // let a=20;

// // // // // function abc(){
// // // // //     a=30;
// // // // //     console.log(a,"a");
// // // // // }
// // // // // console.log(a,"outside");
// // // // // abc()
// // // // // console.log(a,"later");

// // // // // global is b=30// 60 //40


// // // // // let b=30;
// // // // // console.log(b) //30
// // // // // function xyz(){
    
// // // // //     // b=40;
 
// // // // //     console.log(b)//30
// // // // // }
// // // // // xyz(); 
// // // // // b=50;
// // // // // console.log(b); //50
// // // // // b=90
// // // // // console.log(b);//90

// // // // // ---------function scope-----------

// // // // // let b=30;
// // // // // console.log(b) //30
// // // // // function xyz(){
  
// // // // //     let a=90;
// // // // //     console.log(b)//40
// // // // //     console.log(a)//90
// // // // // }
// // // // // xyz(); 

// // // // // console.log(b);//30
// // // // //  console.log(a);





// // // // // function xyz(){
// // // // //     console.log(b);
// // // // // }
// // // // // xyz();
// // // // // let b=40;


// // // // // if(true){
// // // // //     console.log(b);
// // // // //     let b=60;
// // // // //     console.log(b);
// // // // // }

// // // // // console.log(b);

// // // // // console.log(a);
// // // // // var a=10;


// // // // // var a;
// // // // // console.log(a);
// // // // // a=10;
// // // // // console.log(b);
// // // // // var b=10;



// // // // // let a=10;
// // // // // console.log(a);

// // // // // let a;
// // // // // console.log(a);
// // // // // a=10;

// // // // // tdz start
// // // // // let a;
// // // // // console.log(a);
// // // // // a=30;
// // // // // tdz stop


// // // // // console.log(a);
// // // // // var a=10

// // // // // var a=undefined


// // // // // abc();
// // // // // function abc(){
// // // // //     console.log("hello")
// // // // // }

// // // // // xyz();

// // // // // var xyz=function(){
// // // // //     console.log("hello iam another function")
// // // // // }



// // // // abc();


// // // // function abc(){
// // // //     console.log(a);
// // // //     var a=10;
// // // // }

// // // // function abc(){
// // // //     a=90;
// // // // }

// // // // let a=10;
// // // // if(a==10){
// // // //     var a=40;
// // // //      abc();

// // // //     console.log(a);
// // // // }
// // // // console.log(a);


// // // function abc(){
// // //     a=90;
// // // }
// // // let a=10;
// // // function xyz(){
// // //     var a=40;
// // //     if(true){
// // //         var a=80;
// // //         abc()
// // //         console.log(a,"if") //80
// // //     }
// // //     console.log(a,"hh");
// // // }
// // // xyz();
// // // abc();
// // // console.log(a,"pp");




// // // // unit 430;
// // // 430=> 30*10
// // // 400 
// // // 301-400=>100*6
// // // 300

// // // 200*5=1000+630\
// // let n=10

// // if(n==10){

// // }else if(n=="10"){

// // }else if(n===10){

// // }

// // if(n==10){

// // }
// //  if(n=="10"){

// // }
// //  if(n===10){

// // }


// let unit =770;
// let bill=0;

// if(unit>400){
//     bill= bill+(unit-400)*10;
// unit=400;
// }

// if(unit>300 && unit<400){
//     bill=bill+(unit-300)*6;
//     unit=300;
// }

// if(unit>100&&unit<300){
//      bill=bill+(unit-100)*5;
//     unit=100;

// }
// if(unit<=100){
//  bill=bill+(unit)*4;
   
// }
// console.log(bill)


let n=5;

// *
// **
// ***
// ****
// *****
let star=""
for (let i=1;i<=5;i++){
  
star=star+i
  console.log(star)
}
// console.log(-"1"+2)