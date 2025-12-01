import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles["friend-small-container"]}>
      <img
        className={styles["friend-img"]}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles["friend-name"]}>{name}</p>
      <p
        className={clsx(styles["friend-status"], {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;