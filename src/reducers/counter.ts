import { ADD, MINUS,LOGINTYPE } from "../constants/counter";

const INITIAL_STATE = {
  num: 0,
  loginType: true
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    case LOGINTYPE:
      return {
        ...state,
        loginType:action.data
      }
    default:
      return state;
  }
}
