import styles from "./styles.module.css";
import * as z from "zod";
import { useContext } from "react";
import { NewCycleForm, Countdown } from "./components";
import { StopCountdownButton, StartCountdownButton } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CyclesContext } from "../../contexts/CyclesContext";

// A form can be controlled or uncontrolled.
// A controlled form is a form that is controlled by the state of the component.
// An uncontrolled form is a form that is controlled by the DOM.

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Informe a tarefa"),
  minutesAmount: z
    .number()
    .min(5, "O tempo mínimo deve ser de 5 minutos")
    .max(60, "O tempo máximo deve ser de 60 minutos"),
});

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<z.infer<typeof newCycleFormValidationSchema>>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <div className={styles.homeContainer}>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} />
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} />
        )}
      </form>
    </div>
  );
}
