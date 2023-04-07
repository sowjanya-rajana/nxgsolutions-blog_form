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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';






import { useSelector, useDispatch } from "react-redux";
//import { useNavigate, useParams } from "react-router-dom";
import {
    blogloading,
    AddBlog,
} from "../Redux/action";
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

    const [Title, setTitle] = useState("");
    // const [blogcategory, setBlogcategory] = useState("");
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");
    //const [error, seterror] = useState("");
    // const [value, setValue] = useState('');
    const [category, setCategory] = useState('');
    const [metaData, setMetaData] = useState("");
    const [blogTitle, setBlogTitle] = useState("");

    function toaddUser() {
        try {
            let data = { Title, category, description, image, metaData, blogTitle };
            // let updatedata = { name, lastName, email, address, updateID };

            // if (!name || !lastName || !email || !address) {
            //     seterror("please input all the input field");
            // } else {


            dispatch(AddBlog(data));
            console.log("blogdata", data);
            console.log("error", errors);
            // seterror("");
            // setname("");
            // setlastName("");
            // setEmail("");
            // setaddress("");


            // }
        } catch (e) {
            console.log("txed", e);
        }

    }

    function tocancledata() {
        setTitle("");
        //setBlogcategory("");
        setDescription("");
        setImage("");

        setValue("");
        setCategory("");
        setMetaData("");
        setBlogTitle("");


    }



    const handleChange = (event) => {
        console.log("onchange", event);
        setCategory(event.target.value);

    };


    console.log("watch", watch('blogcategory', 'b'))
    return (
        <React.Fragment>




            <form onSubmit={handleSubmit(toaddUser)}>
                <Paper elevation={3} sx={{ marginRight: "30%" }}>
                    {/* <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}> */}
                    <Box sx={{ padding: 5, }}>
                        <Typography variant="h6" textAlign={left} gutterBottom sx={{ paddingBottom: 5 }}>
                            Blog
                        </Typography>

                        <Grid container spacing={3} textAlign={left} >
                            <Grid item xs={12} sm={12}>
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
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    // minLength={3}
                                    // maxLength={50}
                                    color='primary'
                                    id="outlined-error-helper-text"
                                    name="title"
                                    size="small"
                                    justifyContent='left'
                                    // fullWidth
                                    // required
                                    // label="Title*"
                                    placeholder='Category Name '
                                    // type="text"
                                    autoComplete="off"
                                    variant="outlined"

                                    {...register("title", {
                                        required: true,
                                        onChange: (e) => { setTitle(e.target.value); },
                                        value: Title,
                                        maxLength: 50,
                                        minLength: 3,
                                        // autoComplete: "off",
                                        // variant: "outlined",


                                    })}


                                />
                                {errors?.title?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>>>This name is required</p>)}
                                {errors?.title?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                {errors?.title?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>name is too short</p>)}

                            </Grid>







                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: 700
                                    }}
                                >
                                    Image
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button color='primary' variant="outlined" justifyContent='left'>
                                    Choose File
                                    {/* <UploadFileIcon /> */}
                                </Button>
                            </Grid>





















                            {/* </Paper> */}


                            <Grid item xs={12} sm={6} />
                            <Grid item xs={12} sm={5} />
                            <Grid item xs={12} sm={4}  >
                                <Button type="submit" variant="contained" color="primary" sx={{ color: "#e7e9f5" }} marginRight="10px" marginLeft="10px"  >
                                    Save
                                </Button>

                            </Grid>
                            <Grid item xs={12} sm={5} />
                            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                                < CategoryTable />
                            </Box>
                        </Grid>
                    </Box>
                </Paper>
            </form>

        </React.Fragment >
    );
}
export default BlogCategoryForm;