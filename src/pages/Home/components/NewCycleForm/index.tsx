import { useContext } from "react";
import styles from "./styles.module.css";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  
  return (
    <div className={styles.formContainer}>
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        className={styles.taskInput}
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Projeto 5" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <input
        type="number"
        id="minutesAmount"
        placeholder="00"
        className={styles.minutesAmountInput}
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  );
}
