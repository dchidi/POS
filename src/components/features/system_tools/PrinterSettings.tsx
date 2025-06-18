import React, { useState } from "react";

interface PrinterSettingsProps {
  onPaperSizeChange: (arg: "80mm" | "58mm") => void;
}

const PrinterSettings: React.FC<PrinterSettingsProps> = ({
  onPaperSizeChange,
}) => {
  const [selectedPaperSize, setSelectedPaperSize] = useState<"80mm" | "58mm">(
    "80mm"
  );

  const handlePaperSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = event.target.value as "80mm" | "58mm";
    setSelectedPaperSize(newSize);
    onPaperSizeChange(newSize);
  };

  return (
    <div>
      <label>Choose Paper Size: </label>
      <select value={selectedPaperSize} onChange={handlePaperSizeChange}>
        <option value="80mm">80mm</option>
        <option value="58mm">58mm</option>
      </select>
    </div>
  );
};

export default PrinterSettings;
