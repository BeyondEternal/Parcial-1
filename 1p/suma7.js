const add = (x, y, n) => {
  let v, c = 0

  while (x < y) {

    if (x % n == 0) {
      x += n
      c += x
    } else {
      v = x % n
      v = n - v
      x += v
    }
  }
  console.log(c)
}

add(200, 300, 7)