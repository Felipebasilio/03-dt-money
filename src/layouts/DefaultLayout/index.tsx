import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styles from "./styles.module.css";

export function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  )
}