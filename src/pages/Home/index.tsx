import styles from "./styles.module.css";
import { StartCountdownButton } from "@/components";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <form action="">
        <div className={styles.formContainer}>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className={styles.taskInput}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" placeholder="00" className={styles.minutesAmountInput} step={5} min={5} max={60} />

          <span>minutos.</span>
        </div>

        <div className={styles.countdownContainer}>
          <span>0</span>
          <span>0</span>
          <span className={styles.separator}>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <StartCountdownButton />
      </form>
    </div>
  );
}
