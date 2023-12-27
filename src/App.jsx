import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "./components/getUser/User";
import Edit from "./components/updateUser/Edit";
import axios from "axios";
import OcrPage from "./components/addUser/OcrPage";

//default api url of the api
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

//routes defined to move on different pages of the site
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/add" element={<OcrPage />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
