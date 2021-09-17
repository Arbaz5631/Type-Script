let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,true,'a'];

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Green;



//second   
 
let message ;
message="abc";
let var1=(<string>message).endsWith("c");
let var2=(message as string).endsWith('c'); 

// linear annotation .

let drawPoint1=(point:{x:number,y:number})=>{

}
drawPoint1({x:1,y:2})

//Interface 
interface Point{  //first letter must be capital
    x:number,
    y:number
}
let drawPoint=(point:Point)=>{

}
drawPoint({x:1,y:2})




// CLass


class Point1{             //Point1 is class.
    x:number;
    y:number;
    
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`)
    }

    getDistance(another:Point){
        //..
    }
} 

let point =new Point1();  //point is object 
point.x=1;
point.y=2;
point.draw();

// CLass with constructor


class Point2{             //Point1 is class.
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    } 
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`)
    }

    getDistance(another:Point2){
        //..
    }
} 

let point3 =new Point2(1,2);  //point is object 
point3.draw();







// CLass with constructor without pass parameter


class Point3{             //Point3 is class.
    x:number;
    y:number;
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    } 
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`)
    }

    getDistance(another:Point3){
        //..
    }
} 

let point4 =new Point3();  //point is object 
point4.draw();


// Access modifier .


class Point4{             //Point4 is class.
    private x:number;
    private y:number;
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    } 
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`)
    }

    getDistance(another:Point4){
        //..
    }
}

let point5=new Point4();
point5.draw();


//Short the code .


class Point5{             //Point4 is class.
    constructor(private x:number,private y:number){
    } 
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`)
    }

    getDistance(another:Point4){
        //..
    }
}

let point6=new Point4(1,2);
point6.draw();


//Modules
