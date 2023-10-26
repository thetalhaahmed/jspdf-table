import React from "react";

import jsPDF from "jspdf";
import "jspdf-autotable";

const TableToPDF = () => {
  // const downloadPDF = () => {
  //   const unit = "pt";
  //   const size = "A4";
  //   const orientation = "portrait";
  //   const doc = new jsPDF(orientation, unit, size);

  //   doc.setFontSize(12);

  //   // Create an array to store the data
  //   const data = [];

  //   // Add headers to the data array
  //   data.push(["Header 1", "Header 2", "Header 3"]);

  //   // Add rows to the data array
  //   data.push(["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"]);
  //   data.push(["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"]);
  //   data.push(["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3"]);

  //   console.log(data);
  //   // Set the margin to position the table
  //   const margin = { top: 60, right: 40, bottom: 60, left: 40 };

  //   // Generate PDF from the data array
  //   doc.autoTable({
  //     head: [data[0]],
  //     body: data.slice(1),
  //     startY: margin.top,
  //     margin: margin,
  //   });

  //   // Save the PDF file with the specified name
  //   doc.save("table.pdf");
  // };

  const downloadPDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";
    const doc = new jsPDF(orientation, unit, size);

    const customFont = {
      src: "./assets/lato-regular.ttf", // Path to your downloaded font file
      id: "Lato Regular",
      fontStyle: "normal", // 'normal', 'italic', 'bold', 'bolditalic'
    };
    doc.addFont(customFont.src, customFont.id, customFont.fontStyle);

    doc.setFont("Lato Regular"); // Set the custom font for the PDF

    doc.setFontSize(12);

    // Create an array to store the data
    const data = [];

    // Add headers to the data array
    data.push(["Header 1", "Header 2", "Header 3"]);

    // Add rows to the data array
    data.push(["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"]);
    data.push(["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"]);

    // Set the margin to position the table
    const margin = { top: 60, right: 40, bottom: 60, left: 40 };

    // Define custom styles for the table
    const styles = {
      fillColor: [200, 200, 200], // Background color of header
      textColor: [0, 0, 0], // Text color
      halign: "center", // Horizontal alignment: left, center, right
      valign: "middle", // Vertical alignment: top, middle, bottom
    };

    // Generate PDF from the data array with custom styles
    doc.autoTable({
      head: [data[0]],
      body: data.slice(1),
      startY: margin.top,
      margin: margin,
      styles: styles,
    });

    // Save the PDF file with the specified name
    doc.save("table.pdf");
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default TableToPDF;
