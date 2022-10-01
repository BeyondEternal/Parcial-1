const succ = (x, y, n) => {
  let v
  while (x < y) {
    if (x % n == 0) {
      console.log(x)
      x += n
    } else {
      v = x % n
      v = n - v
      x += v
    }
  }
}

succ(200, 300, 7)