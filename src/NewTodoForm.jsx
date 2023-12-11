import React, { useState } from "react";
export function NewTodoForm({ onSubmit }) {
  const [newitem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newitem === "") return;
      onSubmit(newitem)
    setNewItem("");
  }


  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newitem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}