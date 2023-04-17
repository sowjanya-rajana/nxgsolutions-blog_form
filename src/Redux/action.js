import * as types from "./actionType";
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

export const loadblogdata = () => async (dispatch) => {
  console.log("checkkkkblogload");
  dispatch({
    type: types.GET_BLOG_DATA_REQUEST,

    // payload: {},
  });
  try {
    axios
      .get("http://192.168.1.20:8080/blog/blogcategory")
      .then((res) => {
        console.log("blogrequest", res);
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

export const blogImages = (obj) => async (dispatch) => {
  console.log("formData", obj);
  dispatch({
    type: types.BLOG_IMAGES_REQUEST,
    payload: {},
  });
  try {
    const responseofImage = await axios.post(
      "http://localhost:3000/apidata",
      obj
    );
    console.log("responseofImage", responseofImage);

    dispatch({
      type: types.BLOG_IMAGES_SUCCESS,
      payload: responseofImage,
    });
  } catch (error) {
    dispatch({
      type: types.BLOG_IMAGES_FAILURE,
      payload: error,
    });
  }
};

export const blogcategory = (obj) => async (dispatch) => {
  console.warn("formData", obj);
  const data = {
    categoryName: obj.category,
    seoTitle: obj.SeoCategoryTitle,
    seoMetaDesc: obj.CategorymetaData,
    imgData: obj.blogcategoryImageURL,
  };

  let formData = new FormData();
  formData.append("categoryName", obj.category);
  formData.append("seoTitle", obj.SeoCategoryTitle);
  formData.append("seoMetaDesc", obj.CategorymetaData);
  formData.append("imgData", obj.blogcategoryImageURL);

  dispatch({
    type: types.CATEGORY_REQUEST,
    payload: {},
  });
  try {
    // const responseofImage = await axios.post(
    //   "http://192.168.1.20:8080/blog/blogcategoryvalue",
    //   formData
    // );
    // console.log("responseofImage", responseofImage);
    var requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    var formdata = new FormData();
    formdata.append("categoryName", obj.category);
    formdata.append("seoTitle", obj.SeoCategoryTitle);
    formdata.append("seoMetaDesc",obj.CategorymetaData);
    formdata.append(
      "imgData",
      obj.blogcategoryImageURL
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://192.168.1.20:8080/blog/blogcategoryvalue", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    dispatch({
      type: types.CATEGORY_SUCCESS,
      payload: [],
    });
  } catch (error) {
    dispatch({
      type: types.CATEGORY_FAILURE,
      payload: error,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_CATEGORY_REQUEST,
    payload: {},
  });
  try {
    axios
      .delete(
        `https://64350b2c83a30bc9ad569355.mockapi.io/categories/categories/${id}`
      )
      .then((response) => {
        dispatch({
          type: types.DELETE_CATEGORY_SUCCESS,
          payload: response.data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = (data, id) => async (dispatch) => {
  dispatch({
    type: types.EDIT_CATEGORY_REQUEST,
    payload: {},
  });

  // var apiobj={
  //   name:obj.name,
  //   lastName:obj.lastName,
  //   address:obj.address,
  //   email:obj.email,
  //   updateID:parseInt(obj.updateID)
  // }
  try {
    axios
      .put(
        `https://64350b2c83a30bc9ad569355.mockapi.io/categories/categories/${id}`,
        data
      )
      .then((response) => {
        console.log("edit category", response);
        dispatch({
          type: types.EDIT_CATEGORY_SUCCESS,
          payload: response.data,
          status: response.status,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
