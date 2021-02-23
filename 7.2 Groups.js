// Groups
// The standard JavaScript environment provides another data structure called
// Set . Like an instance of Map , a set holds a collection of values. Unlike Map , it
// does not associate other values with those—it just tracks which values are part
// of the set. A value can be part of a set only once—adding it again doesn’t have
// any effect.
// Write a class called Group (since Set is already taken). Like Set , it has add ,
// delete , and has methods. Its constructor creates an empty group, add adds
// a value to the group (but only if it isn’t already a member), delete removes
// its argument from the group (if it was a member), and has returns a Boolean
// value indicating whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf , to determine
// whether two values are the same.
// Give the class a static from method that takes an iterable object as argument
// and creates a group that contains all the values produced by iterating over it.


class Group {
  constructor() {
    this.val = []
  }

  add(e) {
    if (this.val.indexOf(e) === -1) {
      this.val.push(e)
    }
  }
  delete(e) {
    const index = this.val.indexOf(e)
    if (index !== -1) {
      this.val.splice(index, 1)
    }
  }
  has(e) {
    if (this.val.indexOf(e) === -1) return false

    return true
  }

  static from(collection) {
    let group = new Group
    for (let value of collection) {
      group.add(value)
    }
    return group
  }
}


const g = new Group()
console.log(g); // Group { val: [] }
g.add(10)
g.add(15)
g.add(18)
console.log(g); // Group { val: [ 10, 15, 18 ] }
g.delete(15)
console.log(g); // Group { val: [ 10, 18 ] }
console.log(g.has(18)); // true
console.log(g.has(3)); // false

const ng = Group.from([1, 2, 3, 4, 5])
console.log(ng); // Group { val: [ 1, 2, 3, 4, 5 ] }
