import React, { useState } from 'react';

const PDFUpload: React.FC<{ onFileUpload: (file: File) => void }> = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            onFileUpload(file);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    return (
        <div>
            <h2>Upload PDF</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
    );
};

export default PDFUpload;