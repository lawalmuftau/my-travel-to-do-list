import { useState } from "react";
import Item from "./Item";
export default function ParkingList({
  items,
  onDelete,
  onChange,
  onToggle,
  deleteParkingList,
}) {
  const [sortedItem, setSortedItem] = useState("input");

  let sortItem;

  if (sortedItem === "input") sortItem = items;
  if (sortedItem === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedItem === "quantity")
    sortItem = items.slice().sort((a, b) => a.quantity - b.quantity);
  if (sortedItem === "packed")
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onChange={onChange}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortedItem}
          onChange={(e) => setSortedItem(e.target.value)}
        >
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="quantity">sort by quantity</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={deleteParkingList}>Clear list</button>
      </div>
    </div>
  );
}
