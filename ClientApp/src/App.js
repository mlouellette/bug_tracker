import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Ticket from "./components/ticket/Ticket.jsx";
import UserTicket from "./components/userTicket/UserTicket.jsx";
import Administration from "./components/administration/Administration.jsx";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tickets" element={<Ticket />} />
      <Route path="/userticket" element={<UserTicket />} />
      <Route path="/admin" element={<Administration />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
