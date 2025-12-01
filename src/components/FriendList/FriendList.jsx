import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

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
