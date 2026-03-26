import { posts } from "../../lib/data";
import PostCard from "./PostCard";
import styles from "./PostsGrid.module.css";

export default function PostsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={`${styles.eyebrow} font-sans`}>Latest Posts</p>
          <h2 className={`${styles.heading} font-headline`}>Curated Engineering Thoughts</h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.ctrlBtn} aria-label="Filter">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
          </button>
          <button className={styles.ctrlBtn} aria-label="Grid view">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
