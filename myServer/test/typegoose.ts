import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import mongoose from 'mongoose';
 
mongoose.connect('mongodb://localhost:27017/local');
 
class User extends Typegoose {
  @prop()
  name?: string;
}
 
const UserModel = new User().getModelForClass(User);
 
// UserModel is a regular Mongoose Model with correct types
(async () => {
  const u = new UserModel({ name: 'JohnDoe' });
  await u.save();
  const user = await UserModel.find({'name':'JohnDoe'});
 
  // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
  console.log(user);
})();