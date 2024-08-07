import { FunctionComponent } from "react";
import styles from "./CTA.module.css";

export type CTAType = {
  className?: string;
};

const CTA: FunctionComponent<CTAType> = ({ className = "" }) => {
  return (
    <section className={[styles.cta, className].join(" ")}>
      <div className={styles.cTABackground} />
      <img
        className={styles.ctaSectionIcon}
        loading="lazy"
        alt=""
        src="/cta-section.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.heading2}>AI-driven SEO for everyone.</h1>
        <div className={styles.trialInfo}>
          <div className={styles.trialDetails}>
            <div className={styles.noCreditCard}>No credit card required</div>
            <div className={styles.div}>·</div>
            <div className={styles.noCreditCard}>7-days free trial</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
