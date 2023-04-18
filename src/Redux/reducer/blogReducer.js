import * as blogActionType from "../actionType/blogActionType";

const initialState = {
 
  deleteusers: [],
  deleteloading: false,

  adduser: [],
  addStatus: "",
  adduserloading: false,

  edituser: [],
  editaddtid: "",
  editloading: false,

  blogdata: {},
  blogloading: false,
  blogstatus: "",

  getblogdata: [],
  getblogloading: true,
  getblogstatus: "",

  usersxyz: [],
  geteditsingleloading: false,
  geteditsinglesuccess: {},
  error: "",

  categoryLoading: false,
  cate: {},

  isImagesUploading: false,
  images: {},

  deletecategory: {},
  deleteloading: false,

  editcategory: {},
  editcategoryloading: false,

  sucessStatus: ""
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {

    case blogActionType.ADD_BLOG_DATA_REQUEST:
      return {
        ...state,
        blogdata: action.payload,
        blogloading: true,
      };

    case blogActionType.ADD_BLOG_DATA_SUCCESS:
      return {
        ...state,
        blogdata: action.payload,

        blogloading: false,
        sucessStatus: action.postStatus
      };

    case blogActionType.ADD_BLOG_DATA_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        //console.log("error-addblog", errorMessage),
      };

    case blogActionType.GET_BLOG_REQUEST:
      return {
        ...state,
        // blog: action.payload,
        // getblogloading: false,
        blogloading: true,
      };

    case blogActionType.GET_BLOG_SUCCESS:
      console.log("blogdata", action.payload)
      return {
        //getblogloading: true,
        ...state,
        blogdata: action.payload,
        blogloading: false
      };







    case blogActionType.BLOG_IMAGES_REQUEST:
      return {
        ...state,
        isImagesUploading: true,
      }
    case blogActionType.BLOG_IMAGES_SUCCESS:
      return {
        ...state,
        isImagesUploading: false,
        images: action.payload
      }

      
    default:
      return state;
  }
};
export default blogReducer;
