import Home from "../components/Sidebar/Home";
import Following from "../components/Sidebar/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Live from "../components/Sidebar/Live";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/Live", component: Live },
  { path: "/@:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: null },
];

export const privateRoutes = [];
