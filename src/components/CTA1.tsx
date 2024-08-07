import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CTA1.module.css";

export type CTA1Type = {
  className?: string;
  text?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const CTA1: FunctionComponent<CTA1Type> = ({
  className = "",
  text = "Join waitlist",
  propBackgroundColor,
}) => {
  const cTAStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={[styles.cta, className].join(" ")} style={cTAStyle}>
      <div className={styles.joinWaitlist}>{text}</div>
    </button>
  );
};

export default CTA1;
