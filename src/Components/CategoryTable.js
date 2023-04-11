import { useEffect } from 'react';
import { Link } from "react-router-dom";
import * as React from "react";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import BorderColorIcon from '@material-ui/icons/BorderColor';
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate, useParams } from "react-router-dom";
import {

    loadblogdata,
    AddBlog,
} from "../Redux/action";
import { CardMedia, Skeleton } from '@mui/material';
import { Card } from 'react-bootstrap';




const CategoryTable = () => {



    let dispatch = useDispatch();
    // const navigate = useNavigate();

    //let paramData = useParams("id");
    const updateID = 0;

    // const location = useLocation();
    // const searchparam = new URLSearchParams(location.search);
    // let type = searchparam.get("type");

    const {

        getblogdata,
        getblogloading,
        addStatus,
        blogdata,
        blog,
        errorMessage,
        categoryLoading,
        cate

    } = useSelector((state) => state.data);
    // const { errorMessage } = useSelector((state) => state.data);
    console.log("errorData", errorMessage)

    console.log(blog, "useselectorblog")




    useEffect(() => {
        dispatch(loadblogdata());
    }, [dispatch,cate,categoryLoading]);

    // const [Title, setTitle] = useState("");
    // const [blogcategory, setBlogcategory] = useState("");
    // const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");
    // const [error, seterror] = useState("");
    // // const [value, setValue] = useState('');
    // const [category, setCategory] = useState('');
    // const [metaData, setMetaData] = useState("");
    // const [blogTitle, setBlogTitle] = useState("");

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    console.log("pagge", page * rowsPerPage + rowsPerPage);



    return (
        <>



            <Paper elevation={3} sx={{ width: '98%', overflow: 'hidden', }}>
                {getblogloading == true ?
                    // <div>
                    //     <Typography variant="h6" gutterBottom color="black" sx={{ paddingBottom: 5 }}>
                    //         Loading.....
                    //     </Typography>
                    // </div> 
                    <Skeleton variant="rectangular" width="100%" height={400} />
                    :

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell align="center">SNo</TableCell>
                                    <TableCell align="center">Category</TableCell>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Action</TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {

                                    blog
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, key) => (

                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                {/* return ( */}
                                                {/* <TableRow key={key}> */}
                                                <TableCell align="center" component="th" scope="row"  >{key + 1} </TableCell>

                                                <TableCell align="center">{row.category}</TableCell>

                                                <TableCell align="center">
                                                    
                                                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardMedia sx={{ height: 100 }} image ={row.blogcategoryImageURL} />
                                                    </Card>
                                                    </Grid>
                                                    </TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
                                                <TableCell align="center">
                                                    <Button ><EditIcon /></Button>
                                                    <Button> <DeleteIcon /></Button>
                                                </TableCell>

                                            </TableRow>



                                        ))

                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                {/* <TableBody>
          {blog.length > 0
            ? blog.map((users, key) => {
              return (
                <tr key={key}>
                  <td>{users.Title}</td>

                </tr>
              );
            })
            : ""}
        </TableBody> */}

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={blog.length}

                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </Paper>

        </>
    );

}
export default CategoryTable;