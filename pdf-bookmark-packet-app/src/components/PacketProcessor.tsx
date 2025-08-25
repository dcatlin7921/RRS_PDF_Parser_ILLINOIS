import React from 'react';
import { generateCSV } from '../utils/csvUtils';

interface PacketProcessorProps {
    packets: any[];
    isProcessing: boolean;
}

const PacketProcessor: React.FC<PacketProcessorProps> = ({ packets, isProcessing }) => {
    const handleDownloadCSV = () => {
        const csvData = generateCSV(packets);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'packets.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isProcessing) {
        return <p>Processing...</p>;
    }

    if (packets.length === 0) {
        return null;
    }

    return (
        <div>
            <h3>Processed Packets</h3>
            <pre>{JSON.stringify(packets, null, 2)}</pre>
            <button onClick={handleDownloadCSV}>Download CSV</button>
        </div>
    );
};

export default PacketProcessor;

