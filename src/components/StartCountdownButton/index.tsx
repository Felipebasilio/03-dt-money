import { Play } from "phosphor-react";
import styles from "./styles.module.css";

interface StartCountdownButtonProps {
  disabled?: boolean;
}

export function StartCountdownButton({ disabled }: StartCountdownButtonProps) {
  return (
    <button type="submit" className={styles.startCountdownButton} disabled={disabled}>
      <Play size={24} />
      Começar
    </button>
  );
} 