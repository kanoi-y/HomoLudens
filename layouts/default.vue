<template>
  <div>
    <div class="back none" ref="back" @click="toggleMenu"></div>
    <header>
      <nuxt-link to="/" class="title">
        <img src="~/assets/images/HomoLudens_logo.svg" />
      </nuxt-link>
      <!-- メニューバーのsvg -->

      <svg
        @click="toggleMenu"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Menu</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M80 160h352M80 256h352M80 352h352"
        />
      </svg>

      <div class="global_nav" ref="global_nav">
        <!-- 閉じるbuttonのsvg -->

        <svg
          @click="toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Close</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
        <nav>
          <ul>
            <li><nuxt-link to="/" class="nav_list">ブログ</nuxt-link></li>
            <li><nuxt-link to="/" class="nav_list">お問い合わせ</nuxt-link></li>
            <li><nuxt-link to="/" class="nav_list">お申し込み</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <Nuxt />

    <footer>
      <p>ホモ・ルーデンス</p>
      <img src="~/assets/images/HomoLudens_logo.svg" />
      <p class="sub_title">
        小・中学生のためのオンラインプログラミングスクール
      </p>
      <small>🄫 2020 HomoLudens</small>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "body_class"
    }
  },
  methods: {
    // メニューを開けたり閉めたりする関数
    toggleMenu() {
      this.$refs.global_nav.classList.toggle("opened");
      this.$refs.back.classList.toggle("none");
    }
  }
};
</script>

<style lang="scss">
html {
  // font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  //   Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
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
</style>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  .title {
    display: block;
    height: 10vw;
    max-height: 56px;
    img {
      height: 100%;
    }
  }
  .ionicon {
    width: 10vw;
    max-width: 40px;
    color: #4e4e4e;
  }
  .global_nav {
    position: absolute;
    top: 0;
    left: -70vw;
    height: 100vh;
    width: 65vw;
    transition: all 0.3s;
    background: #fff;
    z-index: 99;
    box-sizing: border-box;
    padding: 8px;
    &.opened {
      left: 0;
    }
    nav {
      ul {
        li {
          list-style: none;
          margin-bottom: 25px;
          .nav_list {
            text-decoration: none;
            color: #4e4e4e;
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}

.back {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 98;
}

.none {
  display: none;
}

footer {
  background-color: #e3e4e8;
  text-align: center;
  box-sizing: border-box;
  padding: 30px 0 8px 0;
  p {
    font-size: 0.8rem;
    margin-bottom: 12px;
    color: #fff;
    &.sub_title {
      width: 180px;
      margin: 0 auto;
      margin-bottom: 100px;
    }
  }
  img {
    width: 70vw;
  }
  small {
    color: #fff;
  }
}
</style>
