import { FunctionComponent } from "react";
import BadgeM from "./BadgeM";
import CTAS from "./CTAS";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <img
        className={styles.appMask}
        loading="lazy"
        alt=""
        src="/app--mask@2x.png"
      />
      <div className={styles.heroContent}>
        <div className={styles.heroInnerContent}>
          <div className={styles.badgeContainer}>
            <BadgeM text="Latest integration just arrived" />
          </div>
          <h1 className={styles.heading1}>
            <p className={styles.boostYour}>Boost your</p>
            <p className={styles.boostYour}>rankings with AI.</p>
          </h1>
          <div className={styles.heroBody}>
            <div className={styles.body}>
              Elevate your site’s visibility effortlessly with AI, where smart
              technology meets user-friendly SEO tools.
            </div>
          </div>
          <div className={styles.heroAction}>
            <div className={styles.heroActionButton}>
              <div className={styles.heroActionButtonChild} />
              <CTAS />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blackShade} />
    </section>
  );
};

export default Hero;
