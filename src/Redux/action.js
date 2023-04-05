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
    axios.get("https://6422806b001cb9fc20282210.mockapi.io/blog").then((res) => {
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


export const loadFile = () => async (dispatch) => {
  dispatch({
    type: types.GET_FILE_REQUEST,
    payload: {},
  });
  try {
    axios.get("http://localhost:3000/apidata").then((response) => {
      dispatch({
        type: types.GET_FILE_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};



// export const uploadImages = (obj) => async (dispatch) => {
//   console.log("formData",obj)
//     dispatch({
//       type: types.UPLOAD_IMAGES_REQUEST,
//       payload: {},
//     });
//   try {
//     const responseofImage = await axios.post(
//       "http://localhost:3000/apidata",
//       obj
//     );
//     console.log("responseofImage",responseofImage)

    
//       dispatch({
//         type: types.UPLOAD_IMAGES_SUCCESS,
//         payload: responseofImage,
//       });
    
//   } catch (error) {
//     dispatch({
//       type: types.UPLOAD_IMAGES_FAILURE,
//       payload: error,
//     });
//   }
// };