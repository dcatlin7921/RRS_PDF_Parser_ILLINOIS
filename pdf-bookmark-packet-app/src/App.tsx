import React, { useState } from 'react';
import PDFUpload from './components/PDFUpload';
import ConsoleInput from './components/ConsoleInput';
import PacketProcessor from './components/PacketProcessor';
import CSVDownload from './components/CSVDownload';

const App = () => {
    const [pdfData, setPdfData] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [packets, setPackets] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePdfUpload = (data) => {
        setPdfData(data);
    };

    const handleConsoleInput = (parsedBookmarks) => {
        setBookmarks(parsedBookmarks);
    };

    const processPackets = () => {
        setIsProcessing(true);
        // Logic to process PDF into packets based on bookmarks
        // Update packets state with processed data
        setIsProcessing(false);
    };

    return (
        <div>
            <h1>PDF Bookmark Packet App</h1>
            <PDFUpload onUpload={handlePdfUpload} />
            <ConsoleInput onParse={handleConsoleInput} />
            <button onClick={processPackets} disabled={isProcessing || !pdfData || bookmarks.length === 0}>
                Process Packets
            </button>
            <PacketProcessor packets={packets} isProcessing={isProcessing} />
            <CSVDownload data={packets} />
        </div>
    );
};

export default App;
