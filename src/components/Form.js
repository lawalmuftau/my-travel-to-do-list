import { useState } from "react";
export default function Form({ onAdditem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAdditem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 💼 ?</h3>
      <select
        onChange={(event) => setQuantity(Number(event.target.value))}
        value={quantity}
      >
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type="text"
        placeholder="item..."
      />
      <button type="submit">add</button>
    </form>
  );
}
