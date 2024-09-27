import * as categoryActionType from "../actionType/categoryActionType";

const initialState = {
    users: [],
    blog: {},

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

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {




        case categoryActionType.GET_BLOG_DATA_REQUEST:
            return {
                ...state,
                // blog: action.payload,
                // getblogloading: false,
                getblogloading: true,
            };
        case categoryActionType.GET_BLOG_DATA_SUCCESS:
            console.log("action.payloadaction.payload", action.payload)
            return {
                //getblogloading: true,
                ...state,
                blog: action.payload,
                getblogloading: false
            };
        case categoryActionType.GET_BLOG_DATA_FAIL:
            return {
                ...state,
                errorMessage: action.payload,
                getblogloading: false
            }







        case categoryActionType.CATEGORY_REQUEST:
            return {
                ...state,
                categoryLoading: true,
            }
        case categoryActionType.CATEGORY_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                cate: action.payload
            }







        case categoryActionType.DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                deletecategory: action.payload,
                deleteloading: true,
            };
        case categoryActionType.DELETE_CATEGORY_SUCCESS:
            console.warn("deletecategory", action.payload)
            return {
                ...state,

                // deleteusers: state.users.filter(x=>x.id !== action.payload),
                deletecategory: action.payload,
                deleteloading: false,
            };
        case categoryActionType.EDIT_CATEGORY_REQUEST:
            return {
                ...state,

                editcategoryloading: true,
            };
        case categoryActionType.EDIT_CATEGORY_SUCCESS:
            return {
                ...state,
                editcategory: state.users.map((x) => x.id === action.payload.id ? action.payload : x),
                editstatus: action.status,
                editcategoryloading: false,
            };

        default:
            return state;
    }
};
export default categoryReducer;
