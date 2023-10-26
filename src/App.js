import React from "react";
import "./App.css";
import TableToPDF from "./TableToPDF";

function App() {
  // const downloadPDF = () => {
  //   const unit = "pt";
  //   const size = "A4";
  //   const orientation = "portrait";
  //   const doc = new jsPDF(orientation, unit, size);
  //   doc.setFontSize(12);

  //   // Custom styles and colors
  //   const tableStyles = {
  //     styles: {
  //       fillColor: [255, 255, 255], // Background color of the table
  //       textColor: [0, 0, 0], // Text color
  //       fontStyle: "normal", // Font style: normal, bold, italic, bolditalic
  //       lineWidth: 0.2, // Border width
  //     },
  //     headStyles: {
  //       fillColor: [200, 200, 200], // Background color of the table header
  //       textColor: [0, 0, 0], // Text color of the header
  //     },
  //   };

  //   // Apply custom styles to the table
  //   doc.autoTable({ html: "#table-container table", ...tableStyles });

  //   // Save the PDF file with the specified name
  //   doc.save("table.pdf");
  // };

  // const downloadPDF = () => {
  //   const unit = "pt";
  //   const size = "A4";
  //   const orientation = "portrait";
  //   const doc = new jsPDF(orientation, unit, size);

  //   doc.setFontSize(12);

  //   // Get the table element by its ID
  //   const table = document.getElementById("table");

  //   // Apply custom styles if needed
  //   const tableStyles = {
  //     styles: {
  //       fillColor: [255, 255, 255],
  //       textColor: [0, 0, 0],
  //       fontStyle: "normal",
  //       lineWidth: 0.2,
  //     },
  //     headStyles: { fillColor: [200, 200, 200], textColor: [0, 0, 0] },
  //   };

  //   // Generate PDF from the table element
  //   doc.autoTable({ html: table, ...tableStyles });

  //   // Save the PDF file with the specified name
  //   doc.save("table.pdf");
  // };

  //   const downloadPDF = () => {
  //     const unit = "pt";
  //     const size = "A4";
  //     const orientation = "portrait";
  //     const doc = new jsPDF(orientation, unit, size);

  //     doc.setFontSize(12);

  //     // Apply custom styles if needed
  //     const tableStyles = {
  //       styles: {
  //         fillColor: [255, 255, 255],
  //         textColor: [0, 0, 0],
  //         fontStyle: "normal",
  //         lineWidth: 0.2,
  //       },
  //       headStyles: { fillColor: [200, 200, 200], textColor: [0, 0, 0] },
  //     };

  //     // Generate PDF from the table element
  //     doc.autoTable({
  //       head: [["Header 1", "Header 2", "Header 3"]],
  //       body: [
  //         ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
  //         ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
  //         // Add more rows as needed
  //       ],
  //       ...tableStyles,
  //     });

  //     // Save the PDF file with the specified name
  //     doc.save("table.pdf");
  //   };

  return (
    <div className="App">
      <TableToPDF />
    </div>
  );
}

export default App;
