const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MEASSAGE = 'SEND_MEASSAGE';
let initialState = {
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
};
const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MEASSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: ' ',
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MEASSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogReducer;