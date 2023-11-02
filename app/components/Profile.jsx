"use client";
import styles from "./profile.module.css";
import { useEffect, useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import Submissions from "./Submissions";
import Queries from "./Queries";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Profile = ({ data }) => {
  const router = useRouter();
  if (data === null) {
    toast.error("Could not find User with that Id", {
      position: "top-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    router?.replace("/");
  }

  const [type, setType] = useState("submissions");
  const [category, setCategory] = useState("all");
  const [submissions, setSubmissions] = useState([]);

  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (category === "all") {
      setSubmissions((prev) => (prev = data.subs));
    } else {
      const categoryPosts = data?.subs.filter(
        (sub) => sub.category === category
      );
      setSubmissions((prev) => (prev = categoryPosts));
    }
  }, [data, category]);

  return (
    <section className={styles.container}>
      <div className={styles.user_info}>
        <div className={styles.profile_info}>
          <Image
            src={data?.user?.avatar}
            alt="User avatar"
            className={styles.userimage}
            width={100}
            height={100}
          />
          <div>
            <h1 className={styles.name}>{data?.user?.name}</h1>
            <p>{data?.user?.email}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <div
            className={styles.stat}
            onClick={() => setType((prev) => (prev = "submissions"))}
          >
            <p>Submissions</p>
            <span>{submissions?.length} </span>
          </div>

          <div
            className={styles.stat}
            onClick={() => setType((prev) => (prev = "queries"))}
          >
            <p>Questions</p>
            <span>{data?.queries?.length}</span>
          </div>
        </div>
        {data?.categories?.length > 0
          ? type === "submissions" && (
              <div className={styles.categories_container}>
                <div className={styles.categories}>
                  <div className={styles.category}>
                    <p onClick={() => setCategory((prev) => (prev = "all"))}>
                      all
                    </p>
                  </div>

                  {data?.categories?.map((Currcategory) => {
                    return (
                      <div key={Currcategory} className={styles.category}>
                        <p
                          onClick={() =>
                            setCategory((prev) => (prev = Currcategory))
                          }
                        >
                          {Currcategory}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          : ""}
      </div>
      {type === "submissions" ? (
        <div className={styles.submissions_view}>
          <section className={styles.submissions}>
            <h1 className={styles.title}>Submissions</h1>
            {submissions?.length > 0 ? (
              <>
                <Submissions submissions={submissions} showImage={false} />
              </>
            ) : (
              <h1 className={styles.errormsg}>
                Looks like the User forgot to Post :(
              </h1>
            )}
          </section>
        </div>
      ) : (
        <div className={styles.queries}>
          <h1 className={styles.title}>Queries</h1>
          {data?.queries?.length > 0 ? (
            <Queries queries={data?.queries} />
          ) : (
            <h1 className={styles.errormsg}>
              This user is like a human Google search engine - knows
              everything.👍
            </h1>
          )}
        </div>
      )}
    </section>
  );
};

export default Profile;
