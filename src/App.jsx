import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Admin from "./pages/Admin";

function App() {
 return (
  <div className="container mx-auto px-4">
   <header className="flex justify-between items-center py-8">
    <h1 className="text-4xl font-bold">
     <Link to="/">Yt-Channel</Link>
    </h1>
    <nav>
     <Link to="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Admin
     </Link>
    </nav>
   </header>
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
