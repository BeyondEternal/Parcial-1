let x = [1000, 10000, 1000000]

for (let i = 0; i < 3; i++) {
  let array = new Array(x[i])
  let length = array.length

  for (let i = 0; i < length; i++) {
    array[i] = generateNumbers(length)
  }

  function generateNumbers(a) {
    return Math.floor(Math.random() * a + 1)

  }
  let k = 0
  const binarySearch = item => {
    array.sort(up)  //{1}
    var low = 0,                 //{2}
      high = array.length - 1, //{3}
      mid, element;
    while (low <= high) { //{4}
      mid = Math.floor((low + high) / 2); //{5}
      element = array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return item + ' was found in ' + mid + ' index'
      }
      k++
    }
    return 'Number ' + item + ' Not found' //{12}
  };


  function generate(x) {
    for (let j = 0; j < 5; j++) {
      let n = Math.floor(Math.random() * x[i])
      console.log(binarySearch(n))
      console.log('Steps', k)
      k = 0

    }

  }

  generate(x)
  console.log(array)
  console.log()



  function up(a, b) {
    return a - b
  }
}
