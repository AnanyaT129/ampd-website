import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function About() {
    const [open, setOpen] = React.useState(false);

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
        maxWidth: "50%",
      }));

    return (
        <Stack
            direction={{ sm: 'column', md: 'row' }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ justifyContent: "space-evenly" }}
        >
            <Item>
                <img src="./images/ampdDevice.png"></img>
            </Item>
            <Item>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            About the Project
                        </Typography>
                        <Typography variant='body1'>Northeastern University ECE Capstone Project, Spring 2025 <br></br> <br></br></Typography>
                        <Typography variant='body1'>Public health is at risk from increased microplastic content in drinking water, which so far can only be reliably measured through expensive professional laboratory testing. The Automated MicroPlastic Detector (AMP’D) team has developed a system for rapid detection of microplastics in water. The system provides both a visual and quantitative analysis, allowing users to assess the quality of their water at home, and compare microplastic concentrations in household, tap, and bottled water against safety standards.  AMP’D proves that it is possible to create a low-cost, intuitive, and accessible system to test for microplastics.</Typography>
                        <Typography variant="body1" color="inherit" noWrap>
                            &nbsp;
                        </Typography>
                        <Typography variant='body1'>For system validation, polyvinyl chloride (PVC) microplastic samples in the order of 400 microns were run through the device at different concentrations. Cross correlation of the impedance data amongst differing concentrations of microplastic as well as images provided by a CMOS camera make for an accurate depiction of the microplastic content in a given sample. Further research into detecting non-potable water ensures public health awareness and environmental sustainability by enabling the identification of microplastic contamination in diverse water sources, ultimately aiding in pollution mitigation efforts. Proof of concept has indicated that the AMP’D device is successful in detecting plastic content in a typical sample of water, in which plastics might not be visible to the human eye. </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => {setOpen(true)}}>Learn More</Button>
                        <Dialog
                            open={open}
                            onClose={() => {setOpen(false)}}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">AMP'D Details</DialogTitle>
                            <DialogContent dividers={true}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    tabIndex={-1}
                                >
                                    <Typography variant='body1'>The AMP’D device allows a user to monitor the presence of microplastics in their water supply using two unique methods of detection: an optical approach which looks at scattered light and an impedance approach which detects a change in impedance compared to pure water. Utilizing a 3D printed tube to house both methods, a pump then runs a water sample through the tubing. The experiment flow is controlled by software on a Raspberry Pi where the user can change parameters and receive feedback on the status and results. It first takes analog voltage measurements from two repurposed total dissolved solids (TSD) probes, paired with electrodes, which transmit and receive signals from either a low or high frequency square wave. Then, it captures images by a CMOS camera of light scattered from a 650 nm wavelength laser due to the microplastics. The user can use the analysis buttons on the GUI to determine the estimated amount of plastic. The impedance analysis calculates the average impedance, capacitance and resistance from the voltage data. It compares these values to determine what concentration (ppm) of contaminants are present. The camera analysis calculates the average amount of scattered light across all of the images by looking at pixels which are significantly red. Both methods use experimentally determined Lagrange correlation to estimate the amount of plastic in the sample.</Typography>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => {setOpen(false)}}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </CardActions>
                </Card>
            </Item>
        </Stack>
    );
}