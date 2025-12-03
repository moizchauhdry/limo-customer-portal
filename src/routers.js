import { createRouter, createWebHistory } from "vue-router";

import GuestLayout from "./layouts/GuestLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

import DashboardComponent from "./pages/DashboardComponent.vue";
import RidesComponent from "./pages/RidesComponent.vue";
import HistoryComponent from "./pages/HistoryComponent.vue";
import WalletComponent from "./pages/WalletComponent.vue";
import ReportsComponent from "./pages/ReportsComponent.vue";
import ComplaintsComponent from "./pages/ComplaintsComponent.vue";
import SettingsComponent from "./pages/SettingsComponent.vue";
import LoginComponent from "./pages/LoginComponent.vue";
import SignupComponent from "./pages/SignupComponent.vue";
import BookingComponent from "./components/BookingComponent.vue";
import ViewBookingComponent from "./components/ViewBookingComponent.vue";
import VerifyOtpComponent from "./pages/VerifyOtpComponent.vue";

const routes = [
  {
    path: "/auth",
    component: GuestLayout,
    children: [
      { path: "login", name: "login", component: LoginComponent },
      { path: "signup", name: "signup", component: SignupComponent },
      { path: "verify-otp", name: "verify-otp", component: VerifyOtpComponent },
    ],
  },

  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "", redirect: "/dashboard" },
      { path: "dashboard", name: "dashboard", component: DashboardComponent },
      { path: "rides", name: "rides", component: RidesComponent },
      { path: "history", name: "history", component: HistoryComponent },
      { path: "wallet", name: "wallet", component: WalletComponent },
      { path: "reports", name: "reports", component: ReportsComponent },
      {
        path: "complaints",
        name: "complaints",
        component: ComplaintsComponent,
      },
      { path: "settings", name: "settings", component: SettingsComponent },
      { path: "booking", name: "booking", component: BookingComponent },
      {
        path: "view-booking",
        name: "view-booking",
        component: ViewBookingComponent,
      },
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

  const publicPages = ["/auth/login", "/auth/signup", "/auth/verify-otp"];
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
