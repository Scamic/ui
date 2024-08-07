import { FunctionComponent } from "react";
import styles from "./CTAS.module.css";

export type CTASType = {
  className?: string;
};

const CTAS: FunctionComponent<CTASType> = ({ className = "" }) => {
  return (
    <button className={[styles.ctaS, className].join(" ")}>
      <div className={styles.startForFree}>Start for free</div>
    </button>
  );
};

export default CTAS;
