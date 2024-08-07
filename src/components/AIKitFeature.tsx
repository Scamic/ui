import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AIKitFeature.module.css";

export type AIKitFeatureType = {
  className?: string;
  listChecks1?: string;
  contentEvaluation?: string;
  simpleCorrectionsForImmed?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const AIKitFeature: FunctionComponent<AIKitFeatureType> = ({
  className = "",
  propPadding,
  listChecks1,
  contentEvaluation,
  simpleCorrectionsForImmed,
  propAlignSelf,
  propWidth,
}) => {
  const aIKitFeatureStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const simpleCorrectionsForStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.aiKitfeature, className].join(" ")}
      style={aIKitFeatureStyle}
    >
      <div className={styles.iconTitleContainerDuplicate}>
        <img
          className={styles.listChecks1Icon}
          loading="lazy"
          alt=""
          src={listChecks1}
        />
        <div className={styles.contentEvaluation}>{contentEvaluation}</div>
      </div>
      <div
        className={styles.simpleCorrectionsFor}
        style={simpleCorrectionsForStyle}
      >
        {simpleCorrectionsForImmed}
      </div>
    </div>
  );
};

export default AIKitFeature;
