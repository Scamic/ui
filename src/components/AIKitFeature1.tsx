import { FunctionComponent } from "react";
import styles from "./AIKitFeature1.module.css";

export type AIKitFeature1Type = {
  className?: string;
  title?: string;
  body?: string;
};

const AIKitFeature1: FunctionComponent<AIKitFeature1Type> = ({
  className = "",
  title = "User-friendly dashboard",
  body = "Perform complex SEO audits and optimizations with a single click.",
}) => {
  return (
    <div className={[styles.aiKitfeature, className].join(" ")}>
      <div className={styles.iconTitleContainer}>
        <img
          className={styles.gauge1Icon}
          loading="lazy"
          alt=""
          src="/gauge-1.svg"
        />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default AIKitFeature1;
