
class Product {
  constructor(name, price, qty) {
    if (!(name.length < 3) || !(name === null))
      this.name = name 
    
    if (!(price < 0)) 
      this.price = price
    
    if (!(qty < 0)) 
      this.qty = qty
  }


  qtyIncrement (value) {
    this.qty += value
    this.validate()
  }

  qtyDecrement (value) { 
    this.qty -= value
    this.validate()
  }

  validate() {
    if (this.name === null || this.name.length < 2) {
      console.log(`Invalid name: Name is <null> or it has less than '2' characters.`)
      //throw new FatalError(`Invalid name: Name is <null> or it has less than '2' characters.`)
      return;
    }

    if (this.qty < 0.0) {
      console.log(`Invalid quantity: Quantity can't has a value less then '0'.`)
      //throw new FatalError(`Invalid quantity: Quantity can't has a value less then '0'.`)
      return;
    }

    if(this.price < 0) {
      console.log(`Invalid price: Price can't has a value less then '0.0'.`)
      //throw new FatalError(`Invalid price: Price can't has a value less then '0.0'.`)
      return;
    }
  }
}



function main () {
  const banana = new Product("banana", 5.0, 20)
  console.log(banana)

  banana.qtyIncrement(10)
  console.log(banana)

  banana.qtyDecrement(30)
  console.log(banana)

  banana.qtyDecrement(1)
  console.log(banana)
}


main()