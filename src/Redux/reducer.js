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

  categoryLoading:false,
  cate:{},

  isImagesUploading: false,
  images: {},

  deletecategory:{},
  deleteloading: false,

  editcategory:{},
  editcategoryloading:false,


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



    case types.BLOG_IMAGES_REQUEST:
      return {
        ...state,
        isImagesUploading: true,
      }
    case types.BLOG_IMAGES_SUCCESS:
      return {
        ...state,
        isImagesUploading: false,
        images: action.payload
      }



      case types.CATEGORY_REQUEST:
      return {
        ...state,
        categoryLoading: true,
      }
    case types.CATEGORY_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        cate: action.payload
      }





      case types.GET_FILE_REQUEST:
        return {
          ...state,
          users: action.payload,
          loading: true,
        };
      case types.GET_FILE_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };

        case types.DELETE_CATEGORY_REQUEST:
          return {
            ...state,
            deletecategory: action.payload ,
            deleteloading: true,
          };
        case types.DELETE_CATEGORY_SUCCESS:
          console.warn("deletecategory",action.payload)
          return {
            ...state,
           
            // deleteusers: state.users.filter(x=>x.id !== action.payload),
            deletecategory:  action.payload,
            deleteloading: false,
          };
          case types.EDIT_CATEGORY_REQUEST:
            return {
              ...state,
      
              editcategoryloading: true,
            };
          case types.EDIT_CATEGORY_SUCCESS:
            return {
              ...state,
              editcategory:state.users.map((x)=>x.id === action.payload.id ? action.payload: x),
              editstatus: action.status,
              editcategoryloading: false,
            };

    default:
      return state;
  }
};
export default usersReducer;
