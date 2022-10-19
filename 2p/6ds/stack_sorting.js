function pila(maximo) {
    this.Tamaño_Pila = []
    this.max = maximo
    this.llena = llena
    this.vacia = vacia
    this.entrada = entrada
    this.salida = salida
    this.mostrar = mostrar
    this.peek = peek
  }
  
  function entrada(element) {
    if (this.llena()) {
      console.log("Tu pila esta llena, debes eliminar elementos")
    } else {
      this.Tamaño_Pila.unshift(element)
    }
  }
  
  function salida() {
    if (this.vacia()) {
      console.log("Tu pila esta vacia, debes introducir elementos")
    }
    else {
      return this.Tamaño_Pila.shift()
    }
  }
  
  function llena() {
    if (this.Tamaño_Pila.length === this.max)
      return true
    else
      return false
  }
  
  function vacia() {
    if (this.Tamaño_Pila.length === 0)
      return true
    else
      return false
  }
  
  function mostrar() {
    let show = ""
    for (let i = 0; i < this.Tamaño_Pila.length; ++i) {
      show += this.Tamaño_Pila[i] + "\n"
    }
    return show
  }
  
  function peek() {
    return this.Tamaño_Pila[0]
  }
  let t1=performance.now()
  function ord_pila(x) {
    let p = new pila(x);
    let s = new pila(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.entrada(n)
    while (i < x) {
        while(!s.vacia()){
            p.entrada(s.salida())
        }
      r = Math.floor(Math.random() * (x - 1) + 1)    
      while(r>=p.peek() && !p.vacia()){
          s.entrada(p.salida())
        }  
        if(r<p.peek() || p.vacia()){
            p.entrada(r)          
          }
        i++
    }
    while(!s.vacia()){
        p.entrada(s.salida())
    }
    console.log(p.mostrar())
    console.log(s.mostrar())
  }
  let t2=performance.now()
  ord_pila(1000)
  console.log("Tiempo de ejecución: ",t2-t1)