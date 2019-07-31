import LoginStore from './loginStore'
import FriendStore from './friendStore'
export default function AppStore(){
        const loginStore = LoginStore.create()
        const friendStore = FriendStore.create()
        return {
                LoginStore:loginStore,
                FriendStore:friendStore
        }
}