<template>
  <aside class="sidebar">
    <div class="side_search" v-if="checkRoute">
      <input
        class="side_search_input"
        type="text"
        placeholder="キーワードを入力"
        @keyup.enter="search"
      />
      <img
        src="~/assets/images/search-outline.svg"
        alt="検索フォームの虫眼鏡"
        class="side_search_img"
      />
    </div>
    <div class="side_category">
      <h2 class="side_category_title">カテゴリー</h2>
      <ul class="side_category_list">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/blog/category/${content.id}/page/1`">{{
            content.name
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array
    }
  },
  computed: {
    checkRoute() {
      if (this.$route.path === "/blog/search") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    search(e) {
      if (e.target.value === "") return;
      this.$router.push(`/blog/search?q=${encodeURI(e.target.value)} `);
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin-bottom: 45px;
  @include desktop-size {
    flex: 1;
    max-width: 270px;
  }
  .side_category {
    padding-top: 50px;
    &_title {
      color: $text-color;
      font-size: 1.3rem;
      background-color: $back-color;
      padding: 0.3em 0.4em;
      margin-bottom: 10px;
      @include desktop-size {
        font-size: 1.1rem;
      }
    }
    .side_category_list {
      list-style: none;
      padding: 0;
      li {
        border-bottom: 1px solid $back-color;
        &:last-child {
          border-bottom-width: 0;
        }
        a {
          display: block;
          text-decoration: none;
          color: $text-color;
          font-size: 1.1rem;
          padding: 0.4em 0.4em;
          font-weight: bold;
          @include desktop-size {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  .side_search {
    position: relative;
    margin-top: 50px;
    &_input {
      width: 100%;
      border: 2px solid $back-color;
      color: $text-color;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5em;
      border-radius: 8px;
      outline: none;
    }
    &_img {
      display: block;
      position: absolute;
      right: 15px;
      width: 25px;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      z-index: 100;
    }
  }
}
</style>
