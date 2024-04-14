import styles from "./experience.module.scss";
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>Where I've Worked</h1>
          <div className={styles.underLine}></div>
        </div>
        <div className={styles.companyContainer}>
          <div className={styles.companyCards}>
            <div className={styles.companyHeading}>
              <h3>
                <span className={styles.role}>Software Engineer</span>{" "}
                <span className={styles.companyName}>
                  @{" "}
                  <a target="_blank" href="https://censanext.com/">
                    CensaNext
                  </a>
                </span>
              </h3>
              <p className={styles.range}>November 2022 - Present</p>
            </div>
            <div className={styles.details}>
              <ul>
                <li>
                  Leading a team of five members responsible for developing a
                  critical logistics flow for the supply chain. By coordinating
                  with stakeholders and guiding the team effectively.
                </li>
                <li>
                  I have successfully optimized code and queries to
                  significantly improve the performance of applications. My
                  efforts have resulted in faster response times and enhanced
                  overall efficiency, benefiting both users and the business.
                </li>
                {/* <li>
                  Increased customer satisfaction by resolving various bugs and
                  issues on production channel.
                </li> */}
              </ul>
            </div>
          </div>
          <div className={styles.companyCards}>
            <div className={styles.companyHeading}>
              <h3>
                <span className={styles.role}>Fullstack Engineer</span>{" "}
                <span className={styles.companyName}>
                  @{" "}
                  <a target="_blank" href="https://www.wealth42.com">
                    Wealth42
                  </a>
                </span>
              </h3>
              <p className={styles.range}>July 2022 - November 2022</p>
            </div>
            <div className={styles.details}>
              <ul>
                <li>
                  Delivered performance-driven and user-centric websites that
                  met all business requirements.
                </li>
                <li>
                  Created website that serves as dashboard/utility for
                  operational excellence of core product.
                </li>
                {/* <li>
                  Increased customer satisfaction by resolving various bugs and
                  issues on production channel.
                </li> */}
              </ul>
            </div>
          </div>
          <div className={styles.companyCards}>
            <div className={styles.companyHeading}>
              <h3>
                <span className={styles.role}>Software Developer</span>{" "}
                <span className={styles.companyName}>
                  @{" "}
                  <a target="_blank" href="https://www.ghoshak.com">
                    Ghoshak
                  </a>
                </span>
              </h3>
              <p className={styles.range}>February 2021 - July 2022</p>
            </div>
            <div className={styles.details}>
              <ul>
                <li>
                  Collaborated with project managers to select ambitious, but
                  realistic coding milestones on pre-release software project
                  development.
                </li>
                {/* <li>
                  Led version control efforts for organization, employing public
                  and open source repositories.
                </li> */}
                <li>
                  Documented technical workflows and knowledge to educate newly
                  hired employees.
                </li>
                {/* <li>
                  Discussed project progress with customers, collected feedback
                  on different stages and directly addressed concerns.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
