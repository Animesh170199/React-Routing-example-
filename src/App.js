import React from "react";
import { useState } from "react";
import Accordion from "./Components/Accordion";
import Dropdown from "./Components/Dropdown";
import Search from "./Components/Search";
import Translate from "./Components/Translate";
const items = [
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use React?",
    content: "React is a favorite  javascript framework among engineers",
  },
  {
    title: "How do you use React?",
    content: "React is used by creating components",
  },
];
const options = [
  {
    label: "The Color Orange",
    value: "Orange",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color White",
    value: "White",
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <Accordion items={items} />
      <Search />
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle DropDown
      </button>
      {showDropDown ? (
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      ) : null}
      <Translate />
    </div>
  );
}

export default App;
