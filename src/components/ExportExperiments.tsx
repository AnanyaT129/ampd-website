import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { UserExperiments } from '../models/experiment';

declare global {
  interface Navigator {
      msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

export default function ExportExperiments(props: {data: UserExperiments, snackbarOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createDownloadableFile = (
    data: string,
    fileName: string,
    contentType: string
  ): void => {
  // IE 11
    if (navigator.msSaveBlob) {
      // Use IE11's APIs
      const blob = new Blob([data], {
        type: contentType,
      })
      navigator.msSaveBlob(blob, fileName)
      
    // Other browsers
    } else {
      // Create a hidden anchor link
      const element = document.createElement('a')
      element.style.display = 'none'
          
      // Attach the content to the anchor
      element.setAttribute('href', contentType + encodeURIComponent(data))
      element.setAttribute('download', fileName)
      // Append to DOM and simulate click (this will trigger the download)
      document.body.appendChild(element)
      element.click()
      // Cleanup
      document.body.removeChild(element)
    }
  }

  return (
    <React.Fragment>
      <Fab variant="extended" color="primary" onClick={handleClickOpen}>
        <FileDownloadIcon sx={{ mr: 1 }} />
        Export Data
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            createDownloadableFile(JSON.stringify(props.data),
                                   "data.json",
                                   "data:text/plain;charset=utf-8,");
            props.snackbarOpen(true)
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Data will be exported as a .json file.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Export</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
