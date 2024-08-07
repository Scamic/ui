import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CTA1 from "./CTA1";
import styles from "./PricingCard.module.css";

export type PricingCardType = {
  className?: string;
  pricing?: string;
  mo?: string;
  showPricingRow?: boolean;
  pricingRowVisible?: boolean;
  pricingRowVisible1?: boolean;
  pricingRowVisible2?: boolean;
  text?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
};

const PricingCard: FunctionComponent<PricingCardType> = ({
  className = "",
  pricing,
  mo,
  propHeight,
  propPadding,
  showPricingRow,
  pricingRowVisible,
  pricingRowVisible1,
  pricingRowVisible2,
  text,
}) => {
  const pricingRowsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div className={[styles.pricingCard, className].join(" ")}>
      <div className={styles.pricingCardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.pricingParent}>
            <h3 className={styles.pricing}>{pricing}</h3>
            <div className={styles.mo}>{mo}</div>
          </div>
          <div className={styles.pricingRows} style={pricingRowsStyle}>
            <div className={styles.pricingRow}>
              <img className={styles.icons} alt="" src="/icons.svg" />
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
              <div className={styles.seoMonitoring}>SEO monitoring</div>
            </div>
            <div className={styles.pricingRow}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.seoMonitoring}>Monthly reports</div>
            </div>
            {showPricingRow && (
              <div className={styles.pricingRow}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <div className={styles.keywordOptimization}>
                  Content suggestions
                </div>
              </div>
            )}
            {pricingRowVisible && (
              <div className={styles.pricingRow}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <div className={styles.seoMonitoring}>Link optimization</div>
              </div>
            )}
            {pricingRowVisible1 && (
              <div className={styles.pricingRow}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <div className={styles.seoMonitoring}>Multi-user access</div>
              </div>
            )}
            {pricingRowVisible2 && (
              <div className={styles.pricingRow}>
                <img className={styles.icons} alt="" src="/icons.svg" />
                <div className={styles.seoMonitoring}>API integration</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <CTA1 text={text} />
    </div>
  );
};

export default PricingCard;
