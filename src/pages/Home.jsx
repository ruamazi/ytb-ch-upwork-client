import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
 const [videos, setVideos] = useState([]);
 const [page, setPage] = useState(1);
 const [pages, setPages] = useState(1);

 useEffect(() => {
  fetch(`${API_URL}/api/videos?page=${page}`)
   .then((res) => res.json())
   .then((data) => {
    setVideos(data.videos);
    setPages(data.pages);
   });
 }, [page]);

 return (
  <div className="p-6">
   <h1 className="text-3xl font-bold mb-6">Video Gallery</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {videos.map((video) => {
     const videoId = new URL(video.link).searchParams.get("v");
     return (
      <Link
       key={video._id}
       to={`/video/${video._id}`}
       className="shadow-lg rounded-lg overflow-hidden"
      >
       <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={video.title}
        className="w-full"
        loading="lazy"
       />
       <div className="p-2">{video.title}</div>
      </Link>
     );
    })}
   </div>

   {/* Pagination */}
   <div className="flex justify-center mt-6 space-x-2">
    {[...Array(pages).keys()].map((num) => (
     <button
      key={num}
      className={`px-3 py-1 rounded ${
       page === num + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
      onClick={() => setPage(num + 1)}
     >
      {num + 1}
     </button>
    ))}
   </div>
  </div>
 );
};

export default Home;
