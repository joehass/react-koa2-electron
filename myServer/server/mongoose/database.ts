import mongoose from 'mongoose'

import {MONGO_PORT,DB_NAME,MONGO_HOST} from '../config/const'

export default class Database {

    startConnection = async() =>{
      mongoose.connect(
        'mongodb://localhost:27017/enai',{
          useNewUrlParser: true
          }
        )

        let dbStatus = mongoose.connection;

        dbStatus.once('open', function() {
            console.log('链接成功')
          });
        
    }
}