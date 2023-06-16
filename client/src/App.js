import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""}/>
        <Route path='/:id' element={""}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
