import "./App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Screens/Welcome";
import Main from "./Screens/Main";

import RichTextEditor from "./Screens/RichTextEditor";
import TextEditor from "./Screens/TextEditor";

import AppBar from "./Components/BlogAppBar";
import LeftBar from "./Components/LeftBar";
import DashboardScreen from "./Screens/DashboardScreen";
import LinkScreen from "./Screens/LinkScreen";
import CategoryTable from "./Components/CategoryTable";
import BlogCategoryForm from "./Components/BlogCategoryForm";
import AddBlogForm from "./Components/AddBlogForm";
import CategoryScreen from "./Screens/CategoryScreen";
import BlogScreen from "./Screens/BlogScreen";
import BlogListViewScreen from "./Screens/BlogListViewScreen";

function App() {

  // const [value, setValue] = useState('')
  return (
    <>
      <div className="App">

        {/* <TextEditor /><br /> */}
        {/* <BlogView /> */}
        <div>
          {/* {value} */}
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardScreen />} />
            <Route path="/:compo" element={<DashboardScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/category" element={<CategoryScreen />} />
            <Route path="/blog" element={<BlogScreen />} />

            <Route path="/welcome" element={<Welcome />} />
            {/* <Route path="/" element={<Main />} /> */}
            <Route path="/textEditor" element={<RichTextEditor />} />
            <Route path="/blogListView" element={<BlogListViewScreen />} />
            <Route path="/CategoryTable" element={<CategoryTable />} />
            <Route path="/CategoryTable/:id" element={<CategoryTable />} />
            <Route path="/*" element={<div>404 NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
        {/* setValue={setValue} */}
      </div>
    </>
  );
}

export default App;
