import { Circle } from "phosphor-react";
import styles from "./styles.module.css";

interface StatusProps {
  status: "done" | "inProgress" | "interrupted";
}

const statusConfig = {
  done: {
    text: "Concluído",
    className: styles.done,
    color: "green",
  },
  inProgress: {
    text: "Em andamento",
    className: styles.inProgress,
    color: "yellow",
  },
  interrupted: {
    text: "Interrompido",
    className: styles.interrupted,
    color: "red",
  },
} as const;

export function Status({ status }: StatusProps) {
  const { text, className, color } = statusConfig[status];

  return (
    <span className={styles.status}>
      <Circle size={8} weight="fill" className={className} color={color} />
      {text}
    </span>
  );
}
