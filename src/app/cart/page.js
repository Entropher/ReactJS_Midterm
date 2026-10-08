import styles from "../page.module.css";

export default function CartPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>SHOPPING</p>
            <h1>კალათა</h1>
          </div>
        </header>
        <p className={styles.message}>კალათა ცარიელია.</p>
      </div>
    </main>
  );
}
