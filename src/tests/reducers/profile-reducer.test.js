import profileReducer, {addPost, deletePost, setUserStatus} from "../../Redux/profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post.', likesCount: 3},
        {id: 3, message: 'Yo', likesCount: 42}
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    let action = addPost("Hello")

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
});
test('message of new post should be same length', () => {
    let action = addPost("Hello")

    let newState = profileReducer(initialState, action)

    expect(newState.posts[3].message).toBe("Hello")
});
test('after deleting length of posts should be decremented', () => {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
});
test('incorrect user id for deleting post', () => {
    let action = deletePost(null)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
});
test('change status correct', () => {
    let status = 'I\'m happy tomato'
    let action = setUserStatus(status)

    let newState = profileReducer(initialState, action)

    expect(newState.status).toBe(status)
});