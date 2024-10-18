import { useState } from "react";
import "./App.css";
import Stats from "./components/Stats";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ParkingList from "./components/ParkingList";

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 5, packed: true },
]; */

function App() {
  const [items, setItem] = useState([]);
  function handleDeleteParkingList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all your packing list"
    );
    if (confirmed) setItem([]);
  }
  function handleAdditem(item) {
    setItem((items) => [...items, item]);
  }

  function onDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={handleAdditem} />
      <ParkingList
        items={items}
        onDelete={onDeleteItem}
        onToggle={handleToggle}
        deleteParkingList={handleDeleteParkingList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
