"use client";
import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import seachIcon from "@/public/search.svg";
import googleIcon from "@/public/google.png";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    color: "#fff",
  },
  searchContainer: {
    display: "flex",
    padding: "0.5rem",
    border: "2px solid rgb(121, 40, 202)",
    alignItems: "center",
    borderRadius: "1.5rem",
    background: "#121212",
    width: "50%",
    gap: "1rem",
  },
  searchBar: {
    border: "none",
    outline: "none",
    padding: "0.5rem 0",
    width: "100%",
    background: "#121212",
    color: "white",
    height: "100%",
  },
  searchIcon: {
    background: "rgb(121, 40, 202)",
    padding: "0.5rem",
    width: "30px",
    height: "30px",
    borderRadius: "100vmax",
    cursor: "pointer",
  },
  logOutButton: {
    border: "1px solid rgb(121, 40, 202)",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    background: "transparent",
    borderRadius: "5px",
    color: "#fff",
  },
  avatar: {
    borderRadius: "100vmax",
    cursor: "pointer",
    height: "60px",
    width: "60px",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  loginButton: {
    padding: "0.3rem 0.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "100px",
    color: "#000",
    fontWeight: "bold",
    gap: "0.7rem",
  },
  googleIcon: {
    height: "25px",
    width: "25px",
  },
  googleIconContainer: {
    padding: "0.5rem 0.5rem 0.3rem 0.5rem",
    background: "rgb(0, 0, 0)",
    borderRadius: "100vmax",
  },
  googleText: {
    fontSize: "0.9rem",
  },
};

const Appbar = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    console.table(session.user);
  }

  return (
    <nav style={styles.nav}>
      <Link href={"/"}>
        <Image src={logo} alt="Logo" height="100" width="100" />
      </Link>

      <div style={styles.searchContainer}>
        <div style={styles.searchIcon}>
          <Image src={seachIcon} alt="search icon" height="15" width="15" />
        </div>
        <input
          type="text"
          placeholder="Author name, question tag etc.."
          style={styles.searchBar}
        />
      </div>

      <div style={styles.profileContainer}>
        {session && session.user ? (
          <>
            <Link href={`/user/${session.user.email}`}>
              <Image
                src={session.user.image}
                height="80"
                width="80"
                style={styles.avatar}
                alt="User avatar"
              />
            </Link>
            <button onClick={() => signOut()} style={styles.logOutButton}>
              Sign out
            </button>
          </>
        ) : (
          <div onClick={() => signIn("google")} style={styles.loginButton}>
            <div style={styles.googleIconContainer}>
              <Image
                src={googleIcon.src}
                height={40}
                width={40}
                alt="Google Icon"
                style={styles.googleIcon}
              />
            </div>
            <p style={styles.googleText}>Sign in With Google</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Appbar;
