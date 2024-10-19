const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      {
        path: "downloads",
        component: () => import("src/pages/download/DownloadsPage.vue"),
      },
      {
        path: "introduction/overview",
        component: () => import("src/pages/introduction/OverviewPage.vue"),
      },
      {
        path: "introduction/structure",
        component: () => import("src/pages/introduction/StructurePage.vue"),
      },
      {
        path: "news",
        component: () => import("src/pages/news/NewsPage.vue"),
      },
      {
        path: "news/:id", // 動態新聞詳情頁面
        name: "news-detail",
        component: () => import("src/components/NewsDetailCompontent.vue"),
      },
      {
        path: "links",
        component: () => import("src/pages/link/LinksPage.vue"),
      },
      {
        path: "contact",
        component: () => import("src/pages/contact/ContactPage.vue"),
      },
      {
        path: "introduction",
        component: () => import("src/pages/introduction/IntroductionPage.vue"),
      },
      {
        path: "regulations",
        component: () => import("src/pages/regulations/RegulationsPage.vue"),
      },
      {
        path: "regulations/mof",
        component: () => import("src/pages/regulations/MofPage.vue"),
      },
      {
        path: "regulations/agency",
        component: () => import("src/pages/regulations/AgencyPage.vue"),
      },
      {
        path: "services",
        component: () => import("src/pages/services/ServicesPage.vue"),
      },
      {
        path: "services/headquarters",
        component: () => import("src/pages/services/HeadquartersPage.vue"),
      },
      {
        path: "services/plan",
        component: () => import("src/pages/services/PlanPage.vue"),
      },
      {
        path: "services/develop",
        component: () => import("src/pages/services/DevelopPage.vue"),
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
