var mongoose = require("mongoose");

var TestSchema = new mongoose.Schema({
    name : { type:String },//属性name,类型为String
    age  : { type:Number, default:0 },//属性age,类型为Number,默认为0
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});

mongoose.connect("mongodb://127.0.0.1:27017/local");

var dbStatus = mongoose.connection;

dbStatus.once('open', function() {
    console.log('链接成功')
  });

  let cat = mongoose.Schema({
      name:String
  })

  cat.methods.speak = function (){
      let greeting = this.name?'my name is' + this.name:'i donot have a name';
      console.log(greeting)
  }

  let kit = mongoose.model('cat',cat)

  var tom = new kit({name:"tom"})

  tom.speak();

  tom.save(function(err,tom){
    if(err) {
        return console.error(err)
    }
    console.log(tom)
  })
