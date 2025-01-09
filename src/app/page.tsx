 import styles from "./page.module.css";
import AddUser from "./AddUser/page";

export default function Home() {
  return (
    <div className={styles.page}>
       <AddUser/>
    </div>
  );
}
