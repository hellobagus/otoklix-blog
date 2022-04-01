import { State } from '../interfaces';

const initialState: State = {
  posts: [],
  post: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_POSTS_LIST':
      return {
        ...state,
        posts: action.payload,
      };
    case 'GET_POST':
      return {
        ...state,
        post: action.payload,
      };
    case 'POST_CREATE_POST':
      return {
        ...state,
      };
    case 'POST_CREATE_POST_COMMENTS':
      return {
        ...state,
      };
    case 'PUT_UPDATE_POST':
      return {
        ...state,
      };
    case 'DELETE_POST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
