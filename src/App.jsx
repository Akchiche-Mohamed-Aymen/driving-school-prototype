import Intro from "./components/Intro";
import LoginPage from "./components/Login";
import Register from "./components/Register";
import StudentPage from "./components/StudentPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import TrainerPage from "./components/TrainerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trainer" element={<TrainerPage />} />
      <Route path="/student">
        <Route index element={<StudentPage />} />
        <Route path=":idPhone" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
