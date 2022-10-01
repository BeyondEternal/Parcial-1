let myObject = {
  name: 'name',
  age: 23,
  23: 'hola'
}
for (let i = 0; i < 10000; i++) {
  let name = "name" + Math.floor(Math.random() * 1e4 + 1);
  myObject[name] = name;
}

console.log(myObject)