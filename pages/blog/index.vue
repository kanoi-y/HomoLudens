<template>
  <div class="wrapper">
    <div class="main">
      <ul class="breadcrumb-trail">
        <li><nuxt-link to="/blog">ブログ一覧</nuxt-link></li>
        <li>
          {{ checkCategory($route.params.categoryId, categories) }}
        </li>
      </ul>
      <div class="no-article" v-if="articleCount === 0">
        記事がありません
      </div>
      <div class="wrapper_card">
        <div class="card" v-for="content in blogs.contents" :key="content.id">
          <nuxt-link :to="`/blog/${content.id}`" class="card_link">
            <figure class="card_wrapper-img">
              <img :src="`${content.thumbnail.url}`" />
            </figure>
            <div class="card_body">
              <h3>{{ content.title }}</h3>
              <div class="card_info">
                <span class="card_category">{{ content.category.name }}</span>
                <span class="card_date">{{ postedDate(content) }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="pager">
        <span class="pager_item prev" :class="{ hp_visi: prevFlag }"
          ><nuxt-link
            :to="
              `/blog${
                $route.params.categoryId === undefined
                  ? ''
                  : `/category/${$route.params.categoryId}`
              }/page/${
                isFinite($route.params.p) ? $route.params.p - 1 : ''
              }`
            "
            >PREV</nuxt-link
          ></span
        >
        <span class="pager_item next" :class="{ hp_visi: nextFlag }"
          ><nuxt-link
            :to="
              `/blog${
                $route.params.categoryId === undefined
                  ? ''
                  : `/category/${$route.params.categoryId}`
              }/page/${isFinite($route.params.p) ? +$route.params.p + 1 : '2'}`
            "
            >NEXT</nuxt-link
          ></span
        >
      </div> -->
    </div>
    <sidebar :contents="categories.contents"></sidebar>
  </div>
</template>

<script>
import axios from "axios";
import sidebar from "~/components/sidebar.vue";

export default {
  components: { sidebar },
  async asyncData({ params }) {
    const page = params.p || "1";
    const categoryId = params.categoryId;
    const limit = 10;
    const responseBlog = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://homoludens.microcms.io/api/v1/blog?limit=${limit}${
        categoryId === undefined ? "" : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
      }
    );
    const responseCategory = await axios.get(
      "https://homoludens.microcms.io/api/v1/categories",
      {
        headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
      }
    );

    const articleCount = responseBlog.data.totalCount;
    const pagerCount = Math.ceil(articleCount / limit);
    let prevFlag = false;
    let nextFlag = false;

    if (page === "1") {
      prevFlag = true;
    }
    if (+page === pagerCount || pagerCount === 0) {
      nextFlag = true;
    }

    return {
      blogs: responseBlog.data,
      categories: responseCategory.data,
      prevFlag,
      nextFlag,
      articleCount
    };
  },
  methods: {
    postedDate(content) {
      const time = new Date(content.publishedAt);
      const year = time.getFullYear();
      const mon = time.getMonth() + 1;
      const date = time.getDate();
      const formalizedTime = `${year}/${mon}/${date}`;
      return formalizedTime;
    },
    checkCategory(id = "", categories) {
      if (id === "") return;
      const result = categories.contents.filter(content => content.id === id);
      return result[0].name;
    }
  }
};
</script>

<style lang="scss" scoped>
.hp_visi {
  visibility: hidden !important;
}

.no-article {
  color: $image-color;
  text-align: center;
  font-size: 1.2rem;
  padding: 25px 0;
}

.wrapper {
  margin-top: 20px;
  padding: 0 15px;
  display: block;
  @include tablet-size {
    padding: 0 30px;
  }
  @include desktop-size {
    padding-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
  }
}

.main {
  @include desktop-size {
    flex: 1;
    margin-right: 5%;
  }
}

.breadcrumb-trail {
  list-style: none;
  padding: 0;
  padding-top: 20px;
  margin-bottom: 15px;
  display: flex;
  li {
    font-size: 0.8rem;
    color: $button-color;
    &::after {
      content: ">";
      margin: 0 10px;
    }
    &:last-child {
      &::after {
        content: "";
        margin: 0;
      }
    }
  }
  a {
    color: $button-color;
    text-decoration: none;
  }
}

.wrapper_card {
  display: block;
  @include tablet-size {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    margin-bottom: 35px;
    @include tablet-size {
      width: calc((100% - 30px) / 2);
      margin-right: 30px;
      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    @include desktop-size {
      width: calc((100% - 40px) / 2);
      margin-right: 40px;
    }
    .card_link {
      text-decoration: none;
      .card_wrapper-img {
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
        }
      }
      .card_body {
        padding: 15px;
        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
        h3 {
          margin-bottom: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          color: $text-color;
          overflow-wrap: break-word;
          @include tablet-size {
            margin-bottom: 10px;
          }
          @include desktop-size {
            font-size: 1rem;
          }
        }
        .card_info {
          display: inline-flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          .card_category {
            display: inline-block;
            padding: 0.2em 0.3em;
            background-color: $image-color;
            color: #fff;
            font-size: 0.9rem;
            font-weight: bold;
            @include desktop-size {
              font-size: 0.7rem;
            }
          }
          .card_date {
            font-size: 0.7rem;
            color: $text-color;
          }
        }
      }
    }
  }
}

.pager {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  @include desktop-size {
    margin-bottom: 45px;
  }
  &_item {
    background-color: $back-color;
    padding: 0.4em;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .prev {
    &::before {
      content: "<";
      color: #fff;
      font-weight: bold;
    }
    a {
      padding-left: 0.3em;
    }
  }
  .next {
    &::after {
      content: ">";
      color: #fff;
      font-weight: bold;
    }
    a {
      padding-right: 0.3em;
    }
  }
}

</style>
