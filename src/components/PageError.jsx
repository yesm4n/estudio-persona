import styles from "./PageError.module.css";

function PageError() {
  return (
    <div className={styles.div}>
      This URL does not exist
      <span className={styles.span}></span>
    </div>
  );
}

export default PageError;
