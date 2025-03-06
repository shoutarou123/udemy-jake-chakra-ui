import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "login",
    children: <Login />
  },
  {
    path: "user_management",
    children: <Setting />
  },
  {
    path: "setting",
    children: <UserManagement />
  },
  {
    path: "*",
    children: <Page404 />
  },
];