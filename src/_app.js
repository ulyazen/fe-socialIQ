import { Routes, Route } from "react-router-dom";
import DashboardLayout from "layouts/dashboard.layout";
import DashboardLayoutFull from "layouts/dashboard.layout-full";
import LandingLayout from "layouts/landing.layout";

import AccountManager from "pages/dashboard/account-manager";
import Dashboard from "pages/dashboard/dashboard";
import CreatePost from "pages/dashboard/posts/create-post";
import FileManager from "./pages/dashboard/file-manager";
import MyContent from "pages/dashboard/my-content";
import TeamMember from "pages/dashboard/team-member";
import PackageManager from "pages/dashboard/package-manager";
import Calendar from "pages/dashboard/calendar";
import UserManager from "pages/dashboard/user-manager";
import AddUser from "pages/dashboard/user-manager/add";
import PaymentManager from "pages/dashboard/payment-manager";
import MarketPlace from "pages/dashboard/marketplace";
import Settings from "pages/dashboard/settings";
import EditUser from "pages/dashboard/user-manager/edit";
import Profile from "pages/dashboard/profile";

import Landing from "pages/landing";
import Privacy from "pages/privacy";
import NotFound from "pages/404";

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="account-manager" element={<AccountManager />} />
        <Route path="my-content" element={<MyContent />} />
        <Route path="file-manager" element={<FileManager />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="user-manager" element={<UserManager />} />
        <Route path="user-manager/add" element={<AddUser />} />
        <Route path="user-manager/edit/:userId" element={<EditUser />} />
        <Route path="payment-manager" element={<PaymentManager />} />
        <Route path="marketplace" element={<MarketPlace />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayoutFull />}>
        <Route path="posts/create-post" element={<CreatePost />} />
        <Route path="team-member" element={<TeamMember />} />
        <Route path="package-manager" element={<PackageManager />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
