import LoginStore from './loginStore'
import FriendStore from './friendStore'
import ConversationStore from './conversationStore'
export default function AppStore(){
        const loginStore = LoginStore.create()
        const friendStore = FriendStore.create()
        const conversationStore = ConversationStore.create()
        return {
                LoginStore:loginStore,
                FriendStore:friendStore,
                ConversationStore:conversationStore
        }
}