import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/profile" />
      <Route path="/posted" />
      <Route path="/edit" />
      <Route path="/chat" />
    </Routes>
  );
}

export default App;
