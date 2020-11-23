<template>
  <div>
     <div class="first_area">
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
    </div>

    <div class="features_area area">
      <div class="features_title title">
        <img src="~/assets/images/HomoLudens_logo.svg" />
        <h2>の特徴</h2>
      </div>

      <div class="wrapper_features_content">
        <div class="features_content">
          <img src="~/assets/images/ludens-feature1.svg" />

          <h3>好きな場所で好きな時間に</h3>
          <p>
            HomoLudensではオンライン会議ツールである「zoom」を使って学習を進めるので、インターネット環境とPCさえあれば好きな場所で受講できます。
            また、時間もご希望の時間を講師と相談の上自由に選ぶことが出来ますので、ご自身の生活スタイルに合った形で学習を行えます。
          </p>
        </div>

        <div class="features_content">
          <img src="~/assets/images/ludens-feature2.svg" />

          <h3>一人ひとりに合わせた授業</h3>
          <p>
            映像教材は基本的に使用せずに講師と受講者の１対１で学習を進めます。そのため受講者の興味や理解度に合わせて、とりあえず動くゲームを作って一緒に遊んだり、
            じっくりと本格的にプログラミングを学ぶなど柔軟にオーダーメイドの授業を行うことが出来ます。
          </p>
        </div>

        <div class="features_content">
          <img src="~/assets/images/ludens-feature3.svg" />
          <h3>いつでも質問できる仕組み</h3>
          <p>
            授業中にいつでも質問、相談できるのはもちろんのこと、授業外でもHomoLudensの公式LINEアカウントからいつでも質問することが出来ます。
            授業で分からなかったところや、自作したプログラムについてでも構いません。様々な質問に真摯にお答えします。
          </p>
        </div>
      </div>
    </div>

    <div class="course_area area">
      <div class="title">
        <h2>コースの内容</h2>
      </div>

      <div class="wrapper_course_content">
        <div class="course_content">
          <h3>Scratchコース</h3>
          <img src="images/course-image1.jpg" />
          <p>
            マサチューセッツ工科大学が開発したプログラミング教材「Scratch」をメインに使用して、プログラミングを学びます。
            アニメーションやゲームを作りながら、楽しくスキルを伸ばしていきます。
          </p>
          <h4>★こんな人におすすめ★</h4>
          <p class="osusume">初めてプログラミングに挑戦する人</p>
          <p class="osusume">自分でゲームを作ってみたい人</p>
          <div class="wrapper_grid">
            <div>対象年齢（目安）</div>
            <div>小学３年生～中学３年生程度</div>
            <div>時間</div>
            <div>一回６０分</div>
            <div>料金</div>
            <div>ライト（月２回）</div>
            <div>月額５０００円</div>
            <div>スタンダード（月４回）</div>
            <div>）月額８０００円</div>
            <div>追加レッスン</div>
            <div>２０００円/回</div>
          </div>
        </div>

        <div class="course_content">
          <h3>WEB開発コース</h3>
          <img src="images/course-image1.jpg" />
          <p>
            web開発で主に使用されているプログラミング言語であるHTML,CSS,JavaScriptなどを学びます。
            実際にwebサイトやwebアプリをつくりながら、将来に役立つようなスキルを身に着けます。
          </p>
          <h4>★こんな人におすすめ★</h4>
          <p class="osusume">本格的なプログラミングに挑戦したい人</p>
          <p class="osusume">ホームページやブログを作ってみたい人</p>
          <div class="wrapper_grid">
            <div>対象年齢（目安）</div>
            <div>小学高学年以上</div>
            <div>時間</div>
            <div>一回６０分</div>
            <div>料金</div>
            <div>ライト（月２回）</div>
            <div>月額６０００円</div>
            <div>スタンダード（月４回）</div>
            <div>）月額１００００円</div>
            <div>追加レッスン</div>
            <div>２５００円/回</div>
          </div>
          <small>※現在このコースは受付をしていません</small>
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
      font-size: 2.32rem;
      font-weight: 400;
    }
    .homoludens_desc {
      text-align: center;
      p {
        font-size: 0.8rem;
        color: #fff;
        margin-bottom: 12px;
        &.sub_title {
          width: 210px;
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

.features_title {
  img {
    width: 70vw;
  }
}

.wrapper_features_content {
  text-align: center;
  display: flex;
  flex-direction: column;
  .features_content {
    background-color: $back-color;
    border-radius: 16px;
    padding: 15px 20px;
    margin-bottom: 50px;
    img {
      margin-bottom: 12px;
    }
    h3 {
      color: $image-color;
      margin-bottom: 12px;
      font-size: 1.3rem;
    }
    p {
      text-align: left;
      font-size: 1rem;
      font-weight: 700;
      color: $text-color;
    }
  }
}

.wrapper_course_content {
  display: flex;
  flex-direction: column;
  .course_content {
    margin-bottom: 50px;
    h3 {
      color: $image-color;
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
    img {
      width: 100%;
    }
  }
}

.area {
  padding: 20px;
}

.title {
  border-bottom: 2px solid $back-color;
  margin-bottom: 50px;
  text-align: center;
  h2 {
    font-size: 1.8rem;
    color: $text-color;
  }
}

.btn {
  background-color: $button-color;
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
