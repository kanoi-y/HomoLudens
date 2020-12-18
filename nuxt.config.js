import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "HomoLudens",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  styleResources: {
    scss: ["~/assets/sass/variables.scss", "~/assets/sass/media.scss"]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/blog/page/:p",
        component: resolve(__dirname, "pages/blog/index.vue"),
        name: "page"
      });
      routes.push({
        path: "/blog/category/:categoryId/page/:p",
        component: resolve(__dirname, "pages/blog/index.vue"),
        name: "category"
      });
    }
  },

  generate: {
    async routes() {
      const limit = 10;
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      // 一覧のページング
      const pages = await axios
        .get(`https://homoludens.microcms.io/api/v1/blog?limit=0`, {
          headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
        })
        .then(res =>
          range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
            route: `/blog/page/${p}`
          }))
        );

      const categories = await axios
        .get(`https://homoludens.microcms.io/api/v1/categories?fields=id`, {
          headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
        })
        .then(({ data }) => {
          return data.contents.map(content => content.id);
        });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        categories.map(category =>
          axios
            .get(
              `https://homoludens.microcms.io/api/v1/blog?limit=0&filters=category[equals]${category}`,
              {
                headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
              }
            )
            .then(res =>
              range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
                route: `/blog/category/${category}/page/${p}`
              }))
            )
        )
      );

      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages);
      return [...pages, ...flattenCategoryPages];
    }
  }
};
