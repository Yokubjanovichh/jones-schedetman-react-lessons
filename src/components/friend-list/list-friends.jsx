import Friend from "../friend/friend";
import style from "./style.module.scss";

export default function FriendList({ friends, handleShow, showSelectSection }) {
  return (
    <div className="friendsList">
      {friends.map((item) => (
        <div className={showSelectSection?.id === item.id ? `${style.wrapper} ${style.isSelected}` : style.wrapper} key={item.id}>
          <Friend key={item.id} name={item.name} avatar={item.avatar} balance={item.balance} />
          <button onClick={() => handleShow(item)}>{showSelectSection?.id === item.id ? "close" : "Select"}</button>
        </div>
      ))}
    </div>
  );
}
