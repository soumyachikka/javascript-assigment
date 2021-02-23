// Your code here.
class Vec {
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  plus(c){
    return `Vec{x : ${this.a + this.b}, y : ${c.a + c.b} }`;
  }
  minus(c){
    return `Vec{x : ${this.a - this.b}, y : ${c.a - c.b} }`;
  }
  }
