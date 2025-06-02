// 📌 Classes are a way for object creation
// class is a blueprint for creation of Objects

// 🎯 Constructor function using class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 🗣 Method defined in the class
    greet() {
        console.log("Hello My name is " + this.name);
    }
}

// 🧑 Creating instances (objects) of the Person class
const p1 = new Person("Divyanshu", 21);
p1.greet(); // Hello My name is Divyanshu

const p2 = new Person("Aditi", 21);
// p1 and p2 are instances of class Person

// 👨‍🎓 Inheritance in classes
class student extends Person {
    constructor(name, age, gender) {
        super(name, age); // 🔁 Calls parent class constructor
        this.gender = gender;
    }

    study() {
        console.log("Is Studying");
    }
}

const s1 = new student("Anurag", 20, "Male");
s1.greet();  // Inherited method
s1.study();  // Student-specific method

// 🧠 Notes:
// - super keyword is used to call parent constructor
// - Classes are syntactic sugar over prototypal inheritance
// - Under the hood, classes still use prototypes
// - JS is a prototype-based language

// 📦 Example of Prototype chain
let arr = [1, 2, 3, 4, 5];
// arr -> Array.prototype -> Object.prototype -> null

// 🔧 Custom Prototype Example
let ob1 = {
    name: "DD",
    age: 21,
    giveIntro: function () {
        console.log("Hello Sir");
    }
};

let ob2 = {
    name: "Rohit"
};

// Setting prototype manually
ob2.__proto__ = ob1;
ob2.giveIntro(); // Inherited from ob1

// 🏦 Class Example: BankAccount
class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Money can't be less than or equal to zero");
        } else {
            this.balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance -= amount;
        }
    }

    checkBalance() {
        console.log(`${this.accountHolder} has - ₹${this.balance} in account`);
    }
}

const acc1 = new BankAccount("Abhinav", 3000);
acc1.checkBalance();       // Abhinav has - ₹3000 in account
acc1.deposit(2000);        // Deposit ₹2000
acc1.withdraw(4000);       // Withdraw ₹4000
acc1.checkBalance();       // Updated balance

// 📞 call(), apply(), and bind() examples
function sayHi(state, country) {
    console.log(`Good Night, said ${this.name}, from ${state} in ${country}`);
}

const p5 = { name: "Alice" };

// ✅ call(): pass arguments individually
sayHi.call(p5, "UP", "India");

// ✅ apply(): pass arguments as array
sayHi.apply(p5, ["New York", "USA"]);

// ✅ bind(): returns new function
const goodBye = sayHi.bind(p5, "Sydney", "Australia");
goodBye(); // Executes later
