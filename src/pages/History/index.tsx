import { Status } from "@/components";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDistanceToNow(new Date(cycle.startDate), { addSuffix: true, locale: ptBR })}</td>
                <td>
                  {cycle.finishedDate && (
                    <Status status="done" />
                  )}
                  {cycle.interruptedDate && (
                    <Status status="interrupted" />
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status status="inProgress" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}