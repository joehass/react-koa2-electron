import {RouterStore} from "mobx-react-router";
import {action} from 'mobx';
import axios from 'axios';
import {message} from "antd";

class MockRequest{
    getPostRequest = () =>{
        return axios.create({
            baseURL: 'http://localhost:2222',
            headers:{
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    };

    getGetRequest = (uri) =>{
        return axios.create({
            baseURL: 'http://localhost:2222',
        });
    };

    getRequest = (uri, callback = ()=>{}) => {
        const request = this.getGetRequest(uri);
        return request.get(uri).then(res => res.data || {})
            .then(action(data=>{
                callback(data);
                return data
            })).catch((error) => {
                try{
                    message.destroy();
                }catch(e){
                    console.log("can't find message")
                }
                message.error("无法连接服务器,请联系管理员");
                console.error("调用api发生异常：", error);
            });
    };

    postRequest = (uri, body, callback = ()=>{}) => {
        //const data = JSON.stringify(body);
        const data = body;
        const request = this.getPostRequest(uri, body);
        return request.post(uri,data).then(res => res.data || {})
            .then(action(data=>{
                callback(data);
                return data
            })).catch((error) => {
                try{
                    message.destroy();
                }catch(e){
                    console.log("can't find message")
                }
                message.error("无法连接服务器,请联系管理员");
                console.error("调用api发生异常：", error);
            });
    };
}

let exportData1;

exportData1 = MockRequest;

export default exportData1
