import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "AuthLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "AuthLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/forgot-pass",
    name: "Forgot-pass",
    meta: {
      layout: "AuthLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forgot-pass.vue"),
  },
  {
    path: "/activity",
    name: "Activity",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Activity.vue"),
  },
  {
    path: "/withdrawal",
    name: "Withdrawal",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Withdrawal.vue"),
  },
  {
    path: "/auto-withdrawal",
    name: "AutoWithdrawal",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AutoWithdrawal.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
  {
    path: "/personal-account",
    name: "PersonalAccount",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalAccount.vue"),
  },
  {
    path: "/bank-account",
    name: "BanklAccount",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BankAccount.vue"),
  },
  {
    path: "/webhooks",
    name: "Webhooks",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Webhooks.vue"),
  },
  {
    path: "/user-management",
    name: "UserManagement",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserManagement.vue"),
  },
  {
    path: "/tax-invoice",
    name: "TaxInvoice",
    meta: {
      layout: "DashboardLayout", // we add new meta layout here to use it later
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TaxInvoice.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
