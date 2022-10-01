let myObject = {
  name: 'name',
  age: 23,
  23: 'hola'
}
for (let i = 0; i < 10000; i++) {
  let name = "name" + Math.floor(Math.random() * 1e4 + 1);
  myObject[name] = name;
}

let sortedKeys = Object.keys(myObject).sort((a, b) => {
  let atext = a.match(/([^\d]+)/)?.[1] || ""
  let anum = a.match(/([\d]+)/)?.[1] ?? 0

  let btext = b.match(/([^\d]+)/)?.[1] || ""
  let bnum = b.match(/([\d]+)/)?.[1] ?? 0

  //If text is different, sort by text, otherwise by number
  return atext !== btext
    ? atext.toLowerCase() < btext.toLowerCase() ? -1 : 1
    : Number(anum) - Number(bnum)
})

let sortedObject = sortedKeys.reduce((obj, key) => {
  obj[key] = myObject[key]
  return obj
}, {})

console.log(sortedObject)