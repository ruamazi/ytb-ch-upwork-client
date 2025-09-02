import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./Home";
import Spinner from "../components/Spinner";

const VideoPage = () => {
 const { id } = useParams();
 const [video, setVideo] = useState(null);

 useEffect(() => {
  fetch(`${API_URL}/api/videos/${id}`)
   .then((res) => res.json())
   .then(setVideo);
 }, [id]);

 if (!video) return <Spinner size="medium" />;

 const videoId = new URL(video.link).searchParams.get("v");

 return (
  <div className="p-6 flex flex-col items-center">
   <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
   <iframe
    className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
    src={`https://www.youtube.com/embed/${videoId}`}
    title={video.title}
    allowFullScreen
   />
  </div>
 );
};

export default VideoPage;
