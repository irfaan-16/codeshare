"use client";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "./login.module.css";
import googleIcon from "@/public/google.png";
import littleNerd from "@/public/littlenerd.png";
import Link from "next/link";

import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    redirect("/submissions");
  }

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.heading}>CODESHARE</h1>
        <p className={styles.desc}>
          Accelerate Your Coding Journey: Share, Review,
          <br /> and Evolve with Like-minded Developers
        </p>
        <div className={styles.buttons}>
          <div className={styles.googlebtn} onClick={() => signIn("google")}>
            <Image
              src={googleIcon.src}
              height={30}
              width={30}
              alt="Google Icon"
            />
            <p>Login With Google</p>
          </div>
          <span>OR</span>
          <Link href={"/submissions"}>
            <button className={styles.guest}>Continue as Guest</button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={littleNerd}
          height={500}
          width={450}
          alt="illustration"
          className={styles.littlenerd}
        />
      </div>
    </section>
  );
};

export default Login;
