import { FunctionComponent } from "react";
import AIKitFeature1 from "./AIKitFeature1";
import AIKitFeature from "./AIKitFeature";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.featuresWrapper, className].join(" ")}>
      <div className={styles.features}>
        <h1 className={styles.heading2}>Elevate your SEO efforts.</h1>
        <div className={styles.featureList}>
          <div className={styles.featureRow}>
            <AIKitFeature1
              title="User-friendly dashboard"
              body="Perform complex SEO audits and optimizations with a single click."
            />
            <AIKitFeature
              listChecks1="/listchecks-1.svg"
              contentEvaluation="Content evaluation"
              simpleCorrectionsForImmed="Simple corrections for immediate improvemens."
            />
            <AIKitFeature
              propPadding="unset"
              listChecks1="/magicwand-1.svg"
              contentEvaluation="Link Optimization Wizard"
              simpleCorrectionsForImmed="Guides you through the process of creating and managing links."
              propAlignSelf="stretch"
              propWidth="unset"
            />
          </div>
          <div className={styles.featureRow1}>
            <AIKitFeature
              propPadding="0px 20px 0px 0px"
              listChecks1="/chartline-1.svg"
              contentEvaluation="Visual reports"
              simpleCorrectionsForImmed="Visual insights into your site’s performance."
              propAlignSelf="unset"
              propWidth="265px"
            />
            <AIKitFeature
              propPadding="unset"
              listChecks1="/target-1.svg"
              contentEvaluation="SEO goal setting"
              simpleCorrectionsForImmed="Helps you set and achieve SEO goals with guided assistance."
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <AIKitFeature
              propPadding="0px 20px 0px 0px"
              listChecks1="/cursorclick-1.svg"
              contentEvaluation="One-click optimization"
              simpleCorrectionsForImmed="Perform complex SEO audits and optimizations with a single click."
              propAlignSelf="unset"
              propWidth="259px"
            />
          </div>
          <div className={styles.featureRow1}>
            <AIKitFeature
              propPadding="unset"
              listChecks1="/sparkle-1.svg"
              contentEvaluation="Smart Keyword Generator"
              simpleCorrectionsForImmed="Automatic suggestions and the best keywords to target."
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <AIKitFeature
              propPadding="unset"
              listChecks1="/bellringing-1.svg"
              contentEvaluation="Automated alerts"
              simpleCorrectionsForImmed="Automatic notifications about your SEO health, including quick fixes."
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <AIKitFeature
              propPadding="unset"
              listChecks1="/files-1.svg"
              contentEvaluation="Competitor reports"
              simpleCorrectionsForImmed="Provides insights into competitors’ keyword strategies and ranking."
              propAlignSelf="stretch"
              propWidth="unset"
            />
          </div>
        </div>
        <div className={styles.featuresChild} />
      </div>
    </section>
  );
};

export default FrameComponent1;
