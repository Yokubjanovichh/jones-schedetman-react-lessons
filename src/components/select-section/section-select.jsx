import style from "./style.module.scss";

export default function SelectSection({ showSelectSection, bill, setBill, payidByUser, setPayidByUser, whoIsPaying, setWhoIsPaying, onSplitBill, setShowSelectSection }) {
  const payidByFriend = bill - payidByUser;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !payidByUser) return;
    onSplitBill(whoIsPaying === "user" ? payidByFriend : -payidByUser);
    setShowSelectSection(null);
  };
  return (
    <form className={style.selctSection} onSubmit={handleSubmit}>
      <h2>Split a bill with {showSelectSection.name}</h2>
      <div className={style.item}>
        <label htmlFor="value">💰 Bill value:</label>
        <input type="text" id="value" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      </div>
      <div className={style.item}>
        <label htmlFor="expense">🧍🏻‍♂️ Your expense:</label>
        <input type="text" id="expense" value={payidByUser} onChange={(e) => setPayidByUser(Number(e.target.value) > bill ? payidByUser : Number(e.target.value))} />
      </div>
      <div className={style.item}>
        <label htmlFor="expense2">👬 {showSelectSection.name}'s expense:</label>
        <input type="text" id="expense2" disabled value={payidByFriend} />
      </div>
      <div className={style.item}>
        <label htmlFor="pay">🤑 Who is paying the bill?</label>
        <select id="pay" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{showSelectSection.name}</option>
        </select>
      </div>
      <button>Split bill</button>
    </form>
  );
}
