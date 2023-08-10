//basic types
let id: number = 5;
let company: string = "Tranverse waves";
let isPublished: boolean = true;
let x: any = "Helllo";

//arrays
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(3);

let arr: any[] = [1, true, "hello"];

//tuple
let person: [number, string, boolean] = [1, "brad", true];
//tuple array
let employe: [number, string][];
employe = [
  [1, "brian"],
  [2, "brian"],
  [3, "brian"],
];
//unions
let did: string | number;
did = 2;
did = "hi";

//enum
enum direction1 {
  up,
  down,
  left,
  right,
}
console.log(direction1.up);
//objects
type user = {
  id: number;
  name: string;
};

//const user: {
//using tpe we dont need thiss other way
//id: number;
//name: string;
//} = {
//id: 1,
//name: "john",
//};

//type asesertion
let cid: any = 1;
// let customerId = <number>cid;
//or
let customerId = cid as number;

//function
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 3));

function log(message: string | number): void {
  console.log(message);
}

//interfaces
interface user1 {
  id: number;
  name: string;
  age?: number; //question mark makes is optional
}
//adding res=adonly make it unable to change
const user: user1 = {
  id: 1,
  name: "john",
};

//a type can be used with primitives and unions
//but you cant use an interface in such way
interface Mathfunc {
  (x: number, y: number): number;
}
const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

//classes
class Person {
  //private id
  //maked the id private only within the class,protected means only accessed with the class and also extended classes
  id: number;
  name: string;
  //constructors run when a variable is instantiated
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, "Daniel");
const briad = new Person(2, "Braid");

//extending classes
//subclasses

class employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new employee(3, "SHAWN", "developer");

//generics
function getArray<T>(items: T []):T[]{
    return new Array().concat(items)
}

let numArray = getArray ([1,2,3,4])
let strArray = getArray ('brad' ,'john' , 'brad')

