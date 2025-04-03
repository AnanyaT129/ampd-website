import * as React from 'react';

import Typography from "@mui/material/Typography";
import { LineChart } from '@mui/x-charts/LineChart';

import { ExperimentData } from '../models/experiment';
import ExperimentContentCard from './ExperimentContentCard';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { reformatDate } from './ExperimentsViewer';

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
    const x_data = [...Array(props.doc.impedanceAnalysis.metadata.numChunks).keys()].map(foo => foo + 1)

    console.log(props.doc)

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
                </Item>
            </Stack>
        </div>
    );
}