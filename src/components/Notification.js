import styles from './Notification.module.css';
const Notification = ({ message }) => <p className={styles.Notification}>{message}</p>;
export default Notification;
