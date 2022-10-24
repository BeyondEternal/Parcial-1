let x = [10, 100, 1000]

for(let i = 0;i<3;i++){
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
    let k=0,t1,t2
    function ord_pila(x) {
      k=0
      t1=performance.now()
      let p = new pila(x);
      let s = new pila(x);
      let n, r;
      let i = 1;
      n = Math.floor(Math.random() * (x - 1) + 1)
      p.entrada(n)
      while (i < x) {
          while(!s.vacia()){
              p.entrada(s.salida())
            k++
          }
        r = Math.floor(Math.random() * (x - 1) + 1)    
        while(r>=p.peek() && !p.vacia()){
            s.entrada(p.salida())
          k++
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
      t2=performance.now()
    }

    let kArray = [], tArray = []

    for(let j = 0;j<5;j++){
      ord_pila(x[i])
      tArray[j]=t2-t1
      kArray[j]=k
    }
    console.log("Tiempo de ejecución: ", tArray)
    console.log("Pasos: ", kArray)
    console.log("Promedio de tiempo: ", average(tArray))
    console.log("Promedio de pasos: ",average(kArray));
  
}


function average(array) {
  let average=0
  for(let i = 0;i<array.length-1;i++){
    average+=array[i]
  }
  average/=(array.length-1)
  return average
}