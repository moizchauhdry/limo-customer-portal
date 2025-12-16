import { createRouter, createWebHistory } from "vue-router";

import GuestLayout from "./layouts/GuestLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import WebLayout from "./layouts/WebLayout.vue";

import DashboardComponent from "./pages/DashboardComponent.vue";
import RidesComponent from "./pages/RidesComponent.vue";
import HistoryComponent from "./pages/HistoryComponent.vue";
import WalletComponent from "./pages/WalletComponent.vue";
import ReportsComponent from "./pages/ReportsComponent.vue";
import ComplaintsComponent from "./pages/ComplaintsComponent.vue";
import SettingsComponent from "./pages/SettingsComponent.vue";
import LoginComponent from "./pages/LoginComponent.vue";
import SignupComponent from "./pages/SignupComponent.vue";
import RideFormComponent from "./pages/RideFormComponent.vue";
import ViewBookingComponent from "./components/ViewBookingComponent.vue";
import VerifyOtpComponent from "./pages/VerifyOtpComponent.vue";
import HomeComponent from "./pages/website/HomeComponent.vue";
import ForgetPassword from "./pages/ForgetPassword.vue";
import UpdatePassword from "./pages/UpdatePassword.vue";
import NotificationComponent from "./pages/NotificationComponent.vue";

const routes = [
  {
    path: "/auth",
    component: GuestLayout,
    children: [
      { path: "login", name: "login", component: LoginComponent },
      { path: "signup", name: "signup", component: SignupComponent },
      { path: "verify-otp", name: "verify-otp", component: VerifyOtpComponent },
      { path: "forget-password", name: "forget-password", component: ForgetPassword },
      { path: "update-password", name: "update-password", component: UpdatePassword },

    ],
  },
  {
    path: "/",
    component: WebLayout,
    children: [
      { path: "", name: "home", component: HomeComponent },
    ],
  },

  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "", redirect: "/dashboard" },
      { path: "dashboard", name: "dashboard", component: DashboardComponent },
      { path: "rides", name: "rides", component: RidesComponent },
      { path: "rides/create", name: "rides-create", component: RideFormComponent },
      { path: "rides/edit/:id", name: "rides-edit", component: RideFormComponent },
      { path: "history", name: "history", component: HistoryComponent },
      { path: "wallet", name: "wallet", component: WalletComponent },
      { path: "reports", name: "reports", component: ReportsComponent },
      {
        path: "complaints",
        name: "complaints",
        component: ComplaintsComponent,
      },
      { path: "settings", name: "settings", component: SettingsComponent },
      {
        path: "view-booking/:id",
        name: "view-booking",
        component: ViewBookingComponent,
        props: true,
      },
      { path: "notifications", name: "notifications", component: NotificationComponent },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ------------------------------
// 🔐 GLOBAL AUTH GUARD
// ------------------------------
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const publicPages = ["/auth/login", "/auth/signup", "/auth/verify-otp", "/auth/forget-password", "/auth/update-password"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !token) {
    return next("/auth/login");
  }

  if (token && (to.path === "/auth/login" || to.path === "/auth/signup")) {
    return next("/dashboard");
  }

  next();
});

export default router;
