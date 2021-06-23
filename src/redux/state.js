let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, hove old do?", numberLike: 55},
                {id: 2, message: "Hey,like ", numberLike: 24},
                {id: 3, message: "Blabla ", numberLike: 234},

            ],
            newPostText: "it_kamasutra.com"
        },
        MessagesPage: {
            dialogsData: [
                {id: 1, name: "Valera"},
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

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State cganged');
    },
    addPost() {


        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            numberLike: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscride(observer) {
        this._callSubscriber = observer;
    }
}



export default store;
window.store = store;