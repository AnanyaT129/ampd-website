export type UserExperiments = {
    collection_name: string,
    documents: ExperimentData[],
}

export type ExperimentData = {
    id: number,
    name: string,
    date: string,
    raw_data_t: number[],
    raw_data_y: number[],
    microplastic_content: number,
}