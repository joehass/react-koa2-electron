function init(target,prop,descriptor){
    let func = descriptor.value
    descriptor.value = function(){
        arguments[0] = 'tim'
        return func.apply(target, arguments)
    }

    return descriptor
}

class User {
  name:string
  sex:string

  constructor(){
      this.name = 'tom'
      this.sex = '男'
  }
  @init
  print (){
     console.log(this.name) 
     console.log(this.sex) 
  }
}

let user:User = new User()

user.print()


