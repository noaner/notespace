import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from './actions';

import {
  WELCOME,
  INSTRUCTIONS,
  MARKDOWN
} from './constants';

const initialState = [
  { id: 0, text: WELCOME },
  { id: 1, text: INSTRUCTIONS },
  { id: 2, text: MARKDOWN },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case ADD_NOTE:
    return [
      {
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
        text: 'New note!'
      },
      ...state,
    ];
  case DELETE_NOTE:
    return state.filter(note => note.id !== action.id);
  case EDIT_NOTE:
    return state.map(note =>
      note.id === action.id ? { ...note, text: action.text } : note
    );
  default:
    return state;
  }
}
