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
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate, useParams } from "react-router-dom";
import {

  loadblogdata,
  AddBlog,
} from "../Redux/action";




const BlogView = () => {



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

  } = useSelector((state) => state.data);
  // const { errorMessage } = useSelector((state) => state.data);
  console.log("errorData", errorMessage)

  console.log(blog, "useselectorblog")




  useEffect(() => {
    dispatch(loadblogdata());
  }, [dispatch]);

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




  return (
    <>

      <div>
        <Typography variant="h6" gutterBottom color="red" sx={{ paddingBottom: 5 }}>
          Get Blog
        </Typography>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {getblogloading == false ? <div>
          <Typography variant="h6" gutterBottom color="black" sx={{ paddingBottom: 5 }}>
            Loading.....
          </Typography>
        </div> :

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>

                  <TableCell align="right">id</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">blogcategory</TableCell>
                  <TableCell align="right">description</TableCell>
                  <TableCell align="right">image</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                {

                  getblogloading == false ? blog?.map((row, key) => (

                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* return ( */}
                      {/* <TableRow key={key}> */}
                      <TableCell component="th" scope="row"  >{row.id} </TableCell>
                      <TableCell align="right" >{row.Title}</TableCell>
                      <TableCell align="right">{row.blogcategory}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.image}</TableCell>
                    </TableRow>



                  )) : ""
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

      </Paper>

    </>
  );

}
export default BlogView;