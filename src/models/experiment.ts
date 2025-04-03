export type UserExperiments = {
    collection_name: string,
    documents: ExperimentData[],
}

export type ExperimentData = {
    date: string,
    metadata: {
        experimentDuration: string,
        cameraFps: number,
        cameraSnapshotLength: string,
    },
    impedanceData: {
        low: number[],
        high: number[]
    },
    impedanceAnalysis: {
        date: string,
        metadata: {
            numChunks: string,
            lowFreq: string,
            highFreq: string,
        },
        analysisResults: {
            impLow: number[],
            impHigh: number[],
            capacitance: number[],
            ppmLow: number,
            ppmHigh: number,
            estPlasticContent: number,
            plasticPresent: string,
            ttestResults: {
                low: {
                    t: number,
                    p: number
                },
                high: {
                    t: number,
                    p: number
                }
            }
        }
    },
    cameraAnalysis: {
        metadata: {
            fps: number,
            duration: number
        },
        analysisResults: {
            scatteredLight: number[],
            imgPaths: string[],
            averageScatteredLight: number,
            estPlasticContent: number,
            plasticPresent: string
        }
    }
}