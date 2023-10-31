import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch("https://meganews.vercel.app/api/editorsPick", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const data = await getData();
  return (
    <div className={styles.items}>
      {data.map((item) => (
        <Link
          href={`/posts/${item.slug}`}
          className={styles.item}
          key={item._id}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {item?.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item?.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item?.user}</span>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;

