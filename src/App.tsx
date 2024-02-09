import { Route, Routes } from "react-router-dom";
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
import PrivateRoute from "./utils/PrivateRoute";
import RegisterKindegarden from "./pages/registerKindergaden";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Terms" element={<Therms />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/mykids"
            element={
              <PrivateRoute>
                <MyKids />
              </PrivateRoute>
            }
          />
          <Route
            path="/mykids/:id"
            element={
              <PrivateRoute>
                <MyKidsDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            }
          />
          <Route
            path="/kindergarten"
            element={
              <PrivateRoute>
                <KinderGarten />
              </PrivateRoute>
            }
          />
          <Route
            path="/kidsdetail/:id"
            element={
              <PrivateRoute>
                <KidsDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/registerKid"
            element={
              <PrivateRoute>
                <RegisterKid />
              </PrivateRoute>
            }
          />
          <Route
            path="/menu"
            element={
              <PrivateRoute>
                <Menu />
              </PrivateRoute>
            }
          />
          <Route
            path="/dailyPhoto"
            element={
              <PrivateRoute>
                <DailyPhotos />
              </PrivateRoute>
            }
          />
          <Route
            path="/registerKindgarden"
            element={
              <PrivateRoute>
                <RegisterKindegarden />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
