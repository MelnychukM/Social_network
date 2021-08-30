
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
    ]

}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})




export default dialogsReducer;