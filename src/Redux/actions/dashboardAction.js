import * as types from "../actionType/dashboardActionType";
import axios from "axios";

export const loadFile = () => async (dispatch) => {
    dispatch({
        type: types.GET_FILE_REQUEST,
        payload: {},
    });
    try {
        axios.get("https://6422806b001cb9fc20282210.mockapi.io/blog").then((response) => {
            console.log("ssssssssssssss",response)
            dispatch({
                type: types.GET_FILE_SUCCESS,
                payload: response.data,
            });
        });
    } catch (error) {
        console.log(error);
    }
};