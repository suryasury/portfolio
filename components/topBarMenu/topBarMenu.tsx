import Link from "next/link";
import styles from "./topBarMenu.module.scss";
import { Menu, MenuOpen, HighlightOff } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export const HamburgerMenu = () => {
  const sectionRef = useRef(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [dimension, setDimension] = useState({
    width: 600,
  });
  const menuToggleHandler = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      setDimension({ width: window.innerWidth });
    } else {
      window.onload = (e) => {
        setDimension({ width: window.innerWidth });
      };
    }
    ["resize"].map((data) => {
      window.addEventListener(
        data,
        () => {
          setDimension({ width: window.innerWidth });
        },
        false
      );
    });
  }, []);

  // const handleScroll = () => {
  //   sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    if (dimension.width <= 600) {
      if (isMenuOpened && document.getElementById("nav-links")) {
        let menu: any = document.getElementById("nav-links");
        menu.style.visibility = "unset";
        menu.style.display = "flex";
      } else if (document.getElementById("nav-links")) {
        let menu: any = document.getElementById("nav-links");
        menu.style.visibility = "hidden";
        menu.style.display = "none";
      }
    } else {
      let menu: any = document.getElementById("nav-links");
      menu.style.display = "flex";
      menu.style.visibility = "unset";
    }
  }, [isMenuOpened, dimension]);

  return (
    <div className={styles.container}>
      <div className={styles.menuIcon} onClick={menuToggleHandler}>
        {isMenuOpened ? <HighlightOff /> : <Menu />}
      </div>
      <div className={styles.navLinks} id="nav-links">
        <Link href="#about" className="container">
          About
        </Link>
        <Link href="#skill-set">Skill Set</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};
