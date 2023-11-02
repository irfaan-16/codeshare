"use client";
import { useState } from "react";
import styles from "./profile.module.css";
const Modal = ({ isOpen, onClose, userId }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const createCategory = async () => {
    const category = await fetch(
      `/api/category?userId=${userId}&icon=${icon}&name=${name}`,
      { method: "PUT" }
    );
  };
  return (
    <div
      className={`${styles.modalContainer} ${isOpen ? styles.modalOpen : ""}`}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>Create a new category</h2>
          <p>{userId}</p>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="icon">icon</label>
            <input
              className={styles.input}
              id="icon"
              onChange={(e) => setName((prev) => (prev = e.target.value))}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="name">name</label>
            <input
              className={styles.input}
              id="name"
              onChange={(e) => setIcon((prev) => (prev = e.target.value))}
            />
          </div>
        </div>
        <button className={styles.create}>create</button>
      </div>
    </div>
  );
};

export default Modal;
