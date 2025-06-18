import React from "react";
import styles from "./Receipt.module.css";
import QRCodeGenerator from "../../ui/qr_code/QRCodeGenerator";
import { Column, Row } from "../../layouts/row_column";
import CurrencyUI from "../../ui/currency_formatter/CurrencyUI";
import { useNumberFormatter } from "../../../hooks/useNumberFormatter";
import { SiShopify } from "react-icons/si";
import { CURRENCY } from "../../../config";

type ReceiptData = {
  date: string;
  items: { name: string; price: number }[];
  total: number;
};

interface ReceiptProps {
  receiptData: ReceiptData;
  paperSize: "80mm" | "58mm";
}
const Receipt: React.FC<ReceiptProps> = ({ receiptData, paperSize }) => {
  const receiptStyle =
    paperSize === "80mm" ? { maxWidth: "80mm" } : { maxWidth: "58mm" };
  const { formatCurrency } = useNumberFormatter();

  return (
    <Column className={styles.receiptContainer} style={receiptStyle}>
      <Column align="center" justify="center">
        <Column className={styles.header} align="center" gap={5}>
          <SiShopify size={30} />
          <p>ScanPay</p>
        </Column>
        <strong style={{ fontSize: "12px" }}>
          Intercontinental Food Court
        </strong>
        <p className={styles.address}>
          12F Grace Park Grove, Drumcondra, Dublin, Ireland. D09 C8YV
        </p>
        <p className={styles.date}>{receiptData.date}</p>
      </Column>
      <Column className={styles.itemList} gap={5}>
        <Row justify="space-between">
          <span>Items</span>
          {CURRENCY.symbol}
        </Row>
        {receiptData.items.map((item, index) => (
          <Row key={index} justify="space-between">
            <span>{item.name}</span>
            <CurrencyUI
              amount={formatCurrency(item.price)}
              className={styles.amount}
              showCurrencySymbol={false}
            />
          </Row>
        ))}
        <Row justify="space-between" className={styles.mt}>
          <span>Subtotal</span>
          <CurrencyUI
            amount={formatCurrency(53510)}
            className={styles.amount}
            showCurrencySymbol={false}
          />
        </Row>
        <Row justify="space-between">
          <span>Discount (10%)</span>
          <CurrencyUI
            amount={formatCurrency(-5351)}
            className={styles.amount}
            showCurrencySymbol={false}
          />
        </Row>
        <Row justify="space-between">
          <span>VAT (0%)</span>
          <CurrencyUI
            amount={formatCurrency(0)}
            className={styles.amount}
            showCurrencySymbol={false}
          />
        </Row>
      </Column>
      <Row className={styles.total} justify="space-between">
        <span>Total:</span>
        <CurrencyUI
          amount={formatCurrency(receiptData.total)}
          className={styles.amount}
          showCurrencySymbol={false}
        />
      </Row>
      <div className={styles.receiptFooter}>
        <p>Thank you for your purchase!</p>
      </div>
      {/* move the print out to the modal that ask for the payment type (cash, transfer or card) */}
      <button onClick={() => window.print()} className={styles.printBtn}>
        Print Receipt
      </button>
      <div>
        <QRCodeGenerator id="7839" />
      </div>
    </Column>
  );
};

export default Receipt;
