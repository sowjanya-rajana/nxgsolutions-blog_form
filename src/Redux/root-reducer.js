import { combineReducers } from "redux";
import categoryReducer from "./reducer/categoryReducer";
import blogReducer from "./reducer/blogReducer";

const rootReducer = combineReducers({
  data: categoryReducer,
  blogdata: blogReducer,
});

export default rootReducer;
