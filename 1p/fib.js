const fibb = c => {
  let a = 1, b = 0, d = 0
  for (i = 0; i < c; i++) {
    d = a + b
    b = a
    a = d
    console.log(b)
  }
}

fibb(11)