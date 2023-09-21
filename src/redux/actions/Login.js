import axios from "axios";
import { Constants } from "../constants/Contants";
export const fetchUserList = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=3&size=5`);
    console.log(data,"bfx");
    dispatch({
      type: Constants.FETCH_USERLIST,
      payload: data,
    });
  } catch (error) {}
};
