import Link from "next/link";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ text, fontSize, dark }) {
  return (
    <button
      className={`${styles.container}`}
      style={{
        fontSize: fontSize,
        color: dark && "var(--white)",
        backgroundColor: dark && "var(--black)",
      }}
    >
      {text}
    </button>
  );
}
