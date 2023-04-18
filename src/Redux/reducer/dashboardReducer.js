import * as dashboardActionType from "../actionType/dashboardActionType";

const initialState = {

    blogview: {},
    blogviewloading: true,
    errorMessage: "",
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        

    case dashboardActionType.GET_FILE_REQUEST:
        return {
          ...state,
          // blogview: action.payload,
          blogviewloading: true,
        };
      case dashboardActionType.GET_FILE_SUCCESS:
        return {
          ...state,
          blogview: action.payload,
          blogviewloading: false,
        };
  
        
      default:
        return state;
    }
  };
  export default dashboardReducer;