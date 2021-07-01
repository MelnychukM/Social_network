const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: "Nasty"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Nikita"},
        {id: 4, name: "Nazar"},
        {id: 5, name: "Misha"},
        {id: 6, name: "Andrey"}
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your likes?"},
        {id: 3, message: "Hi, how are you"},
        {id: 4, message: "Like your brother"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ],
    newMessageBody: ""

}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;