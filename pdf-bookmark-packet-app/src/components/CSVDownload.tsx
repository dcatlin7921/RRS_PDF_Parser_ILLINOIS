import React from 'react';
import { generateCSV } from '../utils/csvUtils';

interface CSVDownloadProps {
    data: any[]; // Replace 'any' with the appropriate type for your processed data
}

const CSVDownload: React.FC<CSVDownloadProps> = ({ data }) => {
    const handleDownload = () => {
        const csvContent = generateCSV(data);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'processed_data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            Download CSV
        </button>
    );
};

export default CSVDownload;