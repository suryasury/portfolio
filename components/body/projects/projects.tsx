import Image from "next/image";
import styles from "./projects.module.scss";
import PosImage from "../../../assets/images/pos_image.jpg";
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
              <p>Ghoshak POS</p>
              <h3>Point of sale software</h3>
              <div className={styles.projectDescription}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  commodo tortor nec arcu sollicitudin hendrerit. Nunc pretium
                  at tellus in sagittis. Sed rutrum posuere magna sodales
                  condimentum. Nullam id arcu quam. Cras scelerisque sit amet
                  est non convallis. Aenean in consequat quam. Nunc quis turpis
                  sollicitudin,
                </p>
              </div>
              <ul className={styles.techList}>
                <li>React</li>
                <li>NodeJS</li>
                <li>DynamoDB</li>
                <li>Lambda</li>
                <li>Cognito</li>
              </ul>
              <div className={styles.projectLink}>
                <a href="https://billing.ghoshak.store">
                  <OpenInNewIcon />
                </a>
              </div>
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
        </div>
      </div>
    </section>
  );
};
