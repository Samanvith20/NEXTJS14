import Transactions from "../ui/transcation/transcation";
import styles from "../ui/dashboard/dashboard.module.css"

const DashboardPage = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.main}>
            
            <Transactions/>
        </div>
        </div>
    );
};

export default DashboardPage;
