import {combineReducers} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
const {createStore} = require("redux");
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
    });
let store = createStore (reducers);
window.store = store;

export default store;