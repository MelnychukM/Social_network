const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, hove old do?", numberLike: 55},
                {id: 2, message: "Hey,like ", numberLike: 24},
                {id: 3, message: "Bilabial ", numberLike: 234},
                {id: 4, message: "Bilabial ", numberLike: 234},

            ],
            newPostText: "it_kamasutra.com"
        },
        MessagesPage: {
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

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscride(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //
    //
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         numberLike: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
          let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              numberLike: 0
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.MessagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.MessagesPage.newMessageBody;
            this._state.MessagesPage.newMessageBody = "";
            this._state.MessagesPage.messagesData.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }
    }

}



export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default store;
window.store = store;