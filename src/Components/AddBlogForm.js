import { useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
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
import { Skeleton } from '@mui/material';



const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all"
];

const AddBlogForm = () => {
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
                    <Box sx={{ padding: 5 }}>
                        <Typography variant="h6" textAlign={'left'} gutterBottom sx={{ paddingBottom: 5 }}>
                            Add Blog
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: 700
                                    }}
                                >
                                    Title
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    // minLength={3}
                                    // maxLength={50}
                                    id="outlined-error-helper-text"
                                    name="title"
                                    size="small"
                                    fullWidth
                                    // required
                                    label="Title*"
                                    placeholder='Enter Your Name'
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
                                    Blog Category
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label"  >Category Type* </InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={category}
                                        label="Category Type* "
                                        placeholder='Select Category'
                                        textAlign='left'

                                        {...register("blogcategory", {
                                            required: true,
                                            onChange: handleChange,
                                            // value: blogcategory,
                                            //     // maxLength: 50,
                                            //     // minLength: 3,
                                            //     // autoComplete: "off",
                                            //     // variant: "outlined",
                                            // onChange: handleChange(),
                                            //     onChange: (e) => { setCategory(e.target.value); },
                                            value: category,


                                        })}
                                    // onChange={handleChange}

                                    >
                                        {categories.map((item) => (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        ))}

                                    </Select>
                                    {/* <FormHelperText>Error</FormHelperText> */}
                                    {console.log("errorcategory", errors)}
                                    {category ? "" : errors?.blogcategory?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>>>This is required field</p>)}
                                    {/* {errors?.blogcategory?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                    {errors?.blogcategory?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>name is too short</p>)} */}

                                </FormControl>

                            </Grid>




                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: 700
                                    }}
                                >
                                    Image Upload
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button variant="outlined" justifyContent='center'>
                                    Choose File
                                    {/* <UploadFileIcon /> */}
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{

                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: 700
                                    }}
                                >
                                    Image URL
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField

                                    id="imgUrl"
                                    name="imgUrl"
                                    label="Enter Image URL* "
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    {...register("imgUrl", {
                                        required: true,
                                        onChange: (e) => { setImage(e.target.value); },
                                        value: image,
                                        maxLength: 50,
                                        minLength: 3,
                                        // autoComplete: "off",
                                        // variant: "outlined",


                                    })}
                                />
                                {errors?.imgUrl?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}> >>This  is required field</p>)}
                                {errors?.imgUrl?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                {errors?.imgUrl?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>name is too short</p>)}



                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: 700
                                    }}
                                >
                                    Discription
                                </InputLabel>
                            </Grid>

                            <Grid item xs={12} sm={10}>
                                <FormControl fullWidth size="small">
                                    <ReactQuill theme="snow" style={{ height: 300 }}

                                        {...register("description", {
                                            required: true,


                                            maxLength: 50,
                                            minLength: 3,
                                            // autoComplete: "off",
                                            // variant: "outlined",


                                        })}
                                        value={description} onChange={setDescription}
                                    />

                                    {console.log("description", description)}
                                    {description ? "" : errors?.description?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>>>This  is required field</p>)}
                                    {errors?.description?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                    {errors?.description?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too short</p>)}

                                </FormControl>



                            </Grid>



                            <Grid item xs={12} sm={6} />
                            <Grid item xs={12} sm={5} />
                            {/* <Grid item xs={12} sm={4}>
                            <Button variant="contained" sx={{ color: "#ff781f" }} onClick={() => toaddUser()}>
                                Save
                            </Button>
                        </Grid> */}
                            <Grid item xs={12} sm={5} />
                        </Grid>
                    </Box>
                </Paper>

                <Paper elevation={3} sx={{ marginRight: "30%", marginTop: "2%", marginBottom: "2%" }}>
                    <Box sx={{ padding: 5 }}>
                        <Typography variant="h6" textAlign="left" gutterBottom sx={{ paddingBottom: 5 }}>
                            Blog SEO
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Blog Title
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField

                                    id="blogtitle"
                                    name="blogtitle"
                                    label="Enter Blog Title"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    {...register("blogTitle", {
                                        required: true,
                                        onChange: (e) => { setBlogTitle(e.target.value); },
                                        value: blogTitle,
                                        maxLength: 50,
                                        minLength: 3,
                                        // autoComplete: "off",
                                        // variant: "outlined",


                                    })}



                                />
                                {errors?.blogTitle?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>>>This  is required field</p>)}
                                {errors?.blogTitle?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                {errors?.blogTitle?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too short</p>)}

                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Meta Discription
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Meta Description"
                                    name="metadata"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    {...register("metaData", {
                                        required: true,
                                        onChange: (e) => { setMetaData(e.target.value); },
                                        value: metaData,
                                        maxLength: 50,
                                        minLength: 3,
                                        // autoComplete: "off",
                                        // variant: "outlined",


                                    })}


                                />
                                {errors?.metaData?.type === "required" && (<p style={{ color: "red", textAlign: "left" }}>>>This  is required field</p>)}
                                {errors?.metaData?.type === "maxLength" && (<p style={{ color: "red", textAlign: "left" }}>>>Name is too long</p>)}
                                {errors?.metaData?.type === "minLength" && (<p style={{ color: "red", textAlign: "left" }}>>>name is too short</p>)}

                            </Grid>

                        </Grid>

                    </Box>
                </Paper>

                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={5} />



                <Box display="flex" justifyContent="center">

                    <Grid item xs={12} sm={4}   >
                        <Stack direction="row" spacing={2}>
                            <Button type="submit" variant="contained" color="primary" sx={{ color: "#e7e9f5" }}    >
                                Save
                            </Button>
                            <Button variant="contained" color="warning" sx={{ color: "#e7e9f5" }} onClick={() => tocancledata()}>
                                Cancle
                            </Button>
                            <Link to="/blogView ">
                                <Button variant="contained" color="primary" sx={{ color: "#e7e9f5" }}  >
                                    List View
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Box>
                <Grid item xs={12} sm={5} />

            </form>

        </React.Fragment>
    );
}
export default AddBlogForm;