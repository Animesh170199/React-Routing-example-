import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Accordion</Link>
          </li>
          <li>
            <Link to="/list">Search</Link>
          </li>
          <li>
            <Link to="/dropdown">Dropdown</Link>
          </li>
          <li>
            <Link to="/translate">Translate</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Accordion items={items} />}></Route>
          <Route exact path="/list" element={<Search />}></Route>
          <Route
            exact
            path="/dropdown"
            element={
              <Dropdown
                onSelectedChange={setSelected}
                selected={selected}
                options={options}
              />
            }
          ></Route>
          <Route exact path="/translate" element={<Translate />}></Route>
        </Routes>
        {/* <Header /> */}
      </div>
    </Router>
  );
}

export default App;
