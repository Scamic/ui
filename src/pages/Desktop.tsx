import { FunctionComponent } from "react";
import NavM from "../components/NavM";
import Hero from "../components/Hero";
import FrameComponent from "../components/FrameComponent";
import CategoryPair from "../components/CategoryPair";
import CategoryPair1 from "../components/CategoryPair1";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import CTA from "../components/CTA";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <NavM />
      <Hero />
      <FrameComponent />
      <section className={styles.featureIntro}>
        <div className={styles.featureCategories}>
          <div className={styles.featureHeadingContainer}>
            <h1 className={styles.heading2}>
              Harness the power of AI, making search engine optimization
              intuitive and effective for all skill levels.
            </h1>
          </div>
          <CategoryPair />
          <CategoryPair1 />
        </div>
      </section>
      <FrameComponent1 />
      <section className={styles.testimonialContentParent}>
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialHeadingContainer}>
            <h1 className={styles.heading21}>Our clients</h1>
          </div>
          <div className={styles.hearFirsthandHow}>
            Hear firsthand how our solutions have boosted online success for
            users like you.
          </div>
        </div>
        <img
          className={styles.testimonialIcon}
          loading="lazy"
          alt=""
          src="/testimonial.svg"
        />
      </section>
      <div className={styles.testimonialQuote}>
        <div className={styles.quoteContent}>
          <div className={styles.quoteContainer}>
            <blockquote className={styles.thisProductHas}>
              ”This product has completely transformed how I manage my projects
              and deadlines”
            </blockquote>
            <div className={styles.quoteContainerChild} />
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.taliaTaylor}>Talia Taylor</div>
            <div className={styles.digitalMarketingDirector}>
              Digital Marketing Director @ Quantum
            </div>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <CTA />
      <FrameComponent3 />
    </div>
  );
};

export default Desktop;
