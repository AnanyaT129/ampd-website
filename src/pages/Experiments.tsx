import React from 'react';

import Header from '../components/Header';
import Box from '@mui/material/Box';

import data from '../demoData.json';
import { UserExperiments } from '../models/experiment';
import ExperimentsViewer from '../components/ExperimentsViewer';

export default function Experiments () {
    const experiments = data as unknown as UserExperiments

    return <div>
            <Header enableLogin={false}></Header>
            <Box component="section" sx={{padding: "5%"}}>
                <ExperimentsViewer experiments={experiments}></ExperimentsViewer>
            </Box>
        </div>
}