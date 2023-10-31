import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://meganews.vercel.app/api/isFeatured", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.post} key={item._id}>
          <div className={styles.imgContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{item?.title}</h1>
            <p
              className={styles.postDesc}
              dangerouslySetInnerHTML={{
                __html: item?.desc.substring(0, 200),
              }}
            ></p>
            <Link
              href={`/posts/${item.slug}`}
              className={styles.item}
              key={item._id}
            >
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;

