import LoginStore from './loginStore'
import FriendStore from './friendStore'
import ConversationStore from './conversationStore'
import ChatStore from './ChatStore'
export default function AppStore(){
        const loginStore = LoginStore.create()
        const friendStore = FriendStore.create()
        const conversationStore = ConversationStore.create()
        const chatStore = ChatStore.create()
        return {
                LoginStore:loginStore,
                FriendStore:friendStore,
                ConversationStore:conversationStore,
                ChatStore:chatStore,
        }
}