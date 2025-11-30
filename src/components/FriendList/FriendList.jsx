import styles from "./FriendList.module.css";
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

const FriendList = ({ friends }) => {
  return (
    <div className={styles["friend-container"]}>
      <ul className={styles["friend-list"]}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={styles["friend-list-item"]}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
