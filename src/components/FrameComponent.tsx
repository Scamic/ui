import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.companiesWrapper, className].join(" ")}>
      <div className={styles.companies}>
        <div className={styles.trustedByThe}>
          Trusted by the world’s most innovative teams
        </div>
        <div className={styles.logos}>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-1@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-2@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-3@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-4@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-5@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-6@2x.png"
            />
          </div>
          <div className={styles.logobox}>
            <img
              className={styles.acme1Icon}
              loading="lazy"
              alt=""
              src="/acme-1-7@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
