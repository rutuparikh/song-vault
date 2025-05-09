import html2pdf from 'html2pdf.js';

export const handleExport = (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error("Element not found!");
    return;
  }
  filename = filename + '.pdf';
  const options = {
    margin: 1,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
  };

  html2pdf().from(element).set(options).save();
};
