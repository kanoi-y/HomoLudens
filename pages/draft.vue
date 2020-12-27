<template>
  <div class="wrapper">
    <main v-if="blog" class="main">
      <ul class="breadcrumb-trail">
        <li><nuxt-link to="/blog">ブログ一覧</nuxt-link></li>
        <li>
          <nuxt-link :to="`/blog/category/${blog.category.id}/page/1`">{{
            blog.category.name
          }}</nuxt-link>
        </li>
      </ul>
      <div class="article">
        <figure class="article_img">
          <img :src="`${blog.thumbnail.url}`" alt="" />
        </figure>
        <span v-if="blog.publishedAt" class="publishedAt">{{
          postedDate(blog)
        }}</span>
        <h1 class="title">{{ blog.title }}</h1>
        <span class="article_category">{{ blog.category.name }}</span>
        <div class="post" v-html="blog.body"></div>
      </div>
    </main>
    <sidebar v-if="categories" :contents="categories.contents"></sidebar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: '',
      categories: ''
    };
  },
  async created() {
    const query = this.$route.query;
    if (query.id === undefined || query.draftKey === undefined) {
      return;
    }
    const responseBlog = await axios.get(
      `https://homoludens.microcms.io/api/v1/blog/${query.id}?draftKey=${query.draftKey}`,
      {
        headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
      }
    );

    const responseCategory = await axios.get(
      "https://homoludens.microcms.io/api/v1/categories",
      {
        headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
      }
    );
    this.blog = responseBlog.data;
    this.categories = responseCategory.data;
  },
  methods: {
    postedDate(content) {
      const time = new Date(content.publishedAt);
      const year = time.getFullYear();
      const mon = time.getMonth() + 1;
      const date = time.getDate();
      const formalizedTime = `${year}/${mon}/${date}`;
      return formalizedTime;
    }
  }
};
</script>

<style lang="scss" scoped>
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
    padding-bottom: 45px;
  }
}

.breadcrumb-trail {
  list-style: none;
  padding: 0;
  padding-top: 20px;
  margin-bottom: 15px;
  display: flex;
  li {
    display: flex;
    align-items: center;
    text-align: center;
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

.article {
  &_img {
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
      box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    }
  }
  &_category {
    display: inline-block;
    padding: 0.2em 0.3em;
    background-color: $image-color;
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .publishedAt {
    font-size: 0.8rem;
    color: $text-color;
  }
  .title {
    font-size: 1.5rem;
    color: $text-color;
    font-weight: bold;
    margin-bottom: 10px;
    word-break: break-word;
  }
  .post {
    /deep/ h1 {
      font-size: 1.5rem;
      margin: 40px 0 20px;
      padding: 0.3em 0.4em;
      background-color: $back-color;
      border-left: 5px solid $image-color;
    }
    /deep/ h2 {
      font-size: 1.3rem;
      margin: 35px 0 15px;
      border-bottom: 2px solid $back-color;
    }
    /deep/ img {
      width: 100%;
    }
  }
}
</style>
