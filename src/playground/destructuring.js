// Objects

// const person = {
//   name: 'Carndog',
//   age: 499,
//   location: {
//     city: 'Trapohilic city',
//     temp: 34
//   }
// };
//
// const { name, age, location } = person
// const { temp: temperature } = person.location;
// console.log(`${name} is ${age} and he lives in ${location.city} and its ${temperature}`);

// const book = {
//   title: 'Life of a Trap God',
//   author: 'Lil Daedae',
//   publisher: {
//     name: 'Phat Books Inc.'
//   }
// };
// const { name: publisherName = 'Self made' } = book.publisher;
//
// console.log(publisherName);

// Arrays

const address = ['4343 Sauce Ave.', 'Oakland', 'California', '83340'];
const [add, city, state] = address;

const item = ['Pie(garbage)', '$2', '$3', '$4'];

// console.log(`I live at ${add} in ${state} and I rep ${city}`);

const [pie, , mPrice] = item;

console.log(`A medium ${pie} is ${mPrice}`);
