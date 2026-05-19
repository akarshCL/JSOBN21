// // scopes in JS
// // Global scope
// // Local scope
// // Block scope
// // Function scope

// // TDZ
// // hoisting





// // let a=20;

// // function abc(){
// //     a=30;
// //     console.log(a,"a");
// // }
// // console.log(a,"outside");
// // abc()
// // console.log(a,"later");

// // global is b=30// 60 //40


// // let b=30;
// // console.log(b) //30
// // function xyz(){
    
// //     // b=40;
 
// //     console.log(b)//30
// // }
// // xyz(); 
// // b=50;
// // console.log(b); //50
// // b=90
// // console.log(b);//90

// // ---------function scope-----------

// // let b=30;
// // console.log(b) //30
// // function xyz(){
  
// //     let a=90;
// //     console.log(b)//40
// //     console.log(a)//90
// // }
// // xyz(); 

// // console.log(b);//30
// //  console.log(a);





// // function xyz(){
// //     console.log(b);
// // }
// // xyz();
// // let b=40;


// // if(true){
// //     console.log(b);
// //     let b=60;
// //     console.log(b);
// // }

// // console.log(b);

// // console.log(a);
// // var a=10;


// // var a;
// // console.log(a);
// // a=10;
// // console.log(b);
// // var b=10;



// // let a=10;
// // console.log(a);

// // let a;
// // console.log(a);
// // a=10;

// // tdz start
// // let a;
// // console.log(a);
// // a=30;
// // tdz stop


// // console.log(a);
// // var a=10

// // var a=undefined


// // abc();
// // function abc(){
// //     console.log("hello")
// // }

// // xyz();

// // var xyz=function(){
// //     console.log("hello iam another function")
// // }



// abc();


// function abc(){
//     console.log(a);
//     var a=10;
// }

// function abc(){
//     a=90;
// }

// let a=10;
// if(a==10){
//     var a=40;
//      abc();

//     console.log(a);
// }
// console.log(a);


function abc(){
    a=90;
}

let a=10;
function xyz(){
    var a=40;
    if(true){
        var a=80;
        console.log(a,"if")
    }
    console.log(a,"hh");
}
xyz();
 abc();
console.log(a,"pp");