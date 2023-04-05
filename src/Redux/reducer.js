import * as types from "./actionType";

const initialState = {
  users: [],
  blog: [],
  user: {},
  loading: true,
  errorMessage: "",

  deleteusers: [],
  deleteloading: false,

  adduser: [],
  addStatus: "",
  adduserloading: false,

  edituser: [],
  editaddtid: "",
  editloading: false,

  blogdata: [],
  blogloading: false,
  blogstatus: "",

  getblogdata: [],
  getblogloading: false,
  getblogstatus: "",

  usersxyz: [],
  geteditsingleloading: false,
  geteditsinglesuccess: {},
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_BLOG_DATA_REQUEST:
      return {
        ...state,
        blogdata: action.payload,
        blogloading: true,
      };
    case types.ADD_BLOG_DATA_SUCCESS:
      return {
        ...state,
        blogdata: action.payload,

        blogloading: false,
      };
    case types.ADD_BLOG_DATA_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        //console.log("error-addblog", errorMessage),
      }

    case types.GET_BLOG_DATA_REQUEST:
      return {
        ...state,
        blog: action.payload,
        // getblogloading: false,
        getblogloading: true,
      };
    case types.GET_BLOG_DATA_SUCCESS:
      console.log("action.payloadaction.payload", action.payload)
      return {
        //getblogloading: true,
        ...state,
        blog: action.payload,
        getblogloading: false
      };
    case types.GET_BLOG_DATA_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        getblogloading: false
      }
    case types.UPLOAD_IMAGES_REQUEST:
      return {

      }
    case types.UPLOAD_IMAGES_SUCCESS:
      return {

      }









    default:
      return state;
  }
};
export default usersReducer;
