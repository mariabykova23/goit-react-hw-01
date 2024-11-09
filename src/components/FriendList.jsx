import styles from './FriendList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
    return (<ul className={styles.listOfFriends}>
        {friends.map((friend) => (
            <li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            </li>
        ))}
    </ul>
    );
};

export default FriendList;


// const FriendList = ({ friends }) => {
//     return (
//         <ul className={styles.listOfFriends}>
//             {friends.map((friend) => {
//                 return <div className={styles.mainList} key={friend.id}>
//                     <img className={styles.avatarIcon} src={friend.avatar} alt={friend.name} width="48" />
//                     <p className={styles.userName}> {friend.name}</p>
//                     {friend.isOnline ? (<p className={styles.statusOn}>Online</p>) : (<p className={styles.statusOff}>Offline</p>)}
//                 </div>
//                     ;
//             })}
//         </ul >
//     );
// };

// export default FriendList