# Blog 2: How the Four Pillars of OOP Reduce Complexity in TypeScript Projects

## Introduction

Object-Oriented Programming, or OOP, is a programming style based on objects and classes. OOP allows programmers to easily write codes and makes it more reliable and understandable for programmers.

The four main pillars of OOP are:

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation


## 1. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

The parent class contains common logic, and child classes extends or customizes that logic. Complexity gets reduced by keeping common code in one place. Moreover, it helps to avoid code duplication and makes the system easier to update.

```ts
class Parents {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHrs:number){
        console.log(`${this.name} sleeps ${numOfHrs} hrs` );
    }

}

class Student extends Parents{
   
}

const student1 = new Student('Mr. Summer', 56, 'Dhaka' );

student1.getSleep(5);

class Teacher extends Parents{
    
    designation:string;

    constructor(name: string, age: number, address:string, designation:string){
        super(name, age, address)
        this.designation = designation;

        //super()// must be called before this.designation
    }



    takeClass(numOfHrsCLs : number ){
        console.log(`${this.name} takes ${numOfHrsCLs} hrs of class`);
    }
}

const teacher1 = new Teacher('Mr. Weather', 31, 'Dhaka', 'Below Climate');
teacher1.takeClass(7);

```


## 2. Polymorphism

Polymorphism means one interface or method can behave differently depending on the object using it. Moreover, polymorphism allows us to write flexible code. 


```ts

class Person {
    getSleep(){
        console.log(`I a normal person, sleep for 8 hrs`);
    }
}


class Student extends Person {
    getSleep(){
        console.log(`I a student, sleep for 5 hrs`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I a NLD, sleep 6 hrs`);
    }
}

const getSleepingHrs = (param: Person) =>{
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
```



---

## 3. Abstraction

Abstraction means hiding implementation or unnecessary details and showing only the essential features. Moreover, it makes code simpler and easier to use without knowing "how" it works internally.

In TypeScript, abstraction can be achieved using abstract classes or interfaces.

Here: abstraction using interface. 
```ts
interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}


//implementation
class MusicPlayer implements MediaPlayer{
    //must folllow the structure of class
    play(){
        console.log(`Playing Music`);
    }

    pause(): void {
        console.log('Music is paused');
    }

    stop(): void {
        console.log('Music is Stopped');
    }

}

const myPlayer = new MusicPlayer();
myPlayer.pause();
myPlayer.play();

```

Here: abstraction using classes.


```ts

abstract class MediaPlayer2{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}

class myPlayer2 extends MediaPlayer2{
    play(): void {
        console.log('Playing Music2');
    }

    pause(): void {
        console.log('paused Playing');
    }

    stop(): void {
        console.log('Music Stopped');
    }
}

const player = new myPlayer2();
player.play();
player.pause();
player.stop();

```



## 4. Encapsulation

Encapsulation means keeping data and related methods together while protecting internal data from direct access. Moreover, wrapping data (fields/variables) and methods (functions) into a single unit called a class, and restricting direct access to some components. Encapsulation protects data from unintended interference and enforces controlled access.

TypeScript supports encapsulation using access modifiers like `public`, `private`, and `protected`.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance());

// account.balance = 50000;
// Error: balance is private
```

Here, `balance` cannot be changed directly from outside the class. It can only be updated through controlled methods.



Lastly, OOP can help organize features like:

- User management
- Payment systems
- Notification systems
- Authentication and authorization
- Product or order management
- Service-based backend architecture

