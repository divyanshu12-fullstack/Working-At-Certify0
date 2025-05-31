// ✅ JavaScript is a Prototype-based Language

// 👤 Creating a user object with properties, methods, and accessors
let user = {
    name: "Divyanshu",
    age: 21,
    // Method using shorthand syntax
    greet() {
        console.log("Hi my name is", this.name);
    },
    // Method using traditional function expression
    drives: function () {
        console.log("Drives");
    },
    isWorking: true,

    // Getter: returns name
    get fullName() {
        return `${this.name}`;
    },
    // Setter: sets name from fullName
    set fullName(value) {
        this.name = value;
    }
};

console.log(user); // Output entire user object

// 📦 Object creation using constructor
const obj = new Object();
obj.key1 = "value1";
console.log(obj); // { key1: 'value1' }

// 📝 Accessing object properties
console.log(user.name);     // Dot notation
console.log(user["age"]);   // Bracket notation

// 🔊 Calling methods
user.greet(); // Hi my name is Divyanshu

// ➕ Adding and deleting properties
user.city = "Lucknow";
delete user.city;
console.log(user); // city should be removed

// 🛠 Using setter
user.fullName = "Arpit";
// ✅ Using getter
console.log(user.fullName); // Arpit
console.log(user); // Updated name property

// 🔍 Object methods: keys, values, entries
console.log(Object.entries(user)); // Returns [key, value] pairs

// 🔁 Looping with for...in
for (let key in user) {
    console.log(key, user[key]); // Logs each key and value
}

// 🧠 Computed Property Key
const key = "name";
const obj1 = {
    [key]: "Alok" // key evaluated as "name"
};
console.log(obj1); // { name: 'Alok' }

// 🔄 Shallow Copy (copies references for nested objects)
const original = {
    name: "Harsh",
    address: {
        city: "Delhi"
    }
};
const shallowCopy = { ...original };
shallowCopy.name = "Bob";                // Only name is copied
shallowCopy.address.city = "Mumbai";     // Affects original due to shared reference

console.log(original); // address.city is "Mumbai"

// 🔁 Deep Copy using structuredClone (copies all nested levels)
const copy = structuredClone(original);
console.log(copy); // Deep copied version

// 📋 Student Report Card Generator
const student = {
    name: "Alice",
    rollNo: 21,
    marks: {
        English: 91,
        Math: 99,
        Java: 100,
        Hindi: 85,
        History: 80
    },

    // ➕ Total marks of all subjects
    get totalMarks() {
        let total = 0;
        for (let subject in this.marks) {
            total += this.marks[subject];
        }
        return total;
    },

    // 🔢 Average marks
    get averageMarks() {
        return this.totalMarks / Object.keys(this.marks).length;
    },

    // 🏅 Grade calculation based on average
    get grade() {
        const avg = this.averageMarks;
        if (avg >= 90) return 'A';
        else if (avg >= 80) return 'B';
        else if (avg >= 60) return 'C';
        else return 'F';
    },

    // 🖨 Print the report card
    printReport() {
        console.log("📋 Student Report Card");
        console.log("=======================");
        console.log(`Name    : ${this.name}`);
        console.log(`Roll No : ${this.rollNo}`);
        console.log("Marks:");
        for (let subject in this.marks) {
            console.log(`  ${subject}: ${this.marks[subject]}`);
        }
        console.log("-----------------------");
        console.log(`Total   : ${this.totalMarks}`);
        console.log(`Average : ${this.averageMarks.toFixed(2)}`);
        console.log(`Grade   : ${this.grade}`);
    }
};

// ✅ Generate and print the report
student.printReport();
