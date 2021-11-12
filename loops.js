// // a basic arrow function in js
// const someName = () => {};

// someName();

// //unnamed arrow function
// () => {};

const numbers = [1,2,3,4,5,6]

//methods on arrays in js (and ruby)
// forEach (each in ruby), map, filter (select in ruby), reduce, find

const logThing = (thing) => {
  console.log(thing);
};

logThing("hello");

// forEach
// in js functions can take function as arguments
numbers.forEach(logThing);

let returnValue = numbers.forEach(logThing);
console.log("returnValue:", returnValue);

numbers.forEach((thing) => {
  console.log(thing);
});

numbers.forEach((thing) => {
  if (thing % 2 === 0) {
    console.log("even");
  }
  else {
    console.log("odd");
  }
});

// map - go through each thing in an array and run the function given,
// whatever that function returns is push into a NEW array
// which is return at the end
let newValues = numbers.map((num) => {
  // whatever that is returned here is pushed into a NEW array
  return num % 2 === 0 ? {num:num, val:"even"} : {num:num, val:"odd"};
  
  // same as the one above with the ternary
  // if we have a return, it'll stop running the function
  if (num % 2 === 0){
    return {num:num, val:"even"}
  }
  else {
    return {num:num, val:"odd"}
  }
});

console.log(newValues);

// filter - go through each thing in an array and run the function given
// if that function returns true, then keep the item in the new array
// which is returned at the end

const odds = numbers.filter((num) => {
  return num % 2 !== 0;
});

console.log(odds);