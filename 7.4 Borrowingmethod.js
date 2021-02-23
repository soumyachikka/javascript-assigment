/ Borrowing a method
// Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
// used as a more robust alternative to the in operator when you want to ignore
// the prototype’s properties. But what if your map needs to include the word
// "hasOwnProperty" ? You won’t be able to call that method anymore because
// the object’s own property hides the method value.
// Can you think of a way to call hasOwnProperty on an object that has its own
// property by that name?


class Test {

  print() {
    console.log('Test');
  }

  hasOwnProperty() {
    console.log('here we are');
  }

  has(prop) {
    return super.hasOwnProperty(prop)
  }
}

const obj = new Test()
obj.print = () => console.log('hello');

console.log(obj.hasOwnProperty('print'));
obj.print()
console.log(obj.has('print'));
