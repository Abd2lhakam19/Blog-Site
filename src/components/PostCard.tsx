import Image from "next/image";
import styles from "./PostCard.module.css";
import { Post } from "../../lib/data";

export default function PostCard({ post }: { post: Post }) {
  if (post.skeleton) {
    return (
      <article
        className={`${styles.card} border border-surface-variant transition-colors duration-300 hover:border-[#c3c6d7]`}
      >
        <div className={`${styles.imageSkeleton} ${styles.skeleton}`} />
        <div className={styles.body}>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={`${styles.skelTitle} ${styles.skeleton}`} />
          <div
            className={`${styles.skelText} ${styles.skeleton}`}
            style={{ width: "100%" }}
          />
          <div
            className={`${styles.skelText} ${styles.skeleton}`}
            style={{ width: "75%" }}
          />
          <div className={styles.footer}>
            <div className={styles.authorRow}>
              <div className={`${styles.avatarSkel} ${styles.skeleton}`} />
              <div
                className={`${styles.skelText} ${styles.skeleton}`}
                style={{ width: 80 }}
              />
            </div>
            <div
              className={`${styles.skelText} ${styles.skeleton}`}
              style={{ width: 50 }}
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${styles.card} rounded-md border border-surface-variant transition-colors duration-300 hover:border-[#c3c6d7]`}
    >
      {post.image && (
        <div className={styles.imageWrap}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.tag} rounded-full font-sans font-bold`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`${styles.title} font-headline`}>{post.title}</h3>
        <p
          className={`${styles.excerpt} font-sans line-clamp-2 overflow-hidden`}
        >
          {post.excerpt}
        </p>
        <div className={styles.footer}>
          <div className={styles.authorRow}>
            <div className={styles.avatar}>
              {post.image && (
                <Image
                  width={100}
                  height={100}
                  src={post.image}
                  alt={post.title}
                  className={styles.image}
                />
              )}
            </div>
            <span className={`${styles.authorName} font-sans`}>
              {post.author.name}
            </span>
          </div>
          <span className={`${styles.readTime} font-display`}>
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
