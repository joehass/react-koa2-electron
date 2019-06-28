class DatabaseHelper{

    find = async(model,value) =>{
        const value1 = await model.find(value)
        return value1
    }

    save = (model) =>{
        model.save()
    }
}
const databaseHelper = new DatabaseHelper()
export default databaseHelper