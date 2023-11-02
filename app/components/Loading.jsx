import styles from "./loading.module.css";

const Loading = () => {
  return (
    <section className={styles.container}>
      <div className={styles.shimmer}></div>
      <div className={styles.shimmer}></div>
      <div className={styles.shimmer}></div>
      <div className={styles.shimmer}></div>
      <div className={styles.shimmer}></div>
      <div className={styles.shimmer}></div>
    </section>
  );
};

export default Loading;
