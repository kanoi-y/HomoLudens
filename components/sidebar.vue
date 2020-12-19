<template>
  <aside class="sidebar">
      <div class="side_category">
        <h2>カテゴリー</h2>
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
 contents : {
     type: Array
 }
},
}
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
    h2 {
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
}
</style>