import Image from "next/image";
import styles from "./projects.module.scss";
import PosImage from "../../../assets/images/pos_image.jpg";
import LogisticsImage from "../../../assets/images/logistics.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>Some Things I've Built</h1>
          <div className={styles.underLine}></div>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectHeading}>
                <p>Ghoshak POS </p>{" "}
                <div className={styles.projectLink}>
                  <a href="https://billing.ghoshak.store">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
              <h3>Point of sale software</h3>
              <div className={styles.projectDescription}>
                <p>
                  I developed a POS software from the ground up, covering both
                  front-end and back-end aspects. By taking complete ownership
                  of the project, I delivered the MVP ahead of schedule and
                  continuously made improvements to enhance the user experience.
                </p>
              </div>
              <ul className={styles.techList}>
                <li>ReactJs</li>
                <li>NodeJS</li>
                <li>DynamoDB</li>
                <li>Lambda</li>
                <li>Cognito</li>
              </ul>
            </div>

            <div className={styles.projectImageContainer}>
              <a href="https://billing.ghoshak.store">
                <div style={{ maxWidth: "700px", display: "block" }}>
                  <Image
                    className={styles.projectImage}
                    src={PosImage}
                    alt="posImage"
                    layout="responsive"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={styles.projectCard} style={{ marginTop: "30px" }}>
            <div className={styles.projectContent}>
              <div className={styles.projectHeading}>
                <p>Logistics Portal</p>{" "}
                <div className={styles.projectLink}>
                  <a href="https://naga-logistics.censanext.com">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
              <h3>Logistics Solution in SCM</h3>
              <div className={styles.projectDescription}>
                <p>
                  I designed and implemented a logistics solution, leading a
                  team to optimize supply chain flow. By collaborating with
                  multiple teams, I ensured seamless integration with other
                  services, improving operational efficiency across the supply
                  chain.
                </p>
              </div>
              <ul className={styles.techList}>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>MySql</li>
              </ul>
            </div>

            <div className={styles.projectImageContainer}>
              <a href="https://billing.ghoshak.store">
                <div style={{ maxWidth: "700px", display: "block" }}>
                  <Image
                    className={styles.projectImage}
                    src={LogisticsImage}
                    alt="logistics image"
                    layout="responsive"
                  />
                </div>
              </a>
            </div>
          </div>
          {/* <div className={styles.projectCard} style={{ marginTop: "30px" }}>
            <div className={styles.projectContent}>
              <div className={styles.projectHeading}>
                <p>Ghoshak POS </p>{" "}
                <div className={styles.projectLink}>
                  <a href="https://billing.ghoshak.store">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
              <h3>Point of sale software</h3>
              <div className={styles.projectDescription}>
                <p>
                  I developed a POS software from the ground up, covering both
                  front-end and back-end aspects. By taking complete ownership
                  of the project, I delivered the MVP ahead of schedule and
                  continuously made improvements to enhance the user experience.
                </p>
              </div>
              <ul className={styles.techList}>
                <li>React</li>
                <li>NodeJS</li>
                <li>DynamoDB</li>
                <li>Lambda</li>
                <li>Cognito</li>
              </ul>
            </div>

            <div className={styles.projectImageContainer}>
              <a href="https://billing.ghoshak.store">
                <div style={{ maxWidth: "700px", display: "block" }}>
                  <Image
                    className={styles.projectImage}
                    src={PosImage}
                    alt="posImage"
                    layout="responsive"
                  />
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
