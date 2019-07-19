import mongoose from 'mongoose'

export default class Database {

    startConnection = async() =>{
      await mongoose.connect(
        'mongodb://localhost:27017/enai',{
          useNewUrlParser: true
          }
        )

        let dbStatus = mongoose.connection;

        dbStatus.once('open', function() {
            console.log('数据库链接成功')
          });
    }
}