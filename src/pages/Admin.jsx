import { useEffect, useState } from "react";
import { API_URL } from "./Home";
import Spinner from "../components/Spinner";

const Admin = () => {
 const [videos, setVideos] = useState([]);
 const [title, setTitle] = useState("");
 const [link, setLink] = useState("");
 const [loading, setLoading] = useState(false);

 const loadVideos = async () => {
  setLoading(true);
  try {
   const resp = await fetch(`${API_URL}/api/videos?limit=${100}`);
   const data = await resp.json();
   setVideos(data.videos);
   setLoading(false);
  } catch (error) {
   console.log(error);
   setLoading(false);
  }
 };

 useEffect(() => {
  loadVideos();
 }, []);

 const addVideo = async () => {
  await fetch(`${API_URL}/api/videos`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ title, link }),
  });
  setTitle("");
  setLink("");
  loadVideos();
 };

 const deleteVideo = async (id) => {
  await fetch(`${API_URL}/api/videos/${id}`, {
   method: "DELETE",
  });
  loadVideos();
 };

 if (loading) {
  return <Spinner />;
 }

 return (
  <div className="p-6">
   <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

   {/* Add video form */}
   <div className="mb-6">
    <input
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     placeholder="Title"
     className="border p-2 mr-2 rounded"
    />
    <input
     value={link}
     onChange={(e) => setLink(e.target.value)}
     placeholder="YouTube Link"
     className="border p-2 mr-2 rounded"
    />
    <button
     onClick={addVideo}
     className="bg-green-500 text-white px-4 py-2 rounded"
    >
     Add Video
    </button>
   </div>

   {/* List videos */}
   <div>
    {videos.map((video) => (
     <div
      key={video._id}
      className="flex justify-between items-center border-b py-2"
     >
      <span>{video.title}</span>
      <button
       onClick={() => deleteVideo(video._id)}
       className="bg-red-500 text-white px-3 py-1 rounded"
      >
       Delete
      </button>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Admin;
