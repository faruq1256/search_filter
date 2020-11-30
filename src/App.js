import React, { useState } from "react";
import Results from "./Results";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const InputEvent = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
        <h1> Search Images Filter...</h1>

        <br />
        <input type="text" onChange={InputEvent} name="search" value={search} />
        <br />
        <br />
        <br />

        {search === "" ? null : <Results keyword={search} />}
      </div>
    </>
  );
};

export default App;
