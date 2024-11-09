import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.mainList}>
            <img src={avatar} alt={name} width="48" className={styles.avatarIcon} />
            <p className={styles.userName}>{name}</p>
            {isOnline ? (<p className={styles.statusOn}>Online</p>) : (<p className={styles.statusOff}>Offline</p>)}
        </div>
    )
}

export default FriendListItem