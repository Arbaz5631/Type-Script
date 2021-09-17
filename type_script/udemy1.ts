//type alias.

type Person={
    name:string;
    age:number;
};

let person:Person;
person={
    name:"Arbaz",
    age:22
}


// Function and Types

function add(a:number ,b:number):number{
  return a+b;
}


//Generic

function genericFunction<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;
}
const number=[1,2,3,4];
const updateArray= genericFunction(number,-1);
const stringArray=genericFunction(["a","b","c"],"d");
 


