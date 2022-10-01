let array = new Array(5)

let length = array.length

let c2 = 0, c3 = 1, c4 = 0

for (let i = 0; i < length; i++) {
  array[i] = generateNumbers(length);
}

function generateNumbers(a) {
  return Math.floor(Math.random() * a + 1);

}

let k = 0;
let t1 = performance.now()
array.sort(up)
for (let i = 0; i < length; i++) {
  if (array[i] == array[i + 1]) {
    c3++
  }
  else {
    if (c3 > c4) {
      c2 = array[i]
      c4 = c3
      c3 = 1
    }
    else {
      c3 = 1
    }
  }
  k++
}
let t2 = performance.now()
if (c4 > (length / 2)) {
  console.log(array)
  console.log(c2, c4)
  console.log('It took', t2 - t1, 'ms and', k, 'steps');

}
else {
  console.log(array)
  console.log("There's not a majority")
}


function up(a, b) {
  return a - b
}
