<template>
  <div>
    <header>
      <nuxt-link to="/" class="title">
        <img src="~/assets/images/HomoLudens_logo.svg" />
      </nuxt-link>
      <svg
        @click="toggleMenu"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="svg-inline--fa fa-bars fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>

      <div class="global_nav" ref="global_nav">
        <svg
        @click="toggleMenu"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
        <nav>
          <ul>
            <li><nuxt-link to="/">作品紹介</nuxt-link></li>
            <li><nuxt-link to="/">ブログ</nuxt-link></li>
            <li><nuxt-link to="/">お問い合わせ</nuxt-link></li>
            <li><nuxt-link to="/">お申し込み</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <Nuxt />

    <footer></footer>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$refs.global_nav.classList.toggle('opened');
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  .title {
    display: block;
    img {
      width: 50vw;
      max-width: 200px;
    }
  }
  .svg-inline--fa {
    width: 7vw;
    color: #4e4e4e;
  }
  .global_nav {
    position: absolute;
    top: 0;
    left: -60vw;
    height: 100vh;
    width: 50vw;
    transition: all 0.3s;
    background: #fff;
    &.opened {
      left: 0;
    }
  }
}
</style>
