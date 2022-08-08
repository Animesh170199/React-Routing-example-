import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
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
function App() {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
}

export default App;
