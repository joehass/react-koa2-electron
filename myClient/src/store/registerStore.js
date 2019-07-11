import HttpUtil from '../util/Http'
import { createContainer } from 'unstated-next';


const httpUtil = new HttpUtil;

function RegisterStore() {

    function register(value){
        const body = {
            userName:userName,
            userAccount:userAccount,
            password:password,
            sex:gender
        };
        httpUtil.postRequest(uri,body,function(res){
            console.log(res)
        })
    }
}

export default createContainer(RegisterStore)