"use client";
import { useState } from "react";
import styles from "./Modal.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

const Modal = ({ isOpen, onClose, currentCode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the "copied" status after 2 seconds
  };

  return (
    <div
      className={`${styles.modalContainer} ${isOpen ? styles.modalOpen : ""}`}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{currentCode?.title}</h2>

          <div>
            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.desc}>{currentCode?.desc}</p>
          <pre className={styles.code}>{currentCode?.code}</pre>
          {currentCode?.output && (
            <>
              <div className={styles.outputContainer}>
                <h1>Output</h1>
                <pre>{currentCode?.output}</pre>
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <textarea
          value={currentCode?.code}
          readOnly
          style={{ display: "none" }}
        />
        <CopyToClipboard text={currentCode?.code} onCopy={handleCopy}>
          <button className={styles.CopyToClipboard}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Modal;
