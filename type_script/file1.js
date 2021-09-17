// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e:number[]=[1,2,3];
// let f:any[]=[1,true,'a'];
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let backgroundColor = Color.Green;
// //second   
// let message ;
// message="abc";
// let var1=(<string>message).endsWith("c");
// let var2=(message as string).endsWith('c'); 
// // linear annotation .
// let drawPoint1=(point:{x:number,y:number})=>{
// }
// drawPoint1({x:1,y:2})
// //Interface 
// interface Point{  //first letter must be capital
//     x:number,
//     y:number
// }
// let drawPoint=(point:Point)=>{
// }
// drawPoint({x:1,y:2})
// // CLass
// class Point1{             //Point1 is class.
//     x:number;
//     y:number;
//     draw(){
//         console.log(`X is ${this.x} and Y is ${this.y}`)
//     }
//     getDistance(another:Point){
//         //..
//     }
// } 
// let point =new Point1();  //point is object 
// point.x=1;
// point.y=2;
// point.draw();
// CLass with constructor
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log("X is " + this.x + " and Y is " + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        //..
    };
    return Point2;
}());
var point3 = new Point2(1, 2); //point is object 
point3.draw();
// CLass with constructor without pass parameter
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log("X is " + this.x + " and Y is " + this.y);
    };
    Point3.prototype.getDistance = function (another) {
        //..
    };
    return Point3;
}());
var point4 = new Point3(); //point is object 
point4.draw();
