const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      {
        path: "downloads",
        component: () => import("src/pages/DownloadsPage.vue"),
      },
      {
        path: "overview",
        component: () => import("src/pages/OverviewPage.vue"),
      },
      {
        path: "structure",
        component: () => import("src/pages/StructurePage.vue"),
      },
      {
        path: "news",
        component: () => import("src/pages/NewsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
