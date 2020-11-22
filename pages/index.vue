<template>
  <div>
    <div class="first_area">
      <!-- 後で動画を入れる -->
      <div class="back"></div>
      <div class="first_title">
        <h1>人間は、<br />遊ぶ存在である。</h1>
        <div class="homoludens_desc">
          <p>ホモ・ルーデンス</p>
          <img src="~/assets/images/HomoLudens_logo.svg" />
          <p class="sub_title">
            小・中学生のためのオンラインプログラミングスクール
          </p>
        </div>
        <div class="btn">
          <nuxt-link to="/">無料トライアルはこちら</nuxt-link>
        </div>
      </div>

      <div class="features_area">
        <div class="features_title">
          <img src="~/assets/images/HomoLudens_logo.svg" />
          <h2>の特徴</h2>
        </div>
        <div class="wrapper_features_content">
          <div class="features_content"></div>
          <div class="features_content"></div>
          <div class="features_content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.back {
  width: 100vw;
  height: calc(100vh - (10vw + 16px));
  min-height: calc(100vh - 72px);
  background-color: #818181;
}

.first_area {
  position: relative;
  .first_title {
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 35%;
    h1 {
      width: 310px;
      margin: 0 auto;
      margin-bottom: 16px;
      color: #fff;
      font-size: 2.4rem;
      font-weight: 400;
    }
    .homoludens_desc {
      text-align: center;
      p {
        font-size: 0.8rem;
        color: #fff;
        margin-bottom: 12px;
        &.sub_title {
          width: 180px;
          margin: 0 auto;
          margin-bottom: 30px;
        }
      }
      img {
        width: 70vw;
        margin-bottom: 12px;
      }
    }
  }
}

.features_area {
  padding: 20px 10px;
  text-align: center;
  .features_title {
    border-bottom: 2px solid #e3e4e8;
    margin-bottom: 50px;
    img {
      width: 70vw;
    }
    h2 {
      font-size: 1.8rem;
      color: #4e4e4e;
    }
  }
}

// 後で共通化する？
.btn {
  background-color: #f98282;
  padding: 10px 0;
  border-radius: 24px;
  width: 260px;
  margin: 0 auto;
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
