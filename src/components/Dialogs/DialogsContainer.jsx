import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsConteiner = () => {
//     return <StoreContext.Consumer>
//         {store => {
//
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             MessagesPage={store.getState().MessagePage}/>
//
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {

    return {
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }

    }
}


const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsConteiner;