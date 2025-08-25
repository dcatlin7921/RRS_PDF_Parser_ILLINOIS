import React, { useState } from 'react';
import { extractBookmarksFromPDF } from '../utils/pdfUtils';
import { generateCSV } from '../utils/csvUtils';

const PacketProcessor: React.FC<{ pdfFile: File; bookmarks: string[] }> = ({ pdfFile, bookmarks }) => {
    const [packets, setPackets] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const processPDF = async () => {
        setLoading(true);
        setError(null);
        try {
            const extractedPackets = await extractBookmarksFromPDF(pdfFile, bookmarks);
            setPackets(extractedPackets);
        } catch (err) {
            setError('Error processing PDF: ' + (err as Error).message);
        } finally {
            setLoading(false);
        }
    };

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

    return (
        <div>
            <button onClick={processPDF} disabled={loading}>
                {loading ? 'Processing...' : 'Process PDF'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {packets.length > 0 && (
                <div>
                    <h3>Processed Packets</h3>
                    <pre>{JSON.stringify(packets, null, 2)}</pre>
                    <button onClick={handleDownloadCSV}>Download CSV</button>
                </div>
            )}
        </div>
    );
};

export default PacketProcessor;