import FriendListReducer from './FriendListReducer'
import MainReducer from './MainReducer'
import FabReducer from './FabReducer'
import ConversationReducer from './ConversationReducer'
import ChatReducer from './ChatReducer'

export default function AppReducer() {

    return {
        FriendListReducer:FriendListReducer,
        MainReducer:MainReducer,
        FabReducer:FabReducer,
        ConversationReducer:ConversationReducer,
        ChatReducer:ChatReducer,
    }
}