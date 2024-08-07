import { FunctionComponent } from "react";
import ToggleButton from "./ToggleButton";
import styles from "./ToggleText.module.css";

export type ToggleTextType = {
  className?: string;
  text?: string;
};

const ToggleText: FunctionComponent<ToggleTextType> = ({
  className = "",
  text = "dsad",
}) => {
  return (
    <div className={[styles.toggletext, className].join(" ")}>
      <div className={styles.toggleButtonContainer}>
        <ToggleButton />
      </div>
      <div className={styles.billedYearly}>{text}</div>
    </div>
  );
};

export default ToggleText;
