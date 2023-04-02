import * as types from "./actionType";
import axios from "axios";




export const AddBlog = (blogdata) => (dispatch) => {
  dispatch({
    type: types.ADD_BLOG_DATA_REQUEST,
    payload: {},
  });
  try {
    axios.post("https://6422806b001cb9fc20282210.mockapi.io/blog", blogdata).then((res) => {
      console.log("blog data", res);
      dispatch({
        type: types.ADD_BLOG_DATA_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log("error-addblog", error.message);
    dispatch({
      type: types.ADD_BLOG_DATA_FAIL,
      payload: error.message,

    });
  }
};


export const loadblogdata = () => async (dispatch) => {
  console.log("checkkkkblogload",)
  dispatch({
    type: types.GET_BLOG_DATA_REQUEST,

    payload: {},

  });
  try {
    axios.get("https://6422806b001cb9fc20282210.mockapi.io/blo").then((res) => {
      console.log("blogrequest", res)
      dispatch({
        type: types.GET_BLOG_DATA_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log("error-Loadblog", error.toJSON().message);
    console.log("errorblogggggggggggggggg", error.message);
    dispatch({
      type: types.GET_BLOG_DATA_FAIL,
      payload: error.message,


    });
  }

};
