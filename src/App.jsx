import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Admin from "./pages/Admin";

function App() {
 return (
  <div className="container">
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/video/:id" element={<VideoPage />} />
    <Route path="/admin" element={<Admin />} />
   </Routes>
  </div>
 );
}

export default App;
