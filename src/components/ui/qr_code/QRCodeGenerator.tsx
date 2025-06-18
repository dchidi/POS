import React from "react";
import QRCode from "react-qr-code";
import styles from "./QRCodeGenerator.module.css";
import { Column } from "../../layouts/row_column";

interface QRCodeGeneratorProps {
  id: string; // The ID to encode into the QR code
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ id }) => {
  const generateQRCode = (id: string) => {
    return `https://your-api.com/query?id=${id}`;
  };

  return (
    <Column justify="center" align="center">
      <QRCode value={generateQRCode(id)} size={130} className={styles.qr} />
      <div className={styles.id}>{id}</div>
    </Column>
  );
};

export default QRCodeGenerator;
