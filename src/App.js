import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Index from "./components/StackOverflow/Index";
import QuestionsList from "./components/StackOverflow/QuestionsList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />{" "}
      <Index searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default App;
