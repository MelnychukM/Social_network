import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action);
        this._callSubscriber(this._state);
    }

}







export default store;
window.store = store;