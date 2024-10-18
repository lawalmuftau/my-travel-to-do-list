export default function Stats({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <>
      {numItem === 0 ? (
        <p className="stats">
          <em>Start packing your things in the packinglist! </em>
        </p>
      ) : (
        <footer className="stats">
          <em>
            {percentage === 100
              ? "You have packed all your luggage! ready to go ✈️"
              : `You have ${numItem} items on your List, and you already parked ${" "}
          ${numPacked} item(s) (${percentage}%)`}
          </em>
        </footer>
      )}
    </>
  );
}
