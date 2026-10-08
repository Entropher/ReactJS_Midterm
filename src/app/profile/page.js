import styles from "../page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>ACCOUNT</p>
            <h1>პროფილი</h1>
          </div>
        </header>
        <p className={styles.message}>პროფილის გვერდი.</p>
      </div>
    </main>
  );
}
