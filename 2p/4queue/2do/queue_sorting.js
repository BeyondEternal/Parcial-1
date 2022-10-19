function fila(maximo) {
  this.Tamaño_Fila = []
  this.max = maximo
  this.llena = llena
  this.vacia = vacia
  this.entrada = entrada
  this.entradaSort = entradaSort
  this.salida = salida
  this.salidaSort = salidaSort
  this.mostrar = mostrar
  this.peek = peek
}
//add
function entrada(element) {
  if (this.llena()) {
    console.log("Tu pila esta llena, debes eliminar elementos")
  } else {
    this.Tamaño_Fila.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu pila esta vacia, debes introducir elementos")
  }
  else {
    return this.Tamaño_Fila.shift()
  }
}
function entradaSort(element) {
  if (this.llena()) {
    console.log("Tu pila esta llena, debes eliminar elementos")
  } else {
    this.Tamaño_Fila.push(element)
  }
}

function salidaSort() {
  if (this.vacia()) {
    console.log("Tu pila esta vacia, debes introducir elementos")
  }
  else {
    return this.Tamaño_Fila.shift()
  }
}

function llena() {
  if (this.Tamaño_Fila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Fila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Fila.length; ++i) {
    show += this.Tamaño_Fila[i] + "\n"
  }
  return show
}

function peek() {
  return this.Tamaño_Fila[0]
}
let k = 0;
let t1 = performance.now()
function ord_fila(x) {
  let p = new fila(x);
  let s = new fila(x);
  let n, r;
  let i = 1;
  n = Math.floor(Math.random() * (x - 1) + 1)
  p.entrada(n)
  while (i < x) {
    r = Math.floor(Math.random() * (x - 1) + 1)
    while (!p.vacia()) {
      s.entrada(p.salida())
      k++
    }
    while (r > s.peek()) {
      p.entrada(s.salida())
      k++
    }
    if (s.vacia()) {
      p.entrada(r)
    }
    if (r <= s.peek()) {
      p.entrada(r)

    }
    while (!s.vacia()) {
      p.entrada(s.salida())
      k++
    }
    i++
  }
  console.log(p.mostrar())
  console.log(s.mostrar())
}
let t2 = performance.now()

ord_fila(1000)
console.log("Tiempo de ejecución: ", t2 - t1)
console.log("Pasos: ", k)