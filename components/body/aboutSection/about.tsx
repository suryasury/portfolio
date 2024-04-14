import styles from "./about.module.scss";
import Image from "next/image";
import ProfilePic from "../../../assets/images/profile_pic.png";
import { Link } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useRef, createRef } from "react";
export const MainContent = () => {
  // const sectionRef = useRef(null);
  // const handleScroll = () => {
  //   sectionRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className={styles.container} id="about">
      <div className={styles.mainContent}>
        <div className={styles.aboutDescription}>
          <h1>Hi, I am Surya</h1>
          <p>
            Hands-on Full Stack Developer familiar with ReactJS, NodeJS, AWS
            services, and a range of programming utilities. Knowledgeable at
            translating customer requirements into testable engineering plans.
            Collaborative Team player with excellent technical abilities
            offering 3 years and 6 months of related experience.
          </p>
          <div className={styles.downloadButton}>
            <button>Download resume</button>
            <button>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/surya-a-5050611b7/"
              >
                <div className={styles.linkedinButtonText}>
                  <div>View Profile</div>
                  <OpenInNewIcon />
                </div>
              </a>
            </button>
          </div>
        </div>
        <div className={styles.profilePicContainer}>
          <Image
            src={ProfilePic}
            alt="profile"
            width={350}
            height={350}
            className={styles.profilePic}
          />
        </div>
      </div>
    </div>
  );
};
