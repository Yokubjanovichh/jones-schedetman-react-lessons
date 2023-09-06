import React, { useState } from "react";
import SelectSection from "./components/select-section/section-select";
import FriendList from "./components/friend-list/list-friends";
import AddFriend from "./components/add-friend/friend-add";
import "./main.css";

const dataArray = [
  {
    id: 1,
    name: "John",
    avatar: `https://i.pravatar.cc/58?=ewrwe`,
    balance: -10,
  },
  {
    id: 2,
    name: "Jane",
    avatar: `https://i.pravatar.cc/48?=ewds`,
    balance: 50,
  },
  {
    id: 4,
    name: "Bek",
    avatar: `https://i.pravatar.cc/48?=vfvf`,
    balance: 0,
  },
];

export default function App() {
  const [add, setAdd] = useState(false);
  const [friends, setFriends] = useState([...dataArray]);
  const [showSelectSection, setShowSelectSection] = useState(null); // null bilan boshlang
  const [bill, setBill] = useState("");
  const [payidByUser, setPayidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setAdd(false);
  };
  const handleShow = (item) => {
    setShowSelectSection((cur) => {
      if (cur?.id === item.id) {
        return null;
      } else {
        setBill("");
        setPayidByUser("");
        setWhoIsPaying("user");
        return item;
      }
    });
    setAdd(false);
  };
  const handleAdd = () => {
    setAdd(!add);
    setShowSelectSection(null);
  };
  const handleSplitBill = (value) => {
    setFriends((friends) => friends.map((friend) => (friend.id === showSelectSection.id ? { ...friend, balance: friend.balance + value } : friend)));
  };
  return (
    <div className="containerFluid">
      <div className="container">
        <FriendList handleShow={handleShow} friends={friends} showSelectSection={showSelectSection} />
        {add && <AddFriend handleAddFriend={handleAddFriend} />}
        <button onClick={handleAdd} className="addFriendBtn">
          {add ? "Close" : "Add friend"}
        </button>
      </div>
      {showSelectSection && <SelectSection bill={bill} setBill={setBill} payidByUser={payidByUser} setPayidByUser={setPayidByUser} whoIsPaying={whoIsPaying} setWhoIsPaying={setWhoIsPaying} showSelectSection={showSelectSection} onSplitBill={handleSplitBill} setShowSelectSection={setShowSelectSection} />}
    </div>
  );
}
