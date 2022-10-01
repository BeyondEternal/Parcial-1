const primos = n => {
  let num = 0, x, contador
  while (n > 0) {
    num++
    x = 1
    contador = 0
    while (x <= num) {
      if (num % x == 0) {
        contador++
      }
      x++
    }
    if (contador == 2) {
      console.log(num)
      n--
    }
  }
}

primos(11)
