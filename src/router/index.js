import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/employees",
    name: "Employees",
    component: () =>
      import(/* webpackChunkName: "employees" */ "../views/Employees.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import(/* webpackChunkName: "jobs" */ "../views/Jobs.vue"),
  },
  {
    path: "/remote-schema",
    name: "Remote Schema",
    component: () =>
      import(
        /* webpackChunkName: "remote-schema" */ "../views/RemoteSchema.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
