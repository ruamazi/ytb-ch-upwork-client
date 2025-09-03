import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function App() {
 return (
  <div className="container mx-auto px-4">
   <Navbar />
   <main>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/video/:id" element={<VideoPage />} />
     <Route path="/admin" element={<Admin />} />
    </Routes>
   </main>
  </div>
 );
}

export default App;
