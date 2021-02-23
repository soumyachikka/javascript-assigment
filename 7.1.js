
// A vector type
// Write a class Vec that represents a vector in two-dimensional space. It takes
// x and y parameters (numbers), which it should save to properties of the same
// name.
// Give the Vec prototype two methods, plus and minus , that take another
// vector as a parameter and return a new vector that has the sum or difference
// of the two vectors’ ( this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).
class Vec {
  constructor(x, y) {
    this.x = x 
    this.y = y
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

Vec.prototype.plus = function(vec) {
  return new Vec(this.x + vec.x, this.y + vec.y)
}

Vec.prototype.minus = function(vec) {
  return new Vec(this.x - vec.x, this.y - vec.y)
}

const vec1 = new Vec(10, 15)
console.log(vec1); // { x: 10, y: 15}
const vec2 = new Vec(5, 10)
console.log(vec2); // { x: 5, y: 10}
const vec3 = vec1.plus(vec2)
console.log(vec3); // { x: 15, y: 25}
const vec4 = vec1.minus(vec2)
console.log(vec4); // { x: 5, y: 5}
console.log(vec4.length); // 7.0710678118654755
