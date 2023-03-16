import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'



const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;