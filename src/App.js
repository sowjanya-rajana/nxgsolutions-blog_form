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
import LinkScreen from "./Screens/LinkScreen";
import CategoryTable from "./Components/CategoryTable";

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
            {/* <Route path="/" element={<DashboardScreen />} /> */}
            <Route path="/:compo" element={<DashboardScreen />} />
            {/* <Route path="/nxgecom/:compo" element={<DashboardScreen />} /> */}
            {/* <Route path="/dashboard" element={<L />} /> */}
            <Route path="/welcome" element={<Welcome />} />
            {/* <Route path="/" element={<Main />} /> */}
            <Route path="/textEditor" element={<RichTextEditor />} />
            <Route path="/blogView" element={<BlogView />} />
            <Route path="/CategoryTable" element={<CategoryTable/>}/>
            <Route path="/CategoryTable/:id" element={<CategoryTable/>}/>
          </Routes>
        </BrowserRouter>
        {/* setValue={setValue} */}
      </div>
    </>
  );
}

export default App;
