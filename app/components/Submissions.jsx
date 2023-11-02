"use client";
import Modal from "./Modal";
import styles from "./Submissions.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SubmissionsLoading from "./SubmissionsLoading";
const Submissions = ({ submissions, showImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState(null);
  const handleOpenModal = (post) => {
    setCurrentCode(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.section}>
      <Modal
        isOpen={isModalOpen}
        currentCode={currentCode}
        onClose={() => handleCloseModal()}
      />
      <ul className={styles.list}>
        {submissions?.length ? (
          submissions.map((submission) => {
            return (
              <div className={styles.listItem} key={submission.title}>
                <li onClick={() => handleOpenModal(submission)}>
                  {showImage
                    ? submission.title.slice(0, 23)
                    : submission.title.slice(0, 30)}

                  {showImage
                    ? submission.title.length > 25 && ".."
                    : submission.title.length > 30 && ".."}
                </li>
                {showImage && (
                  <Link href={`/user/${submission.author.email}`}>
                    <Image
                      src={submission.author.avatar}
                      alt="user avatar"
                      height={55}
                      width={40}
                    />
                  </Link>
                )}
              </div>
            );
          })
        ) : (
          <SubmissionsLoading />
        )}
      </ul>
    </section>
  );
};

export default Submissions;
