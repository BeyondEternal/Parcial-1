//
// ES5
// to complete
//
export default
  function Queue() {
    this.dataStore = []

    this.enqueue= function(element) {
	this.dataStore.push(element)
    }

    this.dequeue= function() {
	return this.dataStore.shift()
    }

    this.front= function() {
	return this.dataStore[0]
    }

    this.back= function() {
	return this.dataStore[this.dataStore.length-1]
    }

    this.toString= function() {
	let retStr = ""
	for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	}
	return retStr
    }

    this.isEmpty= function() {
	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
	
    }

    this.isFull= function() {}
}


//
// test program
//
