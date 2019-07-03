import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE ={
  user:{},
};

// flow from action will come here and find action type then perform opn as required

const userReducer = (state = INITIAL_STATE, action={}) =>{
  switch (action.type) {
    case actionTypes.CREATE_LOGIN_SUCCESS:
      return {
        user: action.payload.response,
      };

    case actionTypes.CREATE_LOGIN_ERROR:
      return {
        user: action,
      };
    default:
      return state
  }
}

export default userReducer;