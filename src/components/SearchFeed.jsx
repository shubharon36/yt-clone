import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function SearchFeed() {

  const [videos,setVideos] = useState([]);

  const {searchTerm} = useParams(); 

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items));

  }, [searchTerm]);

  return (

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Results for <span style={{ color: "#F31503" }}>{searchTerm}</span> 
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
}
