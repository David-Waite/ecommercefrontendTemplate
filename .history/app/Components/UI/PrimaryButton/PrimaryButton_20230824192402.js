import Link from "next/link";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ text }) {
  return (
    <p className={styles.container}>
      <p>{text}</p>
    </p>
  );
}
