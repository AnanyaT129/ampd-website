import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExperimentResults from './ExperimentResults';
import Fab from '@mui/material/Fab';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { UserExperiments } from '../models/experiment';

const drawerWidth = 240;

export default function ExperimentsViewer(props: {experiments: UserExperiments}) {
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          maxHeight: '100%',
          flexShrink: 0,
          position: "relative",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: "absolute"
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <Fab variant="extended" color="primary">
            <FileDownloadIcon sx={{ mr: 1 }} />
            Export Data
          </Fab>
          <List>
            {props.experiments.documents.map((doc, index) => (
              <ListItem key={doc.id} disablePadding>
                <ListItemButton onClick={() => setSelected(index)}>
                  <ListItemText primary={doc.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ExperimentResults doc={props.experiments.documents[selected]}></ExperimentResults>
      </Box>
    </Box>
  );
}
