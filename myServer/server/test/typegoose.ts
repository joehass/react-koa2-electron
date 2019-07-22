import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import mongoose from 'mongoose';
 
mongoose.connect('mongodb://localhost:27017/enai',{
  useNewUrlParser: true
  });
 
class Users extends Typegoose {
  @prop()
  userName?: string

  @prop()
  versionKey:false //不需要版本号
}
 
const UserModel = new Users().getModelForClass(Users);
 
// UserModel is a regular Mongoose Model with correct types
(async () => {
  let u = await UserModel.deleteMany({'userName':'44'});
  
  //await u.save();
  const user = await UserModel.find({'userName':'44'});
 
  // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
  console.log(user);
})();