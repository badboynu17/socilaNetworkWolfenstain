const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
            ]
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;
window.store = store;