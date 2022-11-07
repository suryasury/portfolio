import Link from "next/link";
import styles from "./header.module.scss";
import { HamburgerMenu } from "../topBarMenu/topBarMenu";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SURYA<span> A</span>
      </div>
      <HamburgerMenu />
    </div>
  );
};
