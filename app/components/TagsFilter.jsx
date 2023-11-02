import Image from "next/image";

const styles = {
  feedTags: {
    padding: "1rem 2rem",
  },
  tagsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
    marginInline: "auto",
    width: "100%",
  },
  tags: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  heading: {
    color: "#ff4141",
    fontWeight: "bold",
  },
  arrow: {
    backgroundColor: "#222222",
    height: "30px",
    borderRadius: "100vmax",
    padding: "0.2rem",
    cursor: "pointer",
  },
  arrow2: {
    transform: "rotate(180deg)",
  },
  list: {
    display: "flex",
    gap: "1rem",
  },
  listItem: {
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    fontSize: "14px",
    backgroundColor: "#222222",
    cursor: "pointer",
    borderRadius: "4.6px",
    whiteSpace: "nowrap",
  },
};

const TagsFilter = () => {
  return (
    <div style={styles.feedTags}>
      <p style={styles.heading}>filter by tags</p>
      <div style={styles.tagsContainer}>
        <Image
          src="./arrow.svg"
          alt="arrow"
          height={30}
          width={30}
          style={styles.arrow}
        />
        <div style={styles.tags}>
          <ul style={styles.list}>
            <li style={styles.listItem}>dsa</li>
            <li style={styles.listItem}>javascript</li>
            <li style={styles.listItem}>arrays</li>
            <li style={styles.listItem}>graph</li>
            <li style={styles.listItem}>searching</li>
            <li style={styles.listItem}>graph</li>
            <li style={styles.listItem}>arrays</li>
            <li style={styles.listItem}>graph</li>
            <li style={styles.listItem}>queues</li>
            <li style={styles.listItem}>back tracking</li>
            <li style={styles.listItem}>sorting</li>
            <li style={styles.listItem}>greedy</li>
            <li style={styles.listItem}>database</li>
          </ul>
        </div>
        <Image
          src="./arrow.svg"
          alt="arrow"
          height={30}
          width={30}
          style={{ ...styles.arrow, ...styles.arrow2 }}
        />
      </div>
    </div>
  );
};

export default TagsFilter;
