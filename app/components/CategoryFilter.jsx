import Link from "next/link";

const CategoryFilter = () => {
  const styles = {
    container: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
    },
    link: {
      cursor: "pointer",
      background: "#171717",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #7928ca",
      // boxShadow: "0 0 3px #7928ca",
    },
  };

  return (
    <div style={styles.container}>
      <Link href={"/queries"}>
        <p style={styles.link}>queries</p>
      </Link>

      <Link href={"/submissions"}>
        <p style={styles.link}>submissions</p>
      </Link>
    </div>
  );
};

export default CategoryFilter;
