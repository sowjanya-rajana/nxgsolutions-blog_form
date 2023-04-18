import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { loadFile } from "../Redux/actions/dashboardAction";
const Blog_view = () => {
  const { blogview } = useSelector((state) => state.dashboard_data);
  let dispatch = useDispatch();

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
          {  blogview?.length > 0
            ?blogview
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, key) => {
              return (

                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 240 }} image={item.image} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"  sx={{ height: 50 }}>
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary"  sx={{ height: 30 }}>
                        {item.blogcategory}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                




              );
            })
            : ""}
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
