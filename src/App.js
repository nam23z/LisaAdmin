import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar/>}/>
    </Routes>
  );
}

export default App;
