import { useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';






import { useSelector, useDispatch } from "react-redux";
//import { useNavigate, useParams } from "react-router-dom";
import {
  blogloading,
  AddBlog,
  blogcategoryImages,
  blogcategory,
} from "../Redux/actions/categoryAction";
import { Form } from 'react-bootstrap';
import { left } from '@popperjs/core';
import { textAlign } from '@mui/system';
import CategoryTable from './CategoryTable';





const BlogCategoryForm = () => {
  const editor = useRef(null);
  //const{quill,quillRef}=useQuill();



  let dispatch = useDispatch();
  // const navigate = useNavigate();

  //let paramData = useParams("id");
  const updateID = 0;

  // const location = useLocation();
  // const searchparam = new URLSearchParams(location.search);
  // let type = searchparam.get("type");

  const {

    addStatus,
    blogloading,


  } = useSelector((state) => state.data);
  // const { error } = useSelector((state) => state.data.errorMessage);
  // console.log("errorData", error)


  const { register, handleSubmit, watch, formState: { errors }, setValue, } = useForm();


  useEffect(() => {
    //dispatch(loadUsers());

    // if ("update") {
    //     dispatch(getSingleUser(updateID));
    //     if (geteditsingleloading == false) {
    //         // setname(toeditsinglename);
    //         // setEmail(geteditsinglesuccess.email);
    //         // setaddress(geteditsinglesuccess.address);
    //         // setlastName(geteditsinglesuccess.lastName);
    //     }
    // }
  }, [dispatch, updateID, addStatus]);



  const [category, setCategory] = useState('');

  const [status, setStatus] = useState('Active');

  const [CategorymetaData, setcategoryMetaData] = useState("");
  const [SeoCategoryTitle, setSeoCategoryTitle] = useState("");

  const handleChange = (event) => {
    console.log("onchange", event);
    setCategory(event.target.value);

  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  }


  console.log("watch", watch('blogcategory', 'b'))


  const [blogcategoryImageURL, setblogImage] = useState();
  console.log("blogcategoryImageURL", blogcategoryImageURL);

  const handleblogImage = (e) => {
    const categoryimage = e.target.files[0];
    setblogImage(categoryimage);
  };

  //   const uploadcategoryImg = (e) => {
  //     e.preventDefault();

  //     dispatch(
  //       blogcategory({
  //         file: blogcategoryImageURL,
  //       })
  //     );
  //   };

  const toaddCategory = (e) => {
    try {
      let data = { category, CategorymetaData, status, SeoCategoryTitle, CategorymetaData, blogcategoryImageURL };
      // e.preventDefault();

      dispatch(
        blogcategory(data));



      console.warn("mainpage", data);
    } catch (e) {
      console.warn("category error", e);
    }


  };

  return (
    <React.Fragment>

      <Grid container >
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Paper elevation={3} >
            <form onSubmit={handleSubmit(toaddCategory)}>

              {/* <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}> */}
              <Box sx={{ padding: 5, }}>
                <Typography variant="h6" textAlign={left} gutterBottom sx={{ paddingBottom: 5 }}>
                  Blog Category
                </Typography>

                <Grid container spacing={3} textAlign={left} >
                  <Grid item xs={12} sm={12} md={12} lg={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: 'left',
                        fontWeight: 700,

                      }}
                    >
                      Category Name
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={10}>
                    <TextField
                      // minLength={3}
                      // maxLength={50}
                      color='primary'
                      id="outlined-error-helper-text"
                      name="category"
                      size="small"
                      justifyContent='left'
                      // fullWidth
                      // required
                      // label="Title*"
                      placeholder='Category Name '
                      // type="text"
                      autoComplete="off"
                      variant="outlined"

                      {...register("category", {
                        required: true,
                        onChange: (e) => { setCategory(e.target.value); },
                        value: category,
                        maxLength: 50,
                        minLength: 3,
                        // autoComplete: "off",
                        // variant: "outlined",


                      })}


                    />
                    {errors?.category?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>This name is required</p>)}
                    {errors?.category?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>Name is too long</p>)}
                    {errors?.category?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>name is too short</p>)}

                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        fontWeight: 700
                      }}
                    >
                      Category Image
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={10}>



                    <Grid item xs={12} sm={12} md={12} lg={10}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleblogImage(e)}
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          fontWeight: 700,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10}>
                      {/* <Button onClick={(e) => uploadcategoryImg(e)}>
                Upload
              </Button> */}
                    </Grid>






                  </Grid>


                  <Grid item xs={12} lg={12} md={12} sm={12}>


                    {/* <Box sx={{ padding: 5 }}> */}

                    <Typography
                      variant="h6"
                      textAlign="left"
                      gutterBottom
                      sx={{ paddingBottom: 5 }}

                    >
                      Blog SEO
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={12} lg={2}>
                        <InputLabel
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            fontWeight: 700,
                            // padding: 1,
                          }}
                        >
                          Blog Title
                        </InputLabel>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={10}>
                        <TextField
                          id="blogtitle"
                          name="SeoCategoryTitle"
                          //   label="Enter Blog Title"

                          size="small"
                          autoComplete="off"
                          variant="outlined"
                          placeholder="Blog Title"
                          {...register("SeoCategoryTitle", {
                            required: true,
                            onChange: (e) => {
                              setSeoCategoryTitle(e.target.value);
                            },
                            value: SeoCategoryTitle,
                            maxLength: 50,
                            minLength: 3,
                            // autoComplete: "off",
                            // variant: "outlined",
                          })}
                        />
                        {errors?.blogTitle?.type === "required" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            This is required field
                          </p>
                        )}
                        {errors?.blogTitle?.type === "maxLength" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            Name is too long
                          </p>
                        )}
                        {errors?.blogTitle?.type === "minLength" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            Name is too short
                          </p>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={2}>
                        <InputLabel
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            fontWeight: 700,
                            // padding: 1,
                          }}
                        >
                          Meta Description
                        </InputLabel>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={10}>
                        <TextField
                          id="outlined-multiline-static"
                          //   label="Meta Description"
                          name="CategorymetaData"
                          multiline
                          fullWidth
                          rows={4}
                          placeholder="Meta Description"
                          {...register("CategorymetaData", {
                            required: true,
                            onChange: (e) => {
                              setcategoryMetaData(e.target.value);
                            },
                            value: CategorymetaData,
                            maxLength: 50,
                            minLength: 3,
                            // autoComplete: "off",
                            // variant: "outlined",
                          })}
                        />
                        {errors?.metaData?.type === "required" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            This is required field
                          </p>
                        )}
                        {errors?.metaData?.type === "maxLength" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            Name is too long
                          </p>
                        )}
                        {errors?.metaData?.type === "minLength" && (
                          <p style={{ color: "red", textAlign: "left" }}>
                            Name is too short
                          </p>
                        )}
                      </Grid>
                    </Grid>

                    {/* </Box> */}

                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    {/* <FormControl> */}
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={2}>
                        <FormLabel  >Status</FormLabel>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={10}>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="radio-buttons-group"
                          value={status}
                          onChange={handleStatus}
                        >
                          <FormControlLabel value="Active" control={<Radio />} label="Active" />
                          <FormControlLabel value="Draft" control={<Radio />} label="Draft" />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                    {/* </FormControl> */}

                  </Grid>

                  {/* </Paper> */}

                  <Grid item xs={12} sm={6} />
                  <Grid item xs={12} sm={5} />
                  <Grid item xs={12} sm={4}  >
                    <Button type="submit" variant="contained" color="primary" sx={{ color: "#e7e9f5" }} marginRight="10px" marginLeft="10px"
                    >
                      Save
                    </Button>

                  </Grid>
                </Grid>
              </Box>
            </form>
            <Grid item xs={12} sm={5} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              < CategoryTable categorydata={{ name: { category }, image: { blogcategoryImageURL }, status: { status } }} />
            </Box>

          </Paper>

        </Grid>
      </Grid>
    </React.Fragment >
  );
}
export default BlogCategoryForm;

