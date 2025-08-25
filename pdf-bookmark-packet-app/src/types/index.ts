export interface JobRecord {
    id: string;
    title: string;
    description: string;
    startPage: number;
    endPage: number;
}

export interface Packet {
    jobId: string;
    content: string;
}

export interface CSVRow {
    jobId: string;
    title: string;
    description: string;
    pageRange: string;
}