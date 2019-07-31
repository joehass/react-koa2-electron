//obj: 目标对象
//prop: 属性名
//descriptor: 针对该属性的描述符
// 注意这里的 `target` 是 `Dog.prototype`
// function readonly(target, key, descriptor) {
//   descriptor.writable = false
//   return descriptor
// }

/**
     * 这里是真正的 decorator
     * @target 装饰的属性所述的类的原型，注意，不是实例后的类。如果装饰的是 Car 的某个属性，这个 target 的值就是 Car.prototype
     * @name 装饰的属性的 key
     * @descriptor 装饰的对象的描述对象
     */
    function Check(type){
      console.log(type)
      return function (target, name, descriptor){
         // 以此可以获取实例化的时候此属性的默认值
          let v = descriptor.initializer && descriptor.initializer.call(this);
          console.log(target.constructor.__checkers__)
          console.log(target.constructor.check)
          if (!target.constructor.__checkers__) {
            // 将这个隐藏属性定义成 not enumerable，遍历的时候是取不到的。
            Object.defineProperty(target.constructor, "__checkers__", {
                value: {},
                enumerable: false,
                configurable: true
            });
        }
        target.constructor.__checkers__[name] = {
            type: type
        };
        return descriptor
      }
    }

class Dog {
  @Check("check")
  bark () {
    return 'wang!wang!'
  }
}

let dog = new Dog()
console.log(dog.bark())

