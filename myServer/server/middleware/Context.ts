//这里保存context
import GlobalContext from '../config/globalContext'
import {SaveContext} from '../decorator/decorator';

export default class Context {

    @SaveContext
    async saveContext(ctx,next){
        next()
    }
}