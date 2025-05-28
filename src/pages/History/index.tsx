import { Status } from "@/components";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext);
  
  return (
    <div className={styles.historyContainer}>
      <h1 className={styles.historyContainerTitle}>Meu histórico</h1>

      <div className={styles.historyList}>
        <table className={styles.historyListTable}>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status status="done" /></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status status="inProgress" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}