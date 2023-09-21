import { Constants } from "../constants/Contants";

const initialState = {
  userList: [],
};
export const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Constants.FETCH_USERLIST:
      return { ...state, userList: payload };

    default:
      return state;
  }
};