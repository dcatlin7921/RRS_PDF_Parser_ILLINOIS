import { PDFDocument } from 'pdf-lib';

export const extractBookmarks = async (pdfData: Uint8Array): Promise<string[]> => {
    const pdfDoc = await PDFDocument.load(pdfData);
    const bookmarks: string[] = [];

    const outline = pdfDoc.getOutline();
    if (outline) {
        outline.forEach(item => {
            if (item.title) {
                bookmarks.push(item.title);
            }
        });
    }

    return bookmarks;
};

export const getPageRanges = (bookmarks: string[]): number[][] => {
    const pageRanges: number[][] = [];
    for (let i = 0; i < bookmarks.length; i++) {
        const startPage = i === 0 ? 0 : pageRanges[i - 1][1] + 1;
        const endPage = startPage + 1; // Assuming each bookmark corresponds to one page
        pageRanges.push([startPage, endPage]);
    }
    return pageRanges;
};