const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 }
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
users.forEach((user) => console.log(user.name));

let arr = [1, [2, [3, 4], 5], 6];
const flattened = arr.flat(Infinity);
console.log(flattened);

function flattenedArray(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    return result.reverse();
}
console.log(flattenedArray(arr));