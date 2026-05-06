//Problem - 1
const arr: number [] = [1,2,3,4,5,6];

function filterEvenNumbers(nums: number[]): number[] {
    
    return nums.filter(nums => nums %2 ==0);
    
};

const result = filterEvenNumbers(arr);

console.log(result);




//Problem - 2
const sample: string = 'typescript';

function reverseString( exp : string): string {
    let reverseexp = '';
    for (let i = exp.length-1; i>=0;i--){
        reverseexp += exp[i];
    }

    return reverseexp;
};

const result2 = reverseString(sample);
console.log(result2);




//Problem - 3

type StringOrNumber = number | string;

function checkType (input: StringOrNumber) : string {
    if(typeof input == "string")
        return `String`;
    else 
        return `Number`;
};

const result3 = checkType(42);
const result4 = checkType('Hello');

console.log(result3);
console.log(result4);
