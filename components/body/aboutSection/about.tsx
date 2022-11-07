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
      <div className={styles.aboutDescription}>
        <h1>Hi, I am Surya, Fullstack developer</h1>
        <p>
          Hands-on Full Stack Developer familiar with ReactJS, NodeJS, AWS
          services, and a range of programming utilities. Knowledgeable at
          translating customer requirements into testable engineering plans.
          Collaborative Team player with excellent technical abilities offering
          1.5+ years of related experience.
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
        {/* <div className={styles.blobWrapper}>
          <Image
            src={ProfilePic}
            alt="profile"
            width={300}
            height={300}
            className={styles.profilePic}
          />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              className={styles.blob}
              fill="#FF0066"
              d="M43.5,-64.4C58.4,-58.1,74,-49.5,79.5,-36.6C85,-23.6,80.4,-6.4,77.1,10.6C73.9,27.6,72.2,44.3,64.1,58.1C56.1,72,41.9,83,26.9,83.8C12,84.5,-3.6,75.1,-17.9,67.7C-32.1,60.4,-44.9,55.2,-53,45.9C-61.2,36.6,-64.7,23.2,-65.6,10.1C-66.5,-3.1,-64.9,-16,-61,-29.3C-57.2,-42.7,-51.3,-56.6,-40.7,-64.9C-30.2,-73.1,-15.1,-75.8,-0.4,-75.2C14.3,-74.5,28.6,-70.6,43.5,-64.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div> */}

        <Image
          src={ProfilePic}
          alt="profile"
          width={350}
          height={350}
          className={styles.profilePic}
        />
      </div>
    </div>
  );
};
