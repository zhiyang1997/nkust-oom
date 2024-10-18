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
        path: "introduction/overview",
        component: () => import("src/pages/OverviewPage.vue"),
      },
      {
        path: "introduction/structure",
        component: () => import("src/pages/StructurePage.vue"),
      },
      {
        path: "news",
        component: () => import("src/pages/NewsPage.vue"),
      },
      {
        path: "links",
        component: () => import("src/pages/LinksPage.vue"),
      },
      {
        path: "contact",
        component: () => import("src/pages/ContactPage.vue"),
      },
      {
        path: "introduction",
        component: () => import("src/pages/IntroductionPage.vue"),
      },
      {
        path: "regulations",
        component: () => import("src/pages/RegulationsPage.vue"),
      },
      {
        path: "regulations/mof",
        component: () => import("src/pages/MofPage.vue"),
      },
      {
        path: "regulations/agency",
        component: () => import("src/pages/AgencyPage.vue"),
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
