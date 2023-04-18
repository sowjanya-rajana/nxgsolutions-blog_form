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
import { useSelector, useDispatch } from "react-redux";
import DataTable from 'react-data-table-component';
//import { useNavigate, useParams } from "react-router-dom";
import {

  loadblogdata,
  AddBlog,

} from "../Redux/actions/categoryAction";
import { getblogdata, } from "../Redux/actions/blogAction";
import { CardMedia, Skeleton } from '@mui/material';
import { Card } from 'react-bootstrap';




const BlogListView = () => {



  let dispatch = useDispatch();
  // const navigate = useNavigate();

  //let paramData = useParams("id");
  const updateID = 0;

  // const location = useLocation();
  // const searchparam = new URLSearchParams(location.search);
  // let type = searchparam.get("type");

  const {

    // getblogdata,
    getblogloading,
    addStatus,
    blogdata,
    blog,
    errorMessage,
    blogloading,
    // getblogdata,

  } = useSelector((state) => state.blogdata);
  // const { errorMessage } = useSelector((state) => state.data);
  console.log("errorData", errorMessage)

  console.log(blogdata, "useselectorblog")
  const [initialdata, setInitialdata] = useState();
  const i = 0;
  // const blg = blogdata[0]
  const [blogmapping, setBlogmapping] = useState([]);
  const column = [
    {
      name: <b>ID</b>,
      selector: (row) => row.id,
    },
    {
      name: <b>Title</b>,
      selector: (row) => row.Title
    },
    {
      name: <b>BlogCategory</b>,
      selector: (row) => row.blogcategory
    },
    {
      name: <b>Description</b>,
      selector: (row) => row.description
    },
    {
      name: <b>Image</b>,

      selector: (row) => row.image
    }
  ]

  useEffect(() => {
    dispatch(getblogdata());
    setInitialdata(blogdata);
    console.log("check data ");
  }, [dispatch, blogdata.length]);

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

  function todeleteCategory(id) {
    if (window.confirm("Delete the user?")) {
      // dispatch(deleteCategory(id));

    }

  }


  return (
    <>

      <Paper elevation={3} sx={{ width: '98%', overflow: 'hidden', }}>
        {blogloading == true ?
          // <div>
          //     <Typography variant="h6" gutterBottom color="black" sx={{ paddingBottom: 5 }}>
          //         Loading.....
          //     </Typography>
          // </div> 
          <Skeleton variant="rectangular" width="100%" height={400} />
          :
          // <TableContainer component={Paper}>
          //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
          //     <TableHead>
          //       <TableRow>
          //         <TableCell align="center">SNo</TableCell>

          //         <TableCell align="center">Title</TableCell>
          //         <TableCell align="center">blogcategory</TableCell>
          //         {/* <TableCell align="right">description</TableCell> */}
          //         <TableCell align="center">image</TableCell>
          //         <TableCell align="center">Action</TableCell>
          //       </TableRow>
          //     </TableHead>
          //     <TableBody>

          //       {

          //         // blogdata?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          //        blogdata ?.map((row, key) => (

          //           <TableRow
          //             key={row.id}
          //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          //           >
          //             {/* return ( */}
          //             {/* <TableRow key={key}> */}
          //             <TableCell align="center" component="th" scope="row"  >{key + 1} </TableCell>

          //             {/* <TableCell component="th" scope="row"  >{row.id} </TableCell> */}
          //             <TableCell align="center" >{row.Title}</TableCell>
          //             <TableCell align="center">{row.blogcategory}</TableCell>
          //             {/* <TableCell align="center">{row.description}</TableCell> */}


          //             <TableCell align="center">

          //               <Grid item xs={4} sm={4} md={4} lg={4}>
          //                 <Card sx={{ maxWidth: 200 }}>
          //                   <CardMedia sx={{ height: 100 }} image={row.image} />
          //                 </Card>
          //               </Grid>
          //             </TableCell>
          //             {/* <TableCell align="center">{row.status}</TableCell> */}
          //             <TableCell align="center">
          //               <Button ><EditIcon /></Button>
          //               <Button
          //                 type="submit"
          //                 onClick={() => todeleteCategory(row.id)}
          //               > <DeleteIcon /></Button>
          //             </TableCell>

          //           </TableRow>



          //         ))

          //       }

          //     </TableBody>

          //   </Table>
          // </TableContainer>
          <DataTable
            columns={column}
            data={initialdata}
            pagination>

          </DataTable>
        }



      </Paper>


    </>
  );
}

























// <div>
//   <Typography variant="h6" gutterBottom color="red" sx={{ paddingBottom: 5 }}>
//     Blog List
//   </Typography>
// </div>
// <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//   {getblogloading == true ? <div>
//     <Typography variant="h6" gutterBottom color="black" sx={{ paddingBottom: 5 }}>
//       Loading.....
//     </Typography>
//   </div> :

//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>

//             <TableCell align="right">id</TableCell>
//             <TableCell align="right">Title</TableCell>
//             <TableCell align="right">blogcategory</TableCell>
//             {/* <TableCell align="right">description</TableCell> */}



















export default BlogListView;