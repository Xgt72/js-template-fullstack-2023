import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Contact from "./components/Contact";
import AddContentForm from "./components/AddContentForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/administrateur" element={<AddContentForm />} />
      <Route path="/connexion" element={<LoginForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
