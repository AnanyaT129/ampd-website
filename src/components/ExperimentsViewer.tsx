import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExperimentResults from './ExperimentResults';

import { UserExperiments } from '../models/experiment';
import ExportExperiments from './ExportExperiments';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;

export default function ExperimentsViewer(props: {experiments: UserExperiments}) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
          <ExportExperiments data={props.experiments} snackbarOpen={setOpen}></ExportExperiments>
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
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="File download has begun"
        action={action}
      />
    </Box>
  );
}
