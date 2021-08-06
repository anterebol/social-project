const addPostCreate = 'ADD-POST';
const updatePostCreator = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [{id: 1, post: 'Hi, how are you?', likes: "11"},
            {id: 2, post: "It's my first post", likes:"3"},
      ],
      newPostText : 'add messege',
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case addPostCreate :
      let newPost = {
        id: 4,
        post : state.newPostText,
        likes: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;
    case updatePostCreator:  
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  }
  
}

export const addPostActionCreator = () => {
  return {type: addPostCreate};
}

export const updateNewPostTextActionCreator = (text) => {
  return {type: updatePostCreator, newText : text};
}

export default profileReducer;