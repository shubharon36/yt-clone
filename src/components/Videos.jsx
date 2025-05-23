import React from 'react'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

import { Stack,Box } from '@mui/material'

export default function Videos({videos,direction}) {

  if(!videos?.length) return 'Loading...';


  return (

    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>

  )
}
