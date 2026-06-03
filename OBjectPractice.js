// Find character with highest frequency:
// const freq = {
//   a: 4,
//   b: 2,
//   c: 1
// };


// frequency pattern

// Count character frequency
// Count number frequency
// Count word frequency
// Find duplicates
// First non-repeating character
// Group names by first letter
// Convert array of objects into object by ID
// Group employees by department

let emptyOBj = {
    akarsh: [{
        name: "Akarsh",
        age: "27"
    }, {
        name: "Akarsh",
        age: "27"
    }],
    utkarsh: [{
        name: "utkarsh",
        age: "27"
    }]
};

// let result={harsh:[]}
// console.log(result["akarsh"])// 
// if(result["harsh"]==undefined){
// result["harsh"]=[]
// }else{
// result["harsh"].push({name:"harsh",age:"26"})
// }
// console.log(result)


let result = {}

let obj = [{
    name: "Akarsh",
    age: "27"
}, {
    name: "Akarsh",
    age: "27"
},
{
    name: "utkarsh",
    age: "27"
},
{
    name: "Akarsh",
    age: "27"
},
{
    name: "Akarsh",
    age: "29"
},
{
    name: "aryan",
    age: "20" 
}
]

// for (let singleData of obj) {

//     if (result[singleData.name]) {

//         result[singleData.name].push(singleData)
//     } else {

//         result[singleData.name] = []
//     }
// }


// console.log(result)

// {
//     "akarsh":3,
//     "utkarsh":2,
//     "aryan":1
// }

let newObj={Akarsh:4,utkarsh:1,aryan:1}
for(let data of obj){
    if(newObj[data.name]==undefined){
        newObj[data.name]=1
    }else{
        newObj[data.name]++
    }
}

let finalResult={Akarsh: [ { name: 'Akarsh', age: '27' }, { name: 'Akarsh', age: '29' } ],
  utkarsh: []
}

for(let data in finalResult ){
    console.log(data,"length is",finalResult[data].length )
}
