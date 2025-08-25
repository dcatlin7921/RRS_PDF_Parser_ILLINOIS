import { Packet } from '../types';

export const generateCSV = (packets: Packet[]): string => {
    const header = ['Bookmark', 'Start Page', 'End Page', 'Content'];
    const rows = packets.map(packet => [
        packet.bookmark,
        packet.startPage,
        packet.endPage,
        packet.content
    ]);

    const csvContent = [header, ...rows].map(e => e.join(',')).join('\n');
    return csvContent;
};

export const downloadCSV = (csvData: string, filename: string): void => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};