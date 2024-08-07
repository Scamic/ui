import { FunctionComponent } from "react";
import styles from "./NavElements.module.css";

export type NavElementsType = {
  className?: string;
  text?: string;
  text2?: string;
  text5?: string;
  text3?: string;
  text4?: string;
};

const NavElements: FunctionComponent<NavElementsType> = ({
  className = "",
  text = "Features",
  text2 = "Developers",
  text5 = "Changelog",
  text3 = "Company",
  text4 = "Blog",
}) => {
  return (
    <div className={[styles.navElements, className].join(" ")}>
      <div className={styles.dropdownLinks}>
        <a className={styles.features}>{text}</a>
        <img className={styles.caretDown1Icon} alt="" src="/caretdown-1.svg" />
      </div>
      <a className={styles.developers}>{text2}</a>
      <div className={styles.dropdownLinks}>
        <a className={styles.features}>{text3}</a>
        <img className={styles.caretDown1Icon} alt="" src="/caretdown-1.svg" />
      </div>
      <a className={styles.features}>{text4}</a>
      <a className={styles.changelog}>{text5}</a>
    </div>
  );
};

export default NavElements;
