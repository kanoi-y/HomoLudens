<template>
  <div class="wrapper">
    <div class="main">
      <ul class="breadcrumb-trail">
        <li><nuxt-link to="/blog">ブログ一覧</nuxt-link></li>
        <li><nuxt-link to="/blog"></nuxt-link></li>
      </ul>
      <div class="wrapper_card">
        <div class="card" v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/blog/${content.id}`" class="card_link">
            <figure class="card_wrapper-img">
              <img :src="`${content.thumbnail.url}`" />
            </figure>
            <div class="card_body">
              <h3>{{ content.title }}</h3>
              <div class="card_info">
                <span class="card_category">カテゴリー</span>
                <span class="card_date">{{ postedDate(content) }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <aside class="sidebar">
      <div class="side_category">
        <h2>カテゴリー</h2>
        <ul>
          <li>Scratch</li>
          <li>ITスキル</li>
          <li>web開発</li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      "https://homoludens.microcms.io/api/v1/blog",
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": "85b1c5b7-87a5-40c6-b296-a2117a30a78a" }
      }
    );
    return data;
  },
  methods: {
    postedDate(content) {
      const time = new Date(content.createdAt);
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
  padding: 0 20px;
}

.breadcrumb-trail {
  list-style: none;
  padding: 0;
  padding-top: 20px;
  margin-bottom: 15px;
  display: flex;
  li {
    font-size: 0.9rem;
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

img {
  width: 100%;
}

.wrapper_card {
  .card {
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    margin-bottom: 30px;
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
        }
        .card_info {
          .card_category {
            display: inline-block;
            padding: 0.2em 0.3em;
            background-color: $image-color;
            color: #fff;
            font-size: 0.9rem;
            font-weight: bold;
          }
          .card_date {
            font-size: 0.9rem;
            color: $text-color;
            padding-left: 15px;
          }
        }
      }
    }
  }
}
</style>
