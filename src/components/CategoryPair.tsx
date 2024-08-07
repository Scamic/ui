import { FunctionComponent } from "react";
import styles from "./CategoryPair.module.css";

export type CategoryPairType = {
  className?: string;
};

const CategoryPair: FunctionComponent<CategoryPairType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.categoryPair, className].join(" ")}>
      <div className={styles.seo}>
        <div className={styles.seoChild} />
        <div className={styles.nestedVisual}>
          <img
            className={styles.visualIcon}
            loading="lazy"
            alt=""
            src="/visual@2x.png"
          />
        </div>
        <div className={styles.sEOReports}>
          <div className={styles.seoGoalSetting}>SEO goal setting</div>
          <div className={styles.helpsYouSet}>
            Helps you set and achieve SEO goals with guided assistance.
          </div>
        </div>
      </div>
      <div className={styles.userFriendly}>
        <div className={styles.userFriendlyChild} />
        <img
          className={styles.visualIcon1}
          loading="lazy"
          alt=""
          src="/visual-1@2x.png"
        />
        <div className={styles.userFriendlyDashboard}>
          User-friendly dashboard
        </div>
        <div className={styles.performComplexSeo}>
          Perform complex SEO audits and optimizations with a single click.
        </div>
      </div>
    </div>
  );
};

export default CategoryPair;
