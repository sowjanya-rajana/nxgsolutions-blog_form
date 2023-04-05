import {
    Button,
    CardContent,
    CardMedia,
    Grid,
    
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { loadFile } from "../Redux/action";
  import { useDispatch, useSelector } from "react-redux";
  import { Card } from "react-bootstrap";
  const Blog_view = () => {
    const { users } = useSelector(
      (state) => state.data
    );
    let dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadFile());
    }, [dispatch]);

    return (
      <>
        <div className="login">
          <h1>Welcome gourav</h1> </div>
          <div>
          <Grid  container columnSpacing={0} >
            <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
          
            {users?.length > 0
              ? users.map((item, key) => {
                  return (
                    // <tr key={key}>
                   
                    <Grid item xs={4} sm={4} md={3} lg={3}>
  
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia sx={{ height: 240 }} image={item.file} />
                        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.location}
          </Typography>
        </CardContent>
                      </Card>
                    </Grid>
                    
  
                    // </tr>
                  );
                })
              : ""}
               </Grid>
      
          </div>
       
      </>
    );
  };
  export default Blog_view;