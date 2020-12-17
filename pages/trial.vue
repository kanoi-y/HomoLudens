<template>
  <div class="wrapper">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfLzPCI9puM0ODP1cESn2VWBon8hMdJ_VwWtpDYjRQlWePPPw/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >読み込んでいます…</iframe
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 25px;
  padding: 0 15px;
  display: block;
  @include tablet-size {
    padding: 0 45px;
  }
  iframe {
    width: 100%;
    height: calc(2700px - 20.5vw);
    @include tablet-size {
      height: calc(2200px - 14vw);
    }
  }
}
</style>
