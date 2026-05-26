// // // // // // // // // "Array declaration and initialization
// // // // // // // // // Accessing elements (indexing)
// // // // // // // // // length property
// // // // // // // // // Basic iteration with loops
// // // // // // // // // for of  loop
// // // // // // // // // push(), pop(), shift, unshift, splice()



// // // // // // // let fr1="Apple";
// // // // // // // let fr2="Banana"
// // // // // // // let fruits=["Apple","Banana","orange","pineapple","strawberry","mango"];
// // // // // // // // let fr={0:"Apple",1:"Banana",2:"Anaother"}

// // // // // // // // console.log(fruits[0]);
// // // // // // // // console.log(fruits[4]);
// // // // // // // // console.log(fruits[1])

// // // // // // // // console.log(fruits.length);
// // // // // // // // console.log(fruits[Math.floor(fruits.length/2)])
// // // // // // // // console.log(fruits[Math.floor(5/2)])

// // // // // // // let n=fruits.length-1
// // // // // // // for(let i=0;i<=n;i++){
// // // // // // //     console.log(fruits[i],"forword")
// // // // // // // }


// // // // // // // for(let i=n;i>=0;i--){
// // // // // // //     console.log(fruits[i],"reverse")
// // // // // // // }








// // // // // // // // Print all elements
// // // // // // // // Print last element
// // // // // // // // Find array length
// // // // // // // // Loop Practice
// // // // // // // // Sum of array
// // // // // // // // Find largest element
// // // // // // // // Count even numbers
// // // // // // // // Reverse print array
// // // // // // // // let array=[1,2,3,4,5]
// // // // // // // // let high=array[0]
// // // // // // // // for(let i=0;i<array.length;i++){

// // // // // // // //     if(array[i]>high){
// // // // // // // //         high=array[i]
// // // // // // // //     }
// // // // // // // // }
// // // // // // // [1,2,3,4,5]
// // // // // // // [2,4,5,6,7]


// // // // // // // find maximum , 2nd maximum, minmum, second minmum


// // // // // // // // Method Practice

// // // // // // // // Add elements using push
// // // // // // // // Remove using pop
// // // // // // // // Add at beginning using unshift
// // // // // // // // Remove first using shift





// // // // // // // for(let i=0;i<=n;i++){
// // // // // // //     console.log(fruits[i])
// // // // // // // }


// // // // // // // let arr=[1,2,43,4,5,6,67,6,6];
// // // // // // // [1,0,43,0,5,0,67,0,0]

// // // // // // // for(let res of arr){

// // // // // // //     console.log(res,"one by one")

// // // // // // // }

// // // // // // // arr[0]="akatsh"

// // // // // // // for (let i=0;i<arr.length;i++){
// // // // // // //     if(arr[i]%2==0){
// // // // // // //      arr[i]=0
// // // // // // //     }else{
// // // // // // //       arr[i]=1  
// // // // // // //     }
// // // // // // // }
// // // // // // // console.log(arr)

// // // // // // let arr=[1,2,3,345,5,5,55,5,5,5,56];
// // // // // // // // arr[arr.length]=4
// // // // // // let res=arr.push(4);
// // // // // // console.log(res,"push")
// // // // // // console.log(arr,"push")


// // // // // // let res2=arr.pop();
// // // // // // console.log(res2,"pop")
// // // // // // console.log(arr,"pop")

// // // // // // let res3=arr.unshift("akarsh");
// // // // // // console.log(res3,"unshift")
// // // // // // console.log(arr,"unshift")

// // // // // // let res4=arr.shift();
// // // // // // console.log(res4,"shift")
// // // // // // console.log(arr,"shift")


// // // // // // // function customPush(arr,n){
// // // // // // // arr[arr.length]=n
// // // // // // // }

// // // // // // // customPush(arr,4)

// // // // // // let arr=[1,2,3,2];
// // // // // // let arr2=[4,5,6,7,8];
// // // // // // // console.log(arr.concat(arr2))

// // // // // // let newarr=[]

// // // // // // for(let i=0;i<arr.length;i++){
// // // // // //     newarr[newarr.length]=arr[i]
// // // // // //     // newarr[i]=arr[i]
// // // // // // }


// // // // // // for(let i=0;i<arr2.length;i++){
// // // // // //      newarr[newarr.length]=arr2[i]
// // // // // //     //   newarr[i+arr.length]=arr2[i]
// // // // // // }
// // // // // // console.log(newarr)

// // // // // // // console.log(arr.indexOf(2),"hh");
// // // // // // // let target=2

// // // // // // // function customIndex(){
// // // // // // //      for(let i=0;i<arr.length;i++){
// // // // // // //      if(arr[i]==target){
// // // // // // //       console.log(i,"pp")
// // // // // // //       return;
// // // // // // //      }
// // // // // // //  }
// // // // // // // console.log(-1,"oo")
// // // // // // // }

// // // // // // // customIndex()

// // // // // // // function customPush(arr,n){
// // // // // // //     arr[arr.length]=n;
// // // // // // //     return arr.length;
    
// // // // // // // }

// // // // // // // console.log(customPush(arr,9))
// // // // // // // console.log(arr)

// // // // // // // function customPop(arr){
// // // // // // //     let result=arr[arr.length-1];
    
// // // // // // //         arr.length--
    
// // // // // // //     return result
    
