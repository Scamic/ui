import { FunctionComponent } from "react";
import ToggleText from "./ToggleText";
import PricingCard from "./PricingCard";
import CTA1 from "./CTA1";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pricingWrapper, className].join(" ")}>
      <div className={styles.pricing}>
        <div className={styles.pricingHeadingContainer}>
          <h1 className={styles.heading2}>Pricing</h1>
        </div>
        <div className={styles.pricingBody}>
          <div className={styles.bodyContainer}>
            <div className={styles.body}>
              Choose the right plan to meet your SEO needs and start optimizing
              today.
            </div>
          </div>
          <div className={styles.pricingToggle}>
            <div className={styles.toggleContainer}>
              <ToggleText text="dsad" />
            </div>
            <div className={styles.pricingPlans}>
              <div className={styles.planComparison}>
                <PricingCard
                  pricing="Pricing"
                  mo="$29/mo"
                  propHeight="unset"
                  propPadding="unset"
                  showPricingRow={false}
                  pricingRowVisible={false}
                  pricingRowVisible1={false}
                  pricingRowVisible2={false}
                  text="Join waitlist"
                />
              </div>
              <div className={styles.pricingCard}>
                <div className={styles.proPlanStyling}>
                  <div className={styles.proCardBackground} />
                  <img
                    className={styles.patternIcon}
                    alt=""
                    src="/pattern@2x.png"
                  />
                </div>
                <div className={styles.proPlanInfo}>
                  <div className={styles.proPricingDetails}>
                    <div className={styles.proPricing}>
                      <h3 className={styles.pro}>Pro</h3>
                      <div className={styles.mo}>$79/mo</div>
                    </div>
                    <div className={styles.pricingRows}>
                      <div className={styles.pricingRow}>
                        <img
                          className={styles.icons}
                          loading="lazy"
                          alt=""
                          src="/icons.svg"
                        />
                        <div className={styles.keywordOptimization}>
                          Keyword optimization
                        </div>
                      </div>
                      <div className={styles.pricingRow}>
                        <img className={styles.icons} alt="" src="/icons.svg" />
                        <div className={styles.keywordOptimization}>
                          Automated meta tags
                        </div>
                      </div>
                      <div className={styles.pricingRow}>
                        <img className={styles.icons} alt="" src="/icons.svg" />
                        <div className={styles.seoMonitoring}>
                          SEO monitoring
                        </div>
                      </div>
                      <div className={styles.pricingRow}>
                        <img className={styles.icons} alt="" src="/icons.svg" />
                        <div className={styles.seoMonitoring}>
                          Monthly reports
                        </div>
                      </div>
                      <div className={styles.pricingRow}>
                        <img className={styles.icons} alt="" src="/icons.svg" />
                        <div className={styles.keywordOptimization}>
                          Content suggestions
                        </div>
                      </div>
                      <div className={styles.pricingRow}>
                        <img className={styles.icons} alt="" src="/icons.svg" />
                        <div className={styles.seoMonitoring}>
                          Link optimization
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.proPlanSeparator} />
                </div>
                <CTA1
                  text="Join waitlist"
                  propBackgroundColor="rgba(140, 69, 255, 0.4)"
                />
              </div>
              <div className={styles.planComparison}>
                <PricingCard
                  pricing="Business"
                  mo="$149/mo"
                  showPricingRow
                  pricingRowVisible
                  pricingRowVisible1
                  pricingRowVisible2
                  text="Join waitlist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
