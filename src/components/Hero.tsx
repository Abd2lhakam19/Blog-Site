import Image from "next/image";
import { featuredPost } from "../../lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const { label, title, description, author, readTime } = featuredPost;
  const lines = title.split("\n");

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.line} />

      <h1 className={`${styles.title} font-headline`}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p className={`${styles.description} font-sans`}>{description}</p>

      <div className={styles.author}>
        <div className={styles.avatar}>
          <Image
            alt=""
            width={50}
            height={50}
            src={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDws5SKGjAiL2b-aTi9RE8BI8khoIFEplIRxjQTIppLIcyZDB_QnnwaT22L59SahuZdLRnAGnle2Bah8vW5M_6uVYS3wcl9PHf42f_SanMynqtTmcxylcGwdbPecx47HBu1FutPnxhFksWSmUT498hCo5tofGVdM84ENbjk24Ql0WYOK-UcaEuyetjYSMygLg4QxBFRvfc68jANkzuwLvgCUg085xHsMV7-lEQkDymww0l5im4L1UOieV61JvMgg0GRsT3bOkDXsjML"
            }
          />
        </div>
        <div className={`${styles.authorMeta} `}>
          <strong>{author.name}</strong>
          {author.role} — {readTime}
        </div>
      </div>
    </section>
  );
}
