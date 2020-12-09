<template>
    <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/blog/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://homoludens.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': '85b1c5b7-87a5-40c6-b296-a2117a30a78a' }
      }
    )
    return data
  }
}
</script>

<style>

</style>