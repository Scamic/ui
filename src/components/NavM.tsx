import { FunctionComponent } from "react";
import NavElements from "./NavElements";
import styles from "./NavM.module.css";

export type NavMType = {
  className?: string;
};

const NavM: FunctionComponent<NavMType> = ({ className = "" }) => {
  return (
    <header className={[styles.navm, className].join(" ")}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <NavElements
        text="Features"
        text2="Developers"
        text5="Changelog"
        text3="Company"
        text4="Blog"
      />
      <button className={styles.cta}>
        <div className={styles.cta1}>
          <a className={styles.joinWaitlist}>Join waitlist</a>
        </div>
      </button>
    </header>
  );
};

export default NavM;
