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
import FleetComponent from "./pages/website/FleetComponent.vue";
import AboutComponent from "./pages/website/AboutComponent.vue";
import ContactComponent from "./pages/website/ContactComponent.vue";
import PrivacyPolicyComponent from "./pages/website/PrivacyPolicyComponent.vue";
import ServicesComponentNavbar from "./pages/website/ServicesComponentNavbar.vue";
import TermsConditionComponent from "./pages/website/TermsConditionComponent.vue";

const routes = [
  {
    path: "/auth",
    component: GuestLayout,
    children: [
      { path: "login", name: "login", component: LoginComponent },
      { path: "signup", name: "signup", component: SignupComponent },
      { path: "verify-otp", name: "verify-otp", component: VerifyOtpComponent },
      {
        path: "forget-password",
        name: "forget-password",
        component: ForgetPassword,
      },
      {
        path: "update-password",
        name: "update-password",
        component: UpdatePassword,
      },
    ],
  },
  {
    path: "/",
    component: WebLayout,
    children: [
      { path: "", name: "home", component: HomeComponent },
      { path: "/fleet", name: "fleet", component: FleetComponent },
      { path: "/about-us", name: "about-us", component: AboutComponent },
      { path: "/contact-us", name: "contact-us", component: ContactComponent },
      {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: PrivacyPolicyComponent,
      },
      {
        path: "/services",
        name: "services",
        component: ServicesComponentNavbar,
      },
      {
        path: "/terms-condition",
        name: "/terms-condition",
        component: TermsConditionComponent,
      },
    ],
  },

  {
    path: "/",
    component: AuthLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: "/dashboard" },
      { path: "dashboard", name: "dashboard", component: DashboardComponent },
      { path: "rides", name: "rides", component: RidesComponent },
      {
        path: "rides/create",
        name: "rides-create",
        component: RideFormComponent,
      },
      {
        path: "rides/edit/:id",
        name: "rides-edit",
        component: RideFormComponent,
      },
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
      {
        path: "notifications",
        name: "notifications",
        component: NotificationComponent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ------------------------------
// 🔐 GLOBAL AUTH GUARD (applies only to routes under AuthLayout)
// ------------------------------
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const authRequired = to.matched.some(
    (record) => record.meta && record.meta.requiresAuth
  );

  if (authRequired && !token) {
    return next("/auth/login");
  }

  if (token && (to.path === "/auth/login" || to.path === "/auth/signup")) {
    return next("/dashboard");
  }

  next();
});

export default router;
