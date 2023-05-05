import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-day-picker/dist/style.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Share/Footer";
import Navbar from "./Components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Share/NotFound";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Profile from "./Components/Pages/Dashboard/Profile/Profile";
import AppointmentBanner from "./Components/Pages/Dashboard/Appointment/AppointmentBanner/AppointmentBanner";
import Appointment from "./Components/Pages/Dashboard/Appointment/Appointment/Appointment";
import Bookings from "./Components/Pages/Dashboard/Boooking/Bookings";

function App() {
  return (
    <div>
      {/* <Appointment /> */}
      <Routes>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard Start */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="manageCounseling" element={<ManageCounselings />} />
          <Route path="myApplied" element={<MyApplieds />} /> */}
        </Route>
        {/* Dashboard End */}
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
