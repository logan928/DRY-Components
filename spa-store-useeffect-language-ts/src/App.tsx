import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import ProvideLanguage from "./contexts";
import { Languages } from "./types";
//import { Children } from "react";

function App() {
  const defaultLanguage: Languages = "de"; //Todo: replace this with local storage or cookie or IP address.

  return (
    <>
      <h1>Language Converter</h1>
      <ProvideLanguage defaultLanguage={defaultLanguage}>
        <Header />
        <Content />
      </ProvideLanguage>
    </>
  );
}

export default App;
