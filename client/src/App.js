import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./Components/Registration/registration";
import Login from "./Components/Login/login";
import HomePage from "./Components/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration />} />
          <Route path="/homepage" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
