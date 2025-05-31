// JSON
// [object Object]
let detail = { name: "Alice", age: 21 };
localStorage.setItem("userDetail", detail);

// JSON -> JavaScript Object Notation
// JSON.stringfy 

localStorage.clear();
localStorage.setItem("userDetails", JSON.stringify(detail));

let detail2 = { name: "Divyanshu", age: 21 };
console.log(JSON.stringify(detail2));

// JSON.parse()
console.log(JSON.parse(localStorage.getItem("userDetails")));

// Deep Copy With JSON
let a = {
    name: "Alice",
    skills: ["JS", "Python"],
    info: { age: 25 }
};
// structuredClone();
let c = JSON.parse(JSON.stringify(a));
c.name = "Bob";
c.skills[0] = "Java";
c.info.age = 30;

console.log(a.name);
console.log(a.skills[0]);
console.log(a.info.age);

console.log(c.name);
console.log(c.skills[0]);
console.log(c.info.age);