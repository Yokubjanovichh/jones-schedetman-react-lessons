import React from "react";

export default function Friend({ name, avatar, balance }) {
  return (
    <>
      <img src={avatar} alt={name} />
      <div>
        <p>{name}</p>
        {balance > 0 && (
          <p style={{ color: "green" }}>
            {name} owes you {Math.abs(balance)}€
          </p>
        )}
        {balance < 0 && (
          <p style={{ color: "red" }}>
            You owe {name} {Math.abs(balance)}€
          </p>
        )}
        {balance === 0 && <p style={{ color: "#ccc" }}>You and {name} are even</p>}
      </div>
    </>
  );
}