// // // // // // // }

// // // // // // // console.log(customPop(arr))
// // // // // // // console.log(arr)

// // // // // // // let arr=[1,2,3,4,5,6,7,4534,3,5,6,4,6]

// // // // // // // slice, splice, reverse.

// // // // // let arr=[1,2,3,4,5];
// // // // // //.      0,1,2,3,4
// // // // // // -1
// // // // // // console.log(arr.reverse());
// // // // // // slice
// // // // // let res= arr.slice(2,3);
// // // // // let result2= arr.slice(-3,-2);
// // // // // console.log(res,"res")
// // // // // console.log(result2,"result2");

// // // // // splice
// // // // let arr=[1,2,3,4,5];//3,4. 
// // // // let res4=arr.splice(-3,0) 
// // // // console.log(res4,"res4")
// // // // //.      0,1,2,3,4
// // // // let res=arr.splice(2,2);
// // // // console.log(arr,"remove element") //[1,2,5]
// // // // let res2=arr.splice(-2,2,55,44,444,55)//[1,2,55,44,444,55]
// // // // // splice(findthe idex to startTransition,deletecount, .....add element)
// // // // console.log(arr,"add element")

// // // // console.log(res,"res")
// // // // console.log(res2)


// // // // function custom(a,b=arr.length-1){
// // // //     console.log(a+b)

// // // // }

// // // // custom(-12,-13);
// // // // a=
// // // // b=[2,3,4]
// // // // c=[4,56,6]
// // // a=10;
// // // b=a;

// // // // spread and rest operator
// // // // let arr=[1,2,3,4,5,[2,3,4],[4,56,6]];
// // // // let res=JSON.stringify(arr)
// // // // console.log(typeof res,res)
// // // // let result=JSON.parse(res)

// // // // result[6][0]="asdfghjkl"
// // // // console.log(result, typeof result)
// // // // console.log(arr)
// // // // // in single line
// // // // let respond=JSON.parse(JSON.stringify(arr))

// // // // let arr2=[...arr]
// // // // arr[0]=12;
// // // // arr[4]=456;
// // // // arr[6][2]="another"

// // // // arr2[5][0]="second"
// // // // arr2[4]=34567890
// // // // console.log(arr,"arr")
// // // // console.log(arr2,"arr2")
// // // // console.log(...arr)


// // // // let res6=structuredClone(arr)
// // // // res6[6][0]="asdfghjkl"
// // // // console.log(res6,"res6")
// // // // console.log(arr,"arr")


// // // // function abc(a,b,...xyz){
// // // // console.log(a,"a")
// // // // console.log(b,"b")
// // // // console.log(rest,"rest")
// // // // }

// // // // abc(1,2,3,4,5,6,8)

// // // let [a,b,...rest]=[1,2,3,4]
// // // console.log(a,b,rest)

// // // let [c,,,s]=[1,2,3,4]
// // // console.log(c,s)




// // let arr=["rcb","GT","SRH",["PBKS","KKR","RR"]];

// // // let copy=[...arr]

// // // arr[3][0]="RR";
// // // arr[3][1]="PBKS";
// // // arr[3][2]="KKR";


// // // console.log(arr,"arr")
// // // console.log(copy,"copy")

// // let deepcopy=structuredClone(arr);
// // deepcopy[3][0]="RR";
// // deepcopy[3][1]="PBKS";
// // deepcopy[3][2]="KKR";


// // console.log(arr,"arr")
// // console.log(deepcopy,"deepcopy")


// // let result=[ 'rcb', 'GT', 'SRH', [ 'PBKS', 'KKR' ] ] 
// // // [ 'rcb', 'GT', 'SRH', 'RR' ] 



// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Start small. Ship something.");

// let arr=[1,2,3,4,5];
// let start=4;
// let end=2;
// // this is when both start and end is given
// // function custom(arr,start,end){
// //     let result=[];
// // for(let i=start;i<=end-1;i++){
// //     result.push(arr[i])
    
// // }
// // return result;
// // }

// // console.log(custom(arr,start,end))

// console.log(arr.slice(4,2),"oo")

// // function custom(arr,start=0,end=arr.length){
// //     if(start<0){
// //         start=arr.length+start// 5+ -3=2
// //     }
// //     if(end<0){
// //         end=arr.length+end;
// //     }
// //     let result=[];
// // for(let i=start;i<=end-1;i++){
// //     result.push(arr[i])
    
// // }
// // return result;
// // }

// // console.log(custom(arr,start,end))




// splice remove the element 
// add the element from starting index > given index
let arr=[1,2,3,4,5,6]
// 1,2,5,6
function customSplice(start,deleteCount,...rest){

let deletedCountData=[];
let dataToBeAppend=rest;// [12,12,4,5]
for (let i=start;i<start+deleteCount;i++){
    deletedCountData.push(arr[i]);
}

let remainingArray=[];
for(let i=0;i<start;i++){
    remainingArray.push(arr[i])
}
if(rest.length>0){
    for(let i=0;i<dataToBeAppend.length;i++){
        remainingArray.push(dataToBeAppend[i])
    }
}


for(let i=start+deleteCount;i<arr.length;i++){
    remainingArray.push(arr[i])
}

// arr=[]
arr=remainingArray
// return remainingArray

}

console.log(customSplice(2,2,12,12,4,5))