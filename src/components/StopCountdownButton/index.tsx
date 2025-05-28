import { HandPalm } from "phosphor-react";
import styles from "./styles.module.css";

interface StopCountdownButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export function StopCountdownButton({ disabled, onClick }: StopCountdownButtonProps) {
  return (
    <button
      type="submit"
      className={styles.stopCountdownButton}
      disabled={disabled}
      onClick={onClick}
    >
      <HandPalm size={24} />
      Interromper
    </button>
  );
}
