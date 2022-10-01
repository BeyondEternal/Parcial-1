const triangular = c => {
  let a = 1, b = 0;
  for (let i = 0; i < c; i++) {
    b += a
    console.log(b)
    a++
  }
}

triangular(11)