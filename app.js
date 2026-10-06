// let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

// let swimmers = animals.slice(0, 3);

// let mammals = animals.slice(2, 4);

// //One option:
// // let reptiles = animals.slice(4, 6);

// // Another option:
// let reptiles = animals.slice(4);

// let quadruped = animals.slice(-3);
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
let s = animals.slice(0, 3);
let m = animals.slice(2, 4);
// let r = animals.slice(4, animals.length);
let r = animals.slice(4);
let q = animals.slice(-3, -1);
let c = animals.slice();
console.log(s);
console.log(m);
console.log(r);
console.log(q);
console.log(c);
