<template>
  <div class="wrapper">
    <header>
      <div class="back none" ref="back" @click="toggleMenu"></div>

      <div class="header_inner">
        <nuxt-link to="/" class="title">
          <img src="~/assets/images/HomoLudens_logo.svg" alt="HomoLudensのロゴ" class="header_title_img" />
        </nuxt-link>
        <!-- メニューバーのsvg -->

        <svg
          @click="toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="menu_ionicon"
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
          <div class="nav_inner">
            <div class="nav_title">
              <img src="~/assets/images/HomoLudens_logo.svg" alt="HomoLudensのロゴ" />
            </div>
            <nav class="nav_contents">
              <ul>
                <li>
                  <nuxt-link to="/blog" class="nav_list">ブログ</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact" class="nav_list"
                    >お問い合わせ</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/trial" class="nav_list">無料トライアル</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="wrapper_icon">
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
        </div>
      </div>
    </header>

    <div class="main">
      <Nuxt />
    </div>

    <footer>
      <div class="footer_main">
        <ul class="footer_nav">
          <li><nuxt-link to="/blog" class="nav_list">ブログ</nuxt-link></li>
          <li>
            <nuxt-link to="/contact" class="nav_list">お問い合わせ</nuxt-link>
          </li>
          <li><nuxt-link to="/trial" class="nav_list">無料トライアル</nuxt-link></li>
        </ul>

        <div class="footer_media">
          <p>ホモ・ルーデンス</p>
          <img src="~/assets/images/HomoLudens_logo.svg" alt="HomoLudensのロゴ" />
          <p class="sub_title">
            小・中学生のためのオンライン<br />プログラミングスクール
          </p>
        </div>
      </div>
      <small class="small">🄫 2020 HomoLudens</small>
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

.none {
  display: none !important;
}
</style>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 90;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $back-color;
  .header_inner {
    display: flex;
    flex: 1;
    justify-content: space-between;
    .title {
      display: block;
      height: 9vw;
      max-height: 35px;
      .header_title_img {
        height: 100%;
      }
    }
    .menu_ionicon {
      width: 9vw;
      height: 100%;
      max-width: 35px;
      color: #646363;
      display: block;
      @include desktop-size {
        display: none;
      }
    }
    .global_nav {
      position: absolute;
      top: 0;
      left: -100vw;
      height: 100vh;
      transition: all 0.3s;
      z-index: 99;
      box-sizing: border-box;
      display: flex;
      @include desktop-size {
        position: relative;
        top: unset;
        left: unset;
        height: 100%;
        flex: 1;
      }
      &.opened {
        left: 0;
      }
      .nav_inner {
        background-color: #fff;
        padding: 10px;
        padding-right: 50px;
        @include desktop-size {
          width: 100%;
          padding: 0;
          padding-top: 5px;
        }
        .nav_title {
          padding: 0 12px;
          margin-bottom: 30px;
          display: block;
          @include desktop-size {
            display: none;
          }
          img {
            height: 10vw;
            max-height: 35px;
          }
        }
        .nav_contents {
          ul {
            display: flex;
            flex-direction: column;
            padding: 0 12px;
            @include desktop-size {
              flex-direction: row;
              justify-content: space-around;
              padding-left: 20vw;
            }
            li {
              list-style: none;
              margin-bottom: 25px;
              @include desktop-size {
                margin-bottom: 0;
              }
              .nav_list {
                text-decoration: none;
                color: $text-color;
                font-size: 0.9rem;
                font-weight: bold;
              }
            }
          }
        }
      }
      .wrapper_icon {
        padding-top: 25px;
        padding-left: 15px;
        @include desktop-size {
          display: none;
        }
        .ionicon {
          width: 10vw;
          max-width: 45px;
          color: #fff;
        }
      }
    }
  }
}

.back {
  width: calc(100vw + 20px);
  height: calc(100vh + 8px);
  position: absolute;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 98;
  top: -8px;
  left: -20px;
}

footer {
  display: block;
  background-color: $back-color;
  text-align: center;
  box-sizing: border-box;
  padding: 30px 20px 8px 20px;
   margin-top: auto;
  @include desktop-size {
    padding-top: 45px;
  }
  .footer_main {
    @include desktop-size {
      display: flex;
      justify-content: space-around;
    }
    .footer_nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      margin-bottom: 60px;
      @include desktop-size {
        margin-right: 3vw;
      }
      li {
        list-style: none;
        width: 45%;
        margin-bottom: 20px;
        text-align: center;
        a {
          text-decoration: none;
          color: $text-color;
          font-weight: bold;
          @include desktop-size {
            font-size: 0.9rem;
          }
        }
      }
    }
    .footer_media {
      p {
        font-size: 0.8rem;
        margin-bottom: 12px;
        color: #fff;
        &.sub_title {
          width: 210px;
          margin: 0 auto;
          margin-bottom: 30px;
          @include tablet-size {
            width: 280px;
          }
        }
      }
      img {
        width: 60vw;
        margin-bottom: 18px;
        @include desktop-size {
          width: 30vw;
        }
      }
    }
  }
  .small {
    color: #fff;
    @include desktop-size {
      font-size: 0.7rem;
    }
  }
}
</style>
