const updateNewMessegeTextCreate = 'UPDATE-NEW-MESSEGE-TEXT';
const addNewMessegeCreate = 'ADD-NEW-MESSEGE';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case updateNewMessegeTextCreate : 
      state.newTextMessege = action.messegeText;
      return state;
    case addNewMessegeCreate :
      let newMessege = {
        id : 4,
        messege : state.newTextMessege,
      }
      state.messegesData.push(newMessege);
      state.newTextMessege = '';
      return state;
    default : 
      return state;
  }
}

export const updateNewMessegeTextCreator = (text) => {
  return {type: updateNewMessegeTextCreate, messegeText: text};
}

export const addNewMessegeCreator = () => {
  return {type: addNewMessegeCreate};
}

export default dialogReducer;