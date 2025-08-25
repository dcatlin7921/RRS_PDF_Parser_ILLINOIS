import React, { useState } from 'react';

const ConsoleInput: React.FC<{ onBookmarksParsed: (bookmarks: string[]) => void }> = ({ onBookmarksParsed }) => {
    const [consoleOutput, setConsoleOutput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setConsoleOutput(event.target.value);
    };

    const handleParseBookmarks = () => {
        const bookmarks = parseBookmarks(consoleOutput);
        onBookmarksParsed(bookmarks);
        setConsoleOutput('');
    };

    const parseBookmarks = (output: string): string[] => {
        // Simple parsing logic: split by new lines and filter out empty lines
        return output.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    };

    return (
        <div>
            <h2>Paste Java Console Output</h2>
            <textarea
                value={consoleOutput}
                onChange={handleInputChange}
                rows={10}
                cols={50}
                placeholder="Paste your console output here..."
            />
            <button onClick={handleParseBookmarks}>Parse Bookmarks</button>
        </div>
    );
};

export default ConsoleInput;