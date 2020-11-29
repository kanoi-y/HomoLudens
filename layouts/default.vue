<template>
  <div>
    <header>
      <div class="back none" ref="back" @click="toggleMenu">
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
      </div>
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
        <div class="nav_title">
          <img src="~/assets/images/HomoLudens_logo.svg" />
        </div>
        <nav>
          <ul>
            <li><nuxt-link to="/" class="nav_list">ブログ</nuxt-link></li>
            <li><nuxt-link to="/" class="nav_list">お問い合わせ</nuxt-link></li>
            <li>
              <nuxt-link to="/" class="nav_list">無料トライアル</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Nuxt />

    <footer>
      <ul class="footer_nav">
        <li><nuxt-link to="/" class="nav_list">ブログ</nuxt-link></li>
        <li><nuxt-link to="/" class="nav_list">お問い合わせ</nuxt-link></li>
        <li><nuxt-link to="/" class="nav_list">無料トライアル</nuxt-link></li>
      </ul>
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
    toggleMenu(e) {
      e.stopPropagation();
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
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  letter-spacing: 0.1em;
  @include tablet-size {
    font-size: 20px;
  }
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
  padding: 10px 20px;
  box-sizing: border-box;
  // position: relative;
  position: fixed;
  z-index: 90;
  width: 100%;

  background-color: #fff;
  .title {
    display: block;
    height: 9vw;
    max-height: 50px;
    img {
      height: 100%;
    }
  }
  .ionicon {
    width: 9vw;
    max-width: 45px;
    color: #646363;
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
    padding: 10px;
    &.opened {
      left: 0;
    }
    .nav_title {
      padding: 0 12px;
      margin-bottom: 30px;
      img {
        height: 10vw;
        max-height: 56px;
      }
    }
    nav {
      ul {
        li {
          list-style: none;
          margin-bottom: 25px;
          .nav_list {
            text-decoration: none;
            color: $text-color;
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
      }
    }
  }
}

.back {
  // width: 100vw;
  // height: 100vh;
  width: calc(100vw + 20px);
  height: calc(100vh + 8px);
  position: absolute;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 98;
  top: -8px;
  left: -20px;
  .ionicon {
    position: absolute;
    top: 5%;
    left: 72vw;
    width: 10vw;
    max-width: 45px;
    color: #fff;
  }
}

.none {
  display: none;
}

footer {
  background-color: $back-color;
  text-align: center;
  box-sizing: border-box;
  padding: 30px 20px 8px 20px;
  .footer_nav {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 60px;
    li {
      list-style: none;
      width: 50%;
      margin-bottom: 15px;
      a {
        text-decoration: none;
        color: $text-color;
        font-weight: bold;
      }
    }
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 12px;
    color: #fff;
    &.sub_title {
      width: 210px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
  img {
    width: 60vw;
  }
  small {
    color: #fff;
  }
}
</style>
