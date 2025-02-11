import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home"
import Blog from "./components/Pages/blog/Blog";
import ATSAllocation from "./components/Pages/allocation/ATSAllocation";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allocation" element={<ATSAllocation />} />
        <Route path="/blogs" element={<Blog/>} />
      </Routes>
    </>
  );
};

export default App;
