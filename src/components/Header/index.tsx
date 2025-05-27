import styles from "./styles.module.css";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to="/"
          title="Timer"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="History"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  );
}
