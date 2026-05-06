//Problem - 1
const arr: number [] = [1,2,3,4,5,6];

function filterEvenNumbers(nums: number[]): number[] {
    
    return nums.filter(nums => nums %2 ===0);
    
};

// const result = filterEvenNumbers(arr);

// console.log(result);




//Problem - 2
const sample: string = 'typescript';

function reverseString( exp : string): string {
    let reverseexp = '';
    for (let i = exp.length-1; i>=0;i--){
        reverseexp += exp[i];
    }

    return reverseexp;
};

// const result2 = reverseString(sample);
// console.log(result2);




//Problem - 3
type StringOrNumber = number | string;

function checkType (input: StringOrNumber) : string {
    if(typeof input == "string")
        return `String`;
    else 
        return `Number`;
};

// const result3 = checkType(42);
// const result4 = checkType('Hello');

// console.log(result3);
// console.log(result4);




//Problem 4
function getProperty <T, K extends keyof T> (userKey:T, userInfo:K ):T[K] {
    return userKey[userInfo];
}

const user = { 
    id: 1,
    name: "John Doe", 
    age: 21 
};

// const result5 = getProperty(user,'name');
// console.log(result5);




//Problem 5
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

// const myBook =
//  { 
//     title: "TypeScript Guide",
//     author: "Jane Doe", 
//     publishedYear: 2024 
// };


function toggleReadStatus (book:Book){
    return{
        ...book,
        isRead: true,
    };
};

// console.log(toggleReadStatus(myBook));




//Problem 6
class Person{
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name:string, age:number, grade:string){
        super(name,age);
        this.grade = grade;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    };
};

// const student = new Student("Alice", 20, "A");
// student.getDetails();




//Problem 7
function getIntersection(arr1:number[], arr2:number[]):number[]{
    let arr3:number[]=[];
    for (let i =0; i<arr1.length;i++){
        for (let j = 0; j<arr2.length;j++){
            if (arr1[i]===arr2[j]){
                arr3.push(arr2[j]);
            };
        };
    };

    return arr3;
};

// console.log(getIntersection([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]));