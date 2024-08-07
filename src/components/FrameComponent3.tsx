import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerWrapper, className].join(" ")}>
      <div className={styles.footer}>
        <img
          className={styles.logokit1Icon}
          loading="lazy"
          alt=""
          src="/logokit-1@2x.png"
        />
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <div className={styles.productLinks}>
              <div className={styles.product}>Product</div>
              <div className={styles.features}>Features</div>
              <div className={styles.features}>Integration</div>
              <div className={styles.features}>Updates</div>
              <div className={styles.features}>FAQ</div>
              <div className={styles.features}>Pricing</div>
            </div>
            <div className={styles.productLinks}>
              <div className={styles.product}>Company</div>
              <a className={styles.about}>About</a>
              <div className={styles.features}>Blog</div>
              <div className={styles.features}>Careers</div>
              <div className={styles.features}>Manifesto</div>
              <div className={styles.features}>Press</div>
              <div className={styles.features}>Contract</div>
            </div>
          </div>
          <div className={styles.resourceLinks}>
            <div className={styles.productLinks}>
              <div className={styles.product}>Resources</div>
              <div className={styles.features}>Examples</div>
              <div className={styles.features}>Community</div>
              <a className={styles.about}>Guides</a>
              <div className={styles.features}>Docs</div>
              <div className={styles.features}>Press</div>
            </div>
            <div className={styles.productLinks}>
              <div className={styles.product}>Legal</div>
              <div className={styles.features}>Privacy</div>
              <div className={styles.features}>Terms</div>
              <div className={styles.features}>Security</div>
            </div>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.xLogoFill1Icon}
            loading="lazy"
            alt=""
            src="/xlogofill-1.svg"
          />
          <img
            className={styles.xLogoFill1Icon}
            loading="lazy"
            alt=""
            src="/instagramlogofill-1.svg"
          />
          <img
            className={styles.xLogoFill1Icon}
            loading="lazy"
            alt=""
            src="/youtubelogofill-1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent3;
