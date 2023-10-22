import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fechPosts() {
      const response = await axios.get("/v2/post", {
        headers: {
          Accept: "*/*, application/json, text/plain",
        },
      });
      setVideos(response.data);

      return response;
    }

    fechPosts();
  }, []);

  console.log(videos)
  return (
    <div className="app">
      <div className="video__container">
        {
          <Video           
            
          />
        }
      </div>
    </div>
  );
}

export default App;
