import { Circle } from "phosphor-react";
import styles from "./styles.module.css";

interface StatusProps {
  status: "done" | "inProgress" | "notStarted";
}

const statusConfig = {
  done: {
    text: "Concluído",
    className: styles.done,
  },
  inProgress: {
    text: "Em andamento",
    className: styles.inProgress,
  },
  notStarted: {
    text: "Não iniciado",
    className: "",
  },
} as const;

export function Status({ status }: StatusProps) {
  const { text, className } = statusConfig[status];

  return (
    <span className={styles.status}>
      <Circle size={8} weight="fill" className={className} />
      {text}
    </span>
  );
}
