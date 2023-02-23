import profileReducer from "./profile-reduser";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: 23},
                {id: 1, message: "It's my first post", likesCount: 26},
                {id: 0, message: 'Nice hud', likesCount: 29},
                {id: 0, message: 'Scheisse Blazkowicz', likesCount: 1}
            ],
            newPostText: 'hello world'
        },

        dialogsPage: {
            dialogs: [
                {id: 0, name: 'Danila'},
                {id: 1, name: 'Mark'},
                {id: 2, name: 'Richard'},
                {id: 3, name: 'Viktoria'},
                {id: 4, name: 'Yulia'}
            ],
            messages: [
                {id: 0, message: 'privet'},
                {id: 1, message: 'Ya ustal'},
                {id: 2, message: 'Kak ono?'},
                {id: 3, message: 'Tyazhelo'},
                {id: 4, message: 'Mozhesh raschitivat na menya'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //патерн наблюдатель publishesubscriber
    },
    dispatch(action) {//{type:'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
        }
}





export default store;
window.store = store;