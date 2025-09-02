import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import HeroSection from "../components/HeroSection";

export const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
 const [videos, setVideos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [pages, setPages] = useState(1);

 useEffect(() => {
  fetch(`${API_URL}/api/videos?page=${page}`)
   .then((res) => res.json())
   .then((data) => {
    setVideos(data.videos);
    setPages(data.pages);
    setLoading(false);
   });
 }, [page]);

 if (loading) {
  return <Spinner />;
 }
 if (videos.length === 0) {
  return <h1 className="text-3xl font-bold mb-6 text-center">No Videos</h1>;
 }

 return (
  <>
   <HeroSection />
   <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Video Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     {videos.map((video) => {
      const videoId = new URL(video.link).searchParams.get("v");
      return (
       <Link
        key={video._id}
        to={`/video/${video._id}`}
        className="bg-orange-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
       >
        <img
         src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
         alt={video.title}
         className="w-full h-48 object-cover"
         loading="lazy"
        />
        <div className="p-4">
         <h3 className="font-bold text-lg truncate">{video.title}</h3>
        </div>
       </Link>
      );
     })}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-12 space-x-4">
     {[...Array(pages).keys()].map((num) => (
      <button
       key={num}
       className={`px-4 py-2 rounded-full font-bold transition-colors duration-300 ${
        page === num + 1
         ? "bg-blue-500 text-white"
         : "bg-gray-700 hover:bg-gray-600"
       }`}
       onClick={() => setPage(num + 1)}
      >
       {num + 1}
      </button>
     ))}
    </div>
   </div>
  </>
 );
};

export default Home;
