import Search from "../Search";
import SortBy from "../SortBy";
import styles from "./Header.module.css";
export default function Header() {
    return (
        <div className={styles.header}>
        <Search className={styles.header__searchForm} />
        <SortBy className={styles.header__sortBySelect} />
      </div>
    )
}