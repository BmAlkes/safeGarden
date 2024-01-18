import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DefaultLayout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Therms from "./pages/terms";
import MyKids from "./pages/mykids";
import MyKidsDetail from "./pages/mykids/mykidsdetail";
import Calendar from "./pages/calendar";
import KinderGarten from "./pages/kindergarten";
import KidsDetail from "./pages/kindergarten/kidsdetail";
import RegisterKid from "./pages/registerkid";
import Menu from "./pages/menu";
import DailyPhotos from "./pages/dailyPhotos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Terms" element={<Therms />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mykids" element={<MyKids />} />
            <Route path="/mykids/:id" element={<MyKidsDetail />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kindergarten" element={<KinderGarten />} />
            <Route path="/kidsdetail/:id" element={<KidsDetail />} />
            <Route path="/registerKid" element={<RegisterKid />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/dailyPhoto" element={<DailyPhotos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
