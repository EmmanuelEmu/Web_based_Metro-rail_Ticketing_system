import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/login/login";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Registration from "./Components/registration/registration";

function App() {
  // const handhleRegistration = () => {
  //   setRegistration(!registration);
  // };

  // const handleButtonClick = (componentSetter)=>{
  //     componentSetter((previsibility)=>
  //         !previsibility
  //     )
  // }

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Registration/> */}
      {/* <button onClick={()=>{handleButtonClick(setLogin)}}>Login</button> */}
      {/* <button onClick={handhleLogin}>Login</button>
      {login && <Login />} */}
      {/* <button onClick={()=>{handleButtonClick(setRegistration)}}>Registration</button>
      {registration && <Registration />} */}
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>}/>415
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
