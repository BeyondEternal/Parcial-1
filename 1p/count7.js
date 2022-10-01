const cont = (x, y, n) => {
  let v, c = 0
  while (x < y) {
    if (x % n == 0) {
      c++
      x += n
    } else {
      v = x % n
      v = n - v
      x += v
    }
  }
  console.log(c)
}

cont(200, 300, 7)