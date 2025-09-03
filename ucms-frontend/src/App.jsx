import React from "react";
import { AppProvider } from "./contexts/AppContext";
import Layout from "./components/common/Layout/Layout";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Layout />
      </div>
    </AppProvider>
  );
}

export default App;
