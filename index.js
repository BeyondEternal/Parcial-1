function pila(maximo) {
    this.Tamaño_Pila = []
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
      return this.Tamaño_Pila.pop()
    }
  }
  function entradaSort(element) {
    if (this.llena()) {
      console.log("Tu pila esta llena, debes eliminar elementos")
    } else {
      this.Tamaño_Pila.push(element)
    }
  }
  function salidaSort() {
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
  
//   function ord_pila(x) {
//     let p = new pila(x);
//     let s = new pila(x);
//     let n, r;
//     let i = 1;
//     n = Math.floor(Math.random() * (x - 1) + 1)
//     p.entrada(n)
//     while (i < x) {
//         console.log(p.Tamaño_Pila);
//         while(!s.vacia()){
//             p.entrada(s.salidaSort())
//         }
//       r = Math.floor(Math.random() * (x - 1) + 1)   
//       console.log(r);
//       while(r<=p.peek() && !p.vacia()){
//           s.entrada(p.salida())
//         }  
//         if(r>=p.peek() || p.vacia()){
//             p.entrada(r)          
//           }
//         i++
//     }
//     while(!s.vacia()){
//         p.entrada(s.salidaSort())
//     }
//     console.log(p.mostrar())
//     console.log(s.mostrar())
//   }

  let p = new pila(10);
  let s = new pila(10);
  function push(r) {
    console.log(p.peek());
      while(r>=p.peek() && !p.vacia()){
          s.entrada(p.salida())
          console.log(s.Tamaño_Pila);
        }  
        console.log(s.Tamaño_Pila)
        if(r<=p.peek() || p.vacia()){
            p.entrada(r)          
        }
        while(!s.vacia()){
            p.entrada(s.salida())
        } 
      console.log(p.Tamaño_Pila)
  }

  //ord_pila(10)
    push(3)
    push(4)
    push(5)
    push(1)
    push(2)

  console.log("Fin")