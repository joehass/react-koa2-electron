import {SUCCESS__MSG,FAUILD__MSG} from '../config/const'

class DatabaseHelper{

    find = async(model,value) =>{
        const value1 = await model.find(value)
        return value1
    }

    /**
     * TODO:保存进入数据库
     *
     * @memberof DatabaseHelper
     */
    save = (model) =>{
        return new Promise(resolve=>{
            model.save(function(err){
                if(err){
                    console.log('保存失败: '+ err)
                    resolve(err)
                 }else{
                    console.log('保存成功')
                    resolve(SUCCESS__MSG)
                }
            })
    
        })
    }
}
const databaseHelper = new DatabaseHelper()
export default databaseHelper