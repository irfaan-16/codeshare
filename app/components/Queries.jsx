"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import styles from "./Queries.module.css";
import moment from "moment/moment";
import Loading from "./Loading";
import Link from "next/link";

const Queries = ({ queries }) => {
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
    <section>
      <Modal
        isOpen={isModalOpen}
        currentCode={currentCode}
        onClose={() => handleCloseModal()}
      />

      <div className={styles.postsContainer}>
        {queries?.length ? (
          queries.map((post) => {
            return (
              <div className={styles.post} key={post._id}>
                <h3
                  className={styles.truncate}
                  onClick={() => handleOpenModal(post)}
                >
                  {post.title.length > 30
                    ? post.title.split(" ").slice(0, 20).join(" ") + "...."
                    : post.title}
                </h3>
                <p className={styles.desc}>
                  {post.desc.length > 150
                    ? post.desc.split(" ").slice(0, 40).join(" ") + "...."
                    : post.desc}
                </p>

                <div className={styles.footer}>
                  <span className={styles.date}>
                    {moment(post.createdAt, "YYYYMMDD").fromNow()}
                  </span>
                  <div className={styles.flex}>
                    <div className={styles.post_tags}>
                      <ul className={styles.tagsList}>
                        {post.tags.slice(0, 2).map((tag) => {
                          return <li className={styles.tag} key={tag}>{tag}</li>;
                        })}
                      </ul>
                    </div>
                    <Link href={`/user/${post.author.email}`}>
                      <div className={styles.author_info}>
                        <p className={styles.username}>{post.author.name}</p>
                        <Image
                          src={post.author.avatar}
                          alt="user profile photo"
                          height={40}
                          width={40}
                          className={styles.avatar}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default Queries;
