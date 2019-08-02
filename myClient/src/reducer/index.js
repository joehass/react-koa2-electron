import FriendListReducer from './FriendListReducer'
import MainReducer from './MainReducer'
import FabReducer from './FabReducer'

export default function AppReducer() {

    return {
        FriendListReducer:FriendListReducer,
        MainReducer:MainReducer,
        FabReducer:FabReducer
    }
}