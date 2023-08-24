import Link from "next/link";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ text }) {
  return <button className={styles.container}>{text}</button>;
}
