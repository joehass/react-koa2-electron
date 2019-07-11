import {SUCCESS__MSG,FAUILD__MSG} from '../config/const'
//返回数据
export default class R {

    key:string
    value:any

    put(key:string,value:any){
        let map = {}
        map[key] = value
        return map
    } 

    data(value:any){
        let map = {
            success:SUCCESS__MSG,
            data:value
        }
        return map
    }

    error(value:any){
        let map = {
            error:FAUILD__MSG,
            msg:value
        }
    }

    ok(){
        let map = {
            success:SUCCESS__MSG,
        }
        return map
    }
}