import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../utils/constants';

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    // Applying glassmorphism styles to the Card component, preserving original width
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: "320px" },
        boxShadow: "none",
        borderRadius: '10px', // Rounded corners for the glass effect
        // Glassmorphism styles
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
        backdropFilter: 'blur(10px)', // Apply blur effect to the background
        border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
        color: '#fff', 
        overflow: 'hidden', // Hide overflow for rounded corners
      }}
    >
      {/* Link for the video thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: '100%', // Make image responsive within the card's width
            height: 180,
            objectFit: 'cover', // Ensure image covers the area
          }}
        />
      </Link>

      {/* Card content area */}
      <CardContent
        sx={{
          backgroundColor: 'transparent', // Make content background transparent to see the blur
          height: '106px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Distribute space between title and channel
          padding: '10px', // Add some padding
        }}
      >
        {/* Link for the video title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {/* Display video title, truncated if necessary, with fallback */}
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* Link for the channel title */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='grey' sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Display channel title with fallback */}
            {snippet?.channelTitle || demoChannelTitle}
            {/* Verified icon */}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
