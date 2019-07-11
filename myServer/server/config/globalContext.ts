import { initAsArray } from "typegoose/lib/utils";

//这里需要保存每次传输的ctx变量,供装饰器中使用
class GlobalContext {

    context:any

    init(ctx){
        this.context = ctx
    }
}

export default new GlobalContext()