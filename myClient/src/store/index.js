import LoginStore from './loginStore'
export default function AppStore(){
        const loginStore = LoginStore.create()
        return {
                LoginStore:loginStore
        }
}