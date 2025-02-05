import styles from "./about.module.scss";
import Image from "next/image";
// import ProfilePic from "../../../assets/images/profile_pic.png";
import ProfilePic from "../../../assets/images/profile_pic.jpg";
import { Link } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useRef, createRef, useEffect, useState } from "react";
export const MainContent = () => {
  // const sectionRef = useRef(null);
  // const handleScroll = () => {
  //   sectionRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  const [year, setYear] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);

  useEffect(() => {
    const careerStartYear = 2021;
    const careerStartMonth = 2;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    let years = currentYear - careerStartYear;
    let months = currentMonth - careerStartMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    setYear(years);
    setMonths(months);
  }, []);
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
            offering {year} years {months !== 0 && `and ${months} months`} of related experience.
          </p>
          <div className={styles.downloadButton}>
            <button
              onClick={() => {
                window.open(
                  "https://s3.ap-south-1.amazonaws.com/t42-assets.tech42.in/resumes/resume_final.pdf",
                  "_blank"
                );
              }}
              className={styles.linkedinButtonText}
            >
              <div>View Resume</div>
            </button>
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
