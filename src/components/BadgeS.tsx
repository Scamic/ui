import { FunctionComponent } from "react";
import styles from "./BadgeS.module.css";

export type BadgeSType = {
  className?: string;
  text?: string;
};

const BadgeS: FunctionComponent<BadgeSType> = ({
  className = "",
  text = "NEW",
}) => {
  return (
    <div className={[styles.badges, className].join(" ")}>
      <b className={styles.new}>{text}</b>
    </div>
  );
};

export default BadgeS;
