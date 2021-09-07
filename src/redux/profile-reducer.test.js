import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {act} from "@testing-library/react";

let state = {
    posts: [
        {id: 1, message: "Hey, hove old do?", numberLike: 55},
        {id: 2, message: "Hey,like ", numberLike: 24},
        {id: 3, message: "Bilabial ", numberLike: 234},
        {id: 4, message: "Bilabial ", numberLike: 234},

    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");


    // 2. action
    let newState = profileReducer(state,action);


    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");

});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);

});

test('after deleting length of messages should be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);

});
