import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Box from '@mui/material/Box';
import Team from '../components/Team';
import Materials from '../components/Materials';


export default function Home () {
    return <div>
        <Header enableLogin={true}></Header>
        <Box component="section" sx={{padding: "5%"}}>
            <Materials></Materials>
            <About></About>
            <Team></Team>
        </Box>
    </div>
}