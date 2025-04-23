function MyClass() {
  this.myField = 'Foo'
  // Constructor body
}

MyClass.myStaticField = 'bar'
MyClass.myStaticMethod = function () {
  // myStaticMethod body
}

MyClass.prototype.myMethod = (function () {
  // myMethod body
})(function () {
  // Static initialization code
})
