import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { ChannelDetail, VideoDetail, Search, Navbar, Feed } from './Components';



function App() {
  

   return(
   
    <Router>
    <Box sx={{backgroundColor:'#000'}}>
    <Navbar />
    <Routes>
      <Route path='/' exact element ={<Feed />}  />
      <Route path='/video/:id' element ={<VideoDetail />}  />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<Search />} />
    </Routes>

    </Box>

  </Router>
  
 )
}

export default App
