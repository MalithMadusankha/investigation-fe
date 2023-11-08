import Index from "views/Index.js";
import Profile from "views/investigator/Profile";
import Register from "views/user/Register";
import Login from "views/user/Login";
import Investigator from "views/investigator/Investigator";
import Complain from "views/complain/Complain";
import Analysis from "views/analysis/Analysis";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/inv",
  },
  {
    path: "/analysis",
    name: "Analysis",
    icon: "ni ni-sound-wave text-green",
    component: Analysis,
    layout: "/inv",
  },
  {
    path: "/investigator",
    name: "Investigator",
    icon: "ni ni-circle-08 text-green",
    component: Investigator,
    layout: "/admin",
  },
  {
    path: "/complain",
    name: "Complain",
    icon: "ni ni-book-bookmark text-green",
    component: Complain,
    layout: "/inv",
  },

  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-green",
    component: Profile,
    layout: "/inv",
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
