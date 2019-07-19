import RegisterStore from './registerStore'
import LoginStore from './loginStore'
import UserStore from './userStore'
export default function AppStore(){
        const registerStore = RegisterStore.create()
        const loginStore = LoginStore.create()
        const userStore = UserStore.create()
        return {
                RegisterStore:registerStore,
                LoginStore:loginStore,
                UserStore:userStore
        }
}