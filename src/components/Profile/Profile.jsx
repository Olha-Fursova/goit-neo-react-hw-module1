import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-upper"]}>
        <img className={styles["profile-img"]} src={image} alt="User avatar" />
        <p className={styles["profile-name"]}>{name}</p>
        <p className={styles["profile-tag"]}>@{tag}</p>
        <p className={styles["profile-location"]}>{location}</p>
      </div>

      <ul className={styles["profile-list"]}>
        <li className={styles["profile-list-item"]}>
          <span className={styles["profile-list-stat"]}>Followers</span>
          <span className={styles["profile-list-value"]}>
            {stats.followers}
          </span>
        </li>
        <li className={styles["profile-list-item"]}>
          <span className={styles["profile-list-stat"]}>Views</span>
          <span className={styles["profile-list-value"]}>{stats.views}</span>
        </li>
        <li className={styles["profile-list-item"]}>
          <span className={styles["profile-list-stat"]}>Likes</span>
          <span className={styles["profile-list-value"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
