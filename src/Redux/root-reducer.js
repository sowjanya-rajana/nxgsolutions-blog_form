import { combineReducers } from "redux";
import categoryReducer from "./reducer/categoryReducer";
import blogReducer from "./reducer/blogReducer";
import dashboardReducer from "./reducer/dashboardReducer";

const rootReducer = combineReducers({
  data: categoryReducer,
  blogdata: blogReducer,
  dashboard_data:dashboardReducer,
});

export default rootReducer;
