// Iterable groups
// Make the Group class from the previous exercise iterable. Refer to the section
// about the iterator interface earlier in the chapter if you aren’t clear on the
// exact form of the interface anymore.
// If you used an array to represent the group’s members, don’t just return the
// iterator created by calling the Symbol.iterator method on the array. That
// would work, but it defeats the purpose of this exercise.
// It is okay if your iterator behaves strangely when the group is modified during
// iteration.


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

  [Symbol.iterator]() {
    return new GroupIterator(this)
  }
}

class GroupIterator {
  constructor(obj) {
    this.val = obj.val
    this.position = 0
  }
  next() {
    if (this.val.length <= this.position) {
      return {done: true}
    } else {
      return {value: this.val[this.position++], done: false}
    }
  }
}

for (let v of Group.from(['a', 'b', 'c'])) {
  console.log('v = ', v);
}
