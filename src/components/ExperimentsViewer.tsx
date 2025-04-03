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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
  }),
  flexGrow: 1,
}));

export const reformatDate = (title: string) => {
  const title_split = title.split("_", 2);
  const year = title_split[0].substring(0, 4)
  const month = title_split[0].substring(4, 6)
  const day = title_split[0].substring(6)

  const hour = title_split[1].substring(0, 2)
  const min = title_split[1].substring(2)

  return (month + "/" + day + "/" + year + " " + hour + ":" + min)
}

export function ExperimentsViewer(props: {experiments: UserExperiments}) {
  const [selected, setSelected] = useState([0]);
  const [open, setOpen] = React.useState(false);
  const [compareView, setCompareView] = useState(false)

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const updateSelected = (new_index: number) => {
    if (!compareView) {
      setSelected([new_index])
    } else {
      setSelected([selected[0], new_index])
    }
  }

  const updateCompareView = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompareView(event.target.checked);

    if (event.target.checked) {
      setSelected([selected[0], 1])
    }
  };

  const checkAnchor = (index: number) => {
    return (compareView && index === selected[0])
  }

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
          <FormGroup>
            <FormControlLabel
              control={<Switch
                checked={compareView}
                onChange={updateCompareView}
                inputProps={{ 'aria-label': 'controlled' }}
                disabled={props.experiments.documents.length < 2}
              />}
              label="Compare View"
            />
          </FormGroup>
          <List>
            {props.experiments.documents.map((doc, index) => (
              <ListItem key={doc.date} disablePadding>
                {!compareView ? (
                  <ListItemButton selected={selected[0] === index} onClick={() => setSelected([index])}>
                    <ListItemText primary={reformatDate(doc.date)} />
                  </ListItemButton>
                ) : (
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={() => updateSelected(index)} checked={selected.includes(index)} disabled={checkAnchor(index)}></Checkbox>}
                      label={reformatDate(doc.date)} />
                  </FormGroup>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {!compareView ? (
          <ExperimentResults doc={props.experiments.documents[selected[0]]} col={false}></ExperimentResults>
        ) : (
          <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} useFlexGap>
            <Item>
              <ExperimentResults doc={props.experiments.documents[selected[0]]} col={true}></ExperimentResults>
            </Item>
            <Item>
              <ExperimentResults doc={props.experiments.documents[selected[1]]} col={true}></ExperimentResults>
            </Item>
          </Stack>
        )}
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
