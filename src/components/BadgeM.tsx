import { FunctionComponent } from "react";
import BadgeS from "./BadgeS";
import styles from "./BadgeM.module.css";

export type BadgeMType = {
  className?: string;
  text?: string;
};

const BadgeM: FunctionComponent<BadgeMType> = ({
  className = "",
  text = "Latest integration just arrived",
}) => {
  return (
    <div className={[styles.badgem, className].join(" ")}>
      <div className={styles.newBadgeContainer}>
        <BadgeS text="NEW" />
      </div>
      <div className={styles.latestIntegrationJust}>{text}</div>
    </div>
  );
};

export default BadgeM;
