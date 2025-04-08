import * as React from 'react';

import Typography from "@mui/material/Typography";
import { LineChart } from '@mui/x-charts/LineChart';

import { ExperimentData } from '../models/experiment';
import ExperimentContentCard from './ExperimentContentCard';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { reformatDate } from './ExperimentsViewer';
import { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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

export default function ExperimentResults(props: {doc: ExperimentData, col: boolean}) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const x_data = [...Array(props.doc.impedanceAnalysis.metadata.numChunks).keys()].map(foo => foo + 1)

    console.log(props.doc)

    // Fetch the image from Firebase Storage using the path in imgToSave
    useEffect(() => {
        if (props.doc.cameraAnalysis[0]?.analysisResults?.imgToSave !== null && props.doc.cameraAnalysis[0]?.analysisResults?.imgToSave !== undefined && props.doc.cameraAnalysis[0].analysisResults.imgToSave !== "None") {
            const storage = getStorage();
            const imageRef = ref(storage, props.doc.cameraAnalysis[0].analysisResults.imgToSave);

            // Fetch the image URL
            getDownloadURL(imageRef)
                .then((url) => {
                    setImageUrl(url);  // Set the image URL to state
                })
                .catch((error) => {
                    console.error("Error fetching image from Firebase Storage:", error);
                });
        } else {
            setImageUrl("No Image")
        }
    }, [props.doc.cameraAnalysis[0].analysisResults.imgToSave]); // Only re-fetch if imgToSave changes

    return (
        <div>
            <Typography variant="h6">
                {reformatDate(props.doc.date)} Water Sample Report
            </Typography>
            <ExperimentContentCard doc={props.doc} col={props.col}></ExperimentContentCard>
            <Stack direction={props.col ? 'column' : "row"} useFlexGap>
                <Item>
                    <Typography variant='body1'>Impedance Results</Typography>
                    <LineChart
                        xAxis={[{ data: x_data}]}
                        series={[
                            {data: props.doc.impedanceAnalysis.analysisResults.impLow},
                            {data: props.doc.impedanceAnalysis.analysisResults.impHigh}
                        ]}
                        width={500}
                        height={300}
                    />
                </Item>
                <Item>
                    <Typography variant='body1'>Frame from Camera Analysis</Typography>
                    {imageUrl ? (
                        imageUrl === 'No Image' ? "No Image" : <img src={imageUrl} alt="Frame from Camera" style={{ width: '100%', height: 'auto' }} />
                    ) : (
                        <Typography>Loading image...</Typography>
                    )}
                </Item>
            </Stack>
        </div>
    );
}