import styles from "./styles.module.css";
import { StartCountdownButton } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// A form can be controlled or uncontrolled.
// A controlled form is a form that is controlled by the state of the component.
// An uncontrolled form is a form that is controlled by the DOM.

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Informe a tarefa"),
  minutesAmount: z
    .number()
    .min(5, "O tempo mínimo deve ser de 5 minutos")
    .max(60, "O tempo máximo deve ser de 60 minutos"),
});

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<z.infer<typeof newCycleFormValidationSchema>>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: z.infer<typeof newCycleFormValidationSchema>) {
    console.log(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <div className={styles.homeContainer}>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <div className={styles.formContainer}>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className={styles.taskInput}
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>

        <div className={styles.countdownContainer}>
          <span>0</span>
          <span>0</span>
          <span className={styles.separator}>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <StartCountdownButton disabled={isSubmitDisabled} />
      </form>
    </div>
  );
}
