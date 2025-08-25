# PDF Bookmark Packet Application

This project is a single-page web application that allows users to upload a PDF file, input Java console output for bookmarks, process the PDF into packets based on those bookmarks, and generate a downloadable CSV file containing the processed data.

## Features

- **PDF Upload**: Users can upload a PDF file which will be processed based on bookmarks.
- **Console Input**: Users can paste Java console output to define bookmarks for the PDF.
- **Packet Processing**: The application processes the PDF into packets according to the specified bookmarks.
- **CSV Download**: Users can download a CSV file containing the processed data.

## Project Structure

```
pdf-bookmark-packet-app
├── public
│   └── index.html          # HTML structure for the application
├── src
│   ├── App.tsx            # Main entry point of the React application
│   ├── components          # React components for various functionalities
│   │   ├── PDFUpload.tsx   # Component for PDF upload
│   │   ├── ConsoleInput.tsx # Component for console input
│   │   ├── PacketProcessor.tsx # Component for processing packets
│   │   └── CSVDownload.tsx  # Component for downloading CSV
│   ├── utils               # Utility functions for PDF and CSV handling
│   │   ├── pdfUtils.ts     # PDF-related utility functions
│   │   └── csvUtils.ts     # CSV-related utility functions
│   └── types               # TypeScript types and interfaces
│       └── index.ts        # Type definitions
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd pdf-bookmark-packet-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to access the application.

## Usage Guidelines

- Upload a PDF file using the provided interface.
- Paste the Java console output into the console input field to define bookmarks.
- Click the process button to generate packets based on the bookmarks.
- Download the processed data as a CSV file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.