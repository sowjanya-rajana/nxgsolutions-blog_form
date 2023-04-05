import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Screens/Welcome";
import Main from "./Screens/Main";

import RichTextEditor from "./Screens/RichTextEditor";
import TextEditor from "./Screens/TextEditor";
import BlogView from "./Screens/BlogView";
import AppBarAddBlog from "./Components/AppBarAddBlog";
import LeftBar from "./Components/LeftBar";
import DashboardScreen from "./Screens/DashboardScreen";

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
            <Route path="/dashboard" element={<DashboardScreen />} />

            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Main />} />
            <Route path="/textEditor" element={<RichTextEditor />} />
            <Route path="/blogView" element={<BlogView />} />
          </Routes>
        </BrowserRouter>
        {/* setValue={setValue} */}
      </div>
    </>
  );
}

export default App;
