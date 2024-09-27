import * as types from "../actionType/blogActionType";
import axios from "axios";

export const AddBlog = (blogdata) => (dispatch) => {
    dispatch({
        type: types.ADD_BLOG_DATA_REQUEST,
        payload: {},
    });
    try {
        axios
            .post("https://6422806b001cb9fc20282210.mockapi.io/blog", blogdata)
            .then((res) => {
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

export const getblogdata = () => async (dispatch) => {
    console.log("checkkkkblogload");
    dispatch({
        type: types.GET_BLOG_REQUEST,

        // payload: {},
    });
    try {
        axios
            .get("https://6422806b001cb9fc20282210.mockapi.io/blog")
            .then((res) => {
                console.log("blogdatarequest", res);
                dispatch({
                    type: types.GET_BLOG_SUCCESS,
                    payload: res.data,
                });
            });
    } catch (error) {
        console.log("error-Loadblog", error.toJSON().message);
        console.log("blogerror", error.message);
        dispatch({
            type: types.GET_BLOG_FAIL,
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












