// 
// const person = {
//     name:"kavya",
//     greet:() => {
//         console.log(`Hello, ${this.name}`);
//     // } undefined,because `this` is not bound to person
// };
// person.greet();

const person = {
    name:"kavya",
    greet: function() {
        console.log(`Hello, ${this.name}`);

    }

};
person.greet();