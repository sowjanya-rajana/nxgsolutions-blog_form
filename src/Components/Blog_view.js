import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  TablePagination,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { loadFile } from "../Redux/actions/dashboardAction";
import { WidthFull } from "@mui/icons-material";
const Blog_view = () => {
  const { blogview,blogviewloading } = useSelector((state) => state.dashboard_data);
  let dispatch = useDispatch();

console.log("blogviewloading",blogviewloading)

  useEffect(() => {
    dispatch(loadFile());
    
  }, [dispatch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleBlogChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleBlogChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="login">
        <h1>Welcome </h1>{" "}
      </div>
      <Grid container columnSpacing={2} rowSpacing={2}>
{/* {
  blogviewloading==true?"loading":"notloading"
} */}
        
        {
        
        blogviewloading==true?
        <Skeleton variant="rectangular" width="100%" height={400} />

        : blogview
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, key) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    {/* <Tooltip title="EDIT"  disableInteractive> */}
                    




                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 180, WidthFull: 180 }}
                          image={item.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.Title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.blogcategory}
                          </Typography>
                        </CardContent>
                      </Card>
                    {/* </Tooltip> */}




                    
                  </Grid>
                );
              })
        }
      </Grid>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={blogview.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleBlogChangePage}
        onRowsPerPageChange={handleBlogChangeRowsPerPage}
      />
    </>
  );
};
export default Blog_view;
