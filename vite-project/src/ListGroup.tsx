import { useState } from "react";

let items = ["New York", "Boston", "India", "Virginia", "Texas"];

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Item</h1>
      {items.length == 0 && <p> No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : " list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
