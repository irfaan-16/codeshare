"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import User from "../lib/Models/User";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CreateSubmission = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router?.replace("/");
    }
  }, [session]);

  const [codeTitle, setCodeTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const addTag = (e) => {
    e.preventDefault();
    setTags((prev) => [...prev, currentTag.trim().toLowerCase()]);
    setCurrentTag("");
  };
  const postCode = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submission/new", {
        method: "POST",
        body: JSON.stringify({
          title: codeTitle,
          code: code,
          author: session?.user?.mongoDbId,
          tags: tags,
          category,
        }),
      });
      setCode((prev) => (prev = ""));
      setCodeTitle((prev) => (prev = ""));
      setCategory((prev) => (prev = ""));
      setTags(null);
      if (response.ok) {
        toast.success("Submission added!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not add the Submission!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const styles = {
    container: {
      width: "100%",
      paddingBlock: "2rem",
    },
    heading: {
      fontSize: "2rem",
      textAlign: "center",
      background: "linear-gradient(#7928ca, #ff0080)",
      background: "-webkit-linear-gradient(#7928ca, #ff0080)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    form: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "1rem",
    },
    label: {
      display: "block",
      color: "rgba(255, 255, 255, 0.767)",
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: "0.5rem",
    },
    inputGroup: {
      marginBottom: "2rem",
      width: "70%",
    },
    titleInput: {
      padding: "1rem",
      background: "#171717",
      color: "white",
      borderRadius: "4px",
      width: "100%",
    },
    codeInput: {
      width: "100%",
      resize: "vertical",
      height: "500px",
      background: "#171717",
      outline: "none",
      fontSize: "1.2rem",
      fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
      padding: "1rem",
      border: "none",
      color: "white",
    },
    postButton: {
      padding: "0.5rem 3rem",
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: "transparent",
      fontWeight: "bolder",
      color: "#fff",
      borderRadius: "4px",
      border: "2px solid #ff0080",
      marginTop: "2rem",
    },
    tags: {
      color: "white",
      width: "70%",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    tag: {
      backgroundColor: "#171717",
      padding: "0.5rem 1rem 0.5rem 1.5rem",
      borderRadius: "4px",
      fontSize: "0.8rem",
      fontWeight: "bold",
      cursor: "pointer",
      position: "relative",
    },
    tagBefore: {
      content: '"#"',
      position: "absolute",
      color: "#ff0080",
      fontSize: "1rem",
      left: "10px",
    },
    tagsContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    category: {
      padding: "0.5rem",
      borderRadius: "4px",
      background: "#171717",
    },
    categoryTitle: {
      fontWeight: "bold",
      marginRight: "0.5rem",
    },
    tagInput: {
      padding: "0.5rem",
      borderRadius: "4px",
      background: "#171717",
      marginRight: "0.5rem",
    },
    tagsTitle: {
      fontWeight: "bold",
    },
    addBtn: {
      padding: "0.5rem",
      background: "#171717",
      color: "#ff0080",
      fontWeight: "bold",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Create a new Post</h1>

      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            style={styles.titleInput}
            value={codeTitle}
            onChange={(e) => setCodeTitle((prev) => (prev = e.target.value))}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="code" style={styles.label}>
            Code
          </label>
          <textarea
            name="code"
            id="code"
            tabIndex="1"
            style={styles.codeInput}
            value={code}
            onChange={(e) => setCode((prev) => (prev = e.target.value))}
          ></textarea>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="" style={styles.categoryTitle}>
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory((prev) => (prev = e.target.value))}
            style={styles.category}
          />
        </div>
        <div style={styles.tags}>
          <p style={styles.tagsTitle}>tags:</p>
          <div style={styles.tagsContainer}>
            {tags?.map((tag) => {
              return (
                <p style={styles.tag} className="tag" key={tag}>
                  {tag}
                </p>
              );
            })}
          </div>

          <div>
            <input
              type="text"
              onChange={(e) => setCurrentTag((prev) => (prev = e.target.value))}
              value={currentTag}
              style={styles.tagInput}
            />
            <button onClick={(e) => addTag(e)} style={styles.addBtn}>
              add
            </button>
          </div>
        </div>
        <button
          type="submit"
          style={styles.postButton}
          onClick={(e) => postCode(e)}
        >
          Post
        </button>
      </form>
    </section>
  );
};
export default CreateSubmission;
