import * as React from 'react';

import Typography from "@mui/material/Typography";
import { LineChart } from '@mui/x-charts/LineChart';

import { ExperimentData } from '../models/experiment';
import ExperimentContentCard from './ExperimentContentCard';

export default function ExperimentResults(props: {doc: ExperimentData}) {
    return (
        <div>
            <Typography variant="h6">
                {props.doc.name} Water Sample Report
            </Typography>
            <ExperimentContentCard doc={props.doc}></ExperimentContentCard>
            <LineChart
                xAxis={[{ data: props.doc.raw_data_t }]}
                series={[
                    {data: props.doc.raw_data_y},
                ]}
                width={500}
                height={300}
            />
        </div>
    );
}