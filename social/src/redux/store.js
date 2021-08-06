import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navBarReducer from './navbar-reducer';


let store = {
  _rerenderPage() {
    console.log('change');
  },
  _state : {
    profilePage : {
      postsData: [{id: 1, post: 'Hi, how are you?', likes: "11"},
            {id: 2, post: "It's my first post", likes:"3"},
      ],
      newPostText : 'add messege',
    },
    messegePage : { 
      DialogData: [{id: 1, name: 'Dima'},
        {id: 2, name: 'Vitya'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Ira'},
      ],
    messegesData: [{id: 1, messege: 'Hi'},
      {id: 2, messege: 'How are you?'},
      {id: 3, messege: 'Ok'},
    ],
    newTextMessege : '',
    },
  navBar : {
    friends : [{id: 1, name: 'Sveta'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Kiril'}],
  }
},
  getState () {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderPage = observer;
  },

  dispatch(action) {

    this._state.messegePage = dialogReducer(this._state.messegePage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._rerenderPage(this._state);
    
  },
}

export default store;
