import { useState } from "react";
import style from "./style.module.scss";

export default function AddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !avatar) return;
    const id = crypto.randomUUID();
    const newData = {
      id,
      name,
      avatar: `${avatar}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newData);
    setName("");
    setAvatar("https://i.pravatar.cc/48");
  };
  return (
    <form className={style.addFriend} onSubmit={handleSubmit}>
      <div className={style.friedName}>
        <label htmlFor="name">👬 Friend name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={style.friedName}>
        <label htmlFor="url">🌄 Image URL</label>
        <input value={avatar} id="url" type="text" onChange={(e) => setAvatar(e.target.value)} />
      </div>
      <button>add</button>
    </form>
  );
}
