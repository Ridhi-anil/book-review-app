import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

import Preview from "./components/Preview";

function App() {
  const [addMore, setAddMore] = useState(false);

  function addHandle() {
    setAddMore(true);
  }
  function cancelHandler() {
    setAddMore(false);
  }

  return (
    <>
      <Header onAdd={addHandle} />
      <Preview addModal={addMore} onCancel={cancelHandler} />
    </>
  );
}

export default App;
