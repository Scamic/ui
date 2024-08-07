import { FunctionComponent } from "react";
import styles from "./ToggleButton.module.css";

export type ToggleButtonType = {
  className?: string;
};

const ToggleButton: FunctionComponent<ToggleButtonType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.toggleButton, className].join(" ")}>
      <div className={styles.toggleBackground} />
      <div className={styles.toggleForeground} />
    </div>
  );
};

export default ToggleButton;
