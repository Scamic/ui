import { FunctionComponent } from "react";
import styles from "./CategoryPair1.module.css";

export type CategoryPair1Type = {
  className?: string;
};

const CategoryPair1: FunctionComponent<CategoryPair1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.categoryPair, className].join(" ")}>
      <div className={styles.visualReports}>
        <div className={styles.visualReportsChild} />
        <img
          className={styles.visualIcon}
          loading="lazy"
          alt=""
          src="/visual-2@2x.png"
        />
        <div className={styles.visualReports1}>Visual reports</div>
        <div className={styles.visualInsightsInto}>
          Visual insights into your site’s performance.
        </div>
      </div>
      <div className={styles.smartGenerator}>
        <div className={styles.smartGeneratorChild} />
        <div className={styles.visualWrapper}>
          <img
            className={styles.visualIcon1}
            loading="lazy"
            alt=""
            src="/visual-3@2x.png"
          />
        </div>
        <div className={styles.smartKeywordGeneratorParent}>
          <div className={styles.smartKeywordGenerator}>
            Smart Keyword Generator
          </div>
          <div className={styles.automaticSuggestionsAnd}>
            Automatic suggestions and the best keywords to target.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPair1;
