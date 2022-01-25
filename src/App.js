import React from "react";
import Header from "./components/Header";
import { Home } from "./components/home/Home";
import Detailview from "./components/PostDetails/Detailview";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Box } from "@mui/system";
import './index.css';



function App() {
  return (
    <div className="Font">
      <BrowserRouter >
        <Header/>
        <Box style={{margin:64}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/postdetails' element={<Detailview/>}/>
          </Routes>
        </Box>

      </BrowserRouter>
    </div>
  );
}

export default App;



