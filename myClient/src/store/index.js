// 导入mobx路由store
import {RouterStore} from 'mobx-react-router';
import {useStrict} from 'mobx';

//开启严格模式


class AppStore{

    constructor(){
        this.routerStore = new RouterStore();
    }
}

export default AppStore