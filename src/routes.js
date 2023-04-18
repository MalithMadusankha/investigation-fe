import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/user/Login";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Patients from "views/patient/Patients";
import Emails from "views/email/Emails";
import Home from "views/home/Home";
import Doctor from "views/doctor/Doctor";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // },
  {
    path: "/patients",
    name: "Patients",
    icon: "ni ni-circle-08 text-blue",
    component: Patients,
    layout: "/admin",
  },
  {
    path: "/emails",
    name: "Emails",
    icon: "ni ni-email-83 text-blue",
    component: Emails,
    layout: "/admin",
  },
  {
    path: "/doctors",
    name: "Doctors",
    icon: "ni ni-badge text-blue",
    component: Doctor,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-circle-08 text-pink",
    component: Home,
    layout: "/auth",
  },
];
export default routes;
