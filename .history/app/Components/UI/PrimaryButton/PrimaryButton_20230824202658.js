import Link from "next/link";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ text, fontSize, dark }) {
  return (
    <button
      className={`${styles.container} ${dark && styles.dark}`}
      style={{
        fontSize: fontSize,
        color: dark && "var(--white)",
      }}
    >
      {text}
    </button>
  );
}
