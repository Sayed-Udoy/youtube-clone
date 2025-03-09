import { Route, Routes } from "react-router";
import Home from "../src/pages/Home/Home";
import Video from "../src/pages/Video/Video";
import Navbar from "./Components/Nabar/Navbar";
import { useState } from "react";

function App() {
  const [sidebar,setSidebar] = useState(true)

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
