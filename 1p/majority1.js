let array = new Array(5)

let length = array.length


for (let i = 0; i < length; i++) {
  array[i] = generateNumbers(length)
}

function generateNumbers(a) {
  return Math.floor(Math.random() * a + 1)

}
let k = 0;
let t1 = performance.now()
let c = 0, c1 = 0, c2;
for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    if (array[i] == array[j]) {
      c++
    }
    if (c > c1) {
      c1 = c
      c2 = array[i]

    }
    k++
  }
  c = 0
}
let t2 = performance.now()
if (c1 > (length / 2)) {
  console.log(array)
  console.log(c2, c1)
  console.log('It took', t2 - t1, 'ms and', k, 'steps');
}
else {
  console.log(array)
  console.log("There's not a majority")
}
