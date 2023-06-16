import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormEl from "./pages/LogIn/LogIn";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FormEl />}/>
        <Route path='/:id' element={""}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
