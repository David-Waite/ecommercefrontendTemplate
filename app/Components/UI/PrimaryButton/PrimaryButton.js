import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ text, fontSize, dark }) {
  return (
    <button
      className={`${styles.container} ${dark && styles.dark}`}
      style={{
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
}
