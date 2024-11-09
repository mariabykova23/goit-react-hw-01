import styles from './Profile.module.css'

const Profile = ({
    name,
    tag,
    location,
    image,
    stats,
}) => (
    <div className={styles.block}>
        <div>
            <img
                src={image}
                alt={name}
                className={styles.pic}
            />
            <p className={styles.nameUser}>{name}</p>
            <p className={styles.tagUser}>@{tag}</p>
            <p className={styles.locUser}>{location}</p>
        </div>
        <ul className={styles.table}>
            <li className={`${styles.tableColumn} ${styles.tableColumnBorder}`}>
                <span>Followers</span>
                <span className={styles.tabScore}>{stats.followers}</span>
            </li>
            <li className={`${styles.tableColumn} ${styles.tableColumnBorder}`}>
                <span>Views</span>
                <span className={styles.tabScore}>{stats.views}</span>
            </li>
            <li className={styles.tableColumn}>
                <span>Likes</span>
                <span className={styles.tabScore}>{stats.likes}</span>
            </li>
        </ul>
    </div>

);

export default Profile;
