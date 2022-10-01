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

  let k = 0;
  const secuencialSearch = item => {
    for (let j = 0; j < length; j++) {
      if (item == array[j]) {
        return item + ' was found in ' + j + ' index'
      }

      k++
    }
    return item + ' Not found'
  }

  function generate(x) {
    for (let j = 0; j < 5; j++) {
      let n = Math.floor(Math.random() * x[i])
      console.log('Number', secuencialSearch(n))
      console.log('Steps', k)
      k = 0

    }

  }

  generate(x)
  console.log(array)
  console.log()

}