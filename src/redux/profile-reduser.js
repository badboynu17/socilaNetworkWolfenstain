const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE ';
let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 23},
        {id: 1, message: "It's my first post", likesCount: 26},
        {id: 0, message: 'Nice hud', likesCount: 29},
        {id: 0, message: 'Scheisse Blazkowicz', likesCount: 1}
    ],
    newPostText: 'hello world',
    profile: null
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts : [...state.posts,newPost],
                newPostText : ' '
            };


        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText}};
            case SET_USER_PROFILE:{
                return {...state,profile:action.profile}

        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;
