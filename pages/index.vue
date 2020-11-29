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
            <br />また、時間もご希望の時間を講師と相談の上自由に選ぶことが出来ますので、ご自身の生活スタイルに合った形で学習を行えます。
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
            <br />授業で分からなかったところや、自作したプログラムについてでも構いません。様々な質問に真摯にお答えします。
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
          <picture>
            <source
              srcset="images/course-image1-min.jpg"
              media="(max-width: 960px)"
            />
            <img src="images/course-image1.jpg" />
          </picture>
          <p>
            マサチューセッツ工科大学が開発したプログラミング教材「Scratch」をメインに使用して、プログラミングを学びます。
            <br />アニメーションやゲームを作りながら、楽しくスキルを伸ばしていきます。
          </p>
          <h4>★こんな人におすすめ★</h4>
          <p class="osusume">初めてプログラミングに挑戦する人</p>
          <p class="osusume">自分でゲームを作ってみたい人</p>
          <div class="wrapper_grid">
            <div class="left-one">対象年齢(目安)</div>
            <div class="right-one">小学３年生～中学３年生程度</div>
            <div class="left-two">時間</div>
            <div class="right-two">一回６０分</div>
            <div class="price">料金</div>
            <div class="left-three">ライト(月２回)</div>
            <div class="right-three">月額５０００円</div>
            <div class="left-four">スタンダード(月４回)</div>
            <div class="right-four">月額８０００円</div>
            <div class="left-five">追加レッスン</div>
            <div class="right-five">２０００円/回</div>
          </div>
        </div>

        <div class="course_content">
          <h3>WEB開発コース</h3>
          <!-- 準備が出来たらdivとpを消す -->
          <div class="not-ready">
          <picture>
            <source
              srcset="images/course-image2_640.jpg"
              media="(max-width: 960px)"
            />
            <img src="images/course-image2_1280.jpg" />
          </picture>
          <p class="not-ready_text">※現在このコースは受付をしていません</p>
          </div>
          <p>
            web開発で主に使用されているプログラミング言語であるHTML,CSS,JavaScriptなどを学びます。
            <br />実際にwebサイトやwebアプリをつくりながら、将来に役立つようなスキルを身に着けます。
          </p>
          <h4>★こんな人におすすめ★</h4>
          <p class="osusume">本格的なプログラミングに挑戦したい人</p>
          <p class="osusume">ホームページやブログを作ってみたい人</p>
          <div class="wrapper_grid">
            <div class="left-one">対象年齢(目安)</div>
            <div class="right-one">小学高学年以上</div>
            <div class="left-two">時間</div>
            <div class="right-two">一回６０分</div>
            <div class="price">料金</div>
            <div class="left-three">ライト(月２回)</div>
            <div class="right-three">月額６０００円</div>
            <div class="left-four">スタンダード(月４回)</div>
            <div class="right-four">月額１００００円</div>
            <div class="left-five">追加レッスン</div>
            <div class="right-five">２５００円/回</div>
          </div>
          <small>※現在このコースは受付をしていません</small>
        </div>
      </div>
    </div>

    <div class="trial">
      <h2>まずは、無料で授業を体験しよう！</h2>
      <div class="btn">
        <nuxt-link to="/">無料トライアルはこちら</nuxt-link>
      </div>
    </div>

    <div class="question_area area">
      <div class="title">
        <h2>よくあるご質問</h2>
      </div>

      <div class="question_content">
        <div class="question">
          <div class="speech-bubble question_bubble">Q</div>
          <p>スマホやタブレットでも学習できますか？</p>
        </div>
        <div class="answer">
          <div class="speech-bubble">A</div>
          <p>
            オンラインレッスン自体はスマホやタブレットでも可能ですが、Scratchなどプログラミングを行う作業環境はパソコンのみとなっています。
          </p>
        </div>
      </div>

      <div class="question_content">
        <div class="question">
          <div class="speech-bubble question_bubble">Q</div>
          <p>推奨環境を教えてください</p>
        </div>
        <div class="answer">
          <div class="speech-bubble">A</div>
          <p>
            パソコンのOSはWindows8/10またはMac OS 10.10以降、ブラウザはGoogle
            Chrome 最新版を使用することを推奨します。<br>ただし、ネットワーク環境やScratchの環境など諸条件によっては十分に動作しない場合もございます。
          </p>
        </div>
      </div>

      <div class="question_content">
        <div class="question">
          <div class="speech-bubble question_bubble">Q</div>
          <p>申込から受講開始まではどのような流れになりますか？</p>
        </div>
        <div class="answer">
          <div class="speech-bubble">A</div>
          <div class="wrapper_answer">
          <p>
            受講までの流れは、以下のようになります。
          </p>
          <p>
            １、まずは「無料トライアルはこちら」と書かれたボタンから、無料の体験授業に申し込みしていただきます。
          </p>
          <p>
            ２、申し込み後、ご登録いただいたメールアドレスに必要なURLや日時などを記載したメールが届きます。
          </p>
          <p>
            ３、指定した日時になりましたら、メールに記載されたURLにアクセスして体験授業を受講して下さい（事前にzoomの設定をしておく必要があります)<br>分からない点はメールやLINEでご連絡ください。（LINEアカウントはお申込み時にメールでお伝えします）
          </p>
          <p>
            ４、体験授業を受講してコースを続けたいと思った場合は、受講する曜日と時間を講師と相談しながら決定します。
          </p>
          <p>
            ５、後日、次の授業のURLと受講料のお支払いに関するご案内を記載したメールが届きますので、案内に従ってお支払いをお願いいたします。
          </p>
          </div>
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
  // height: calc(100vh - (10vw + 16px));
  // min-height: calc(100vh - 72px);
  height: 100vh;
  background-color: #818181;
}

.first_area {
  position: relative;
  .first_title {
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 30%;
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
      margin-bottom: 16px;
    }
    p {
      font-size: 0.9rem;
      color: $text-color;
      font-weight: bold;
      margin-bottom: 16px;
      &.osusume {
        width: fit-content;
        margin-bottom: 5px;
        background: linear-gradient(transparent 70%, $image-color 70%);
      }
    }
    h4 {
      color: $text-color;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    small {
      font-size: 0.7rem;
      color: $button-color;
    }
    .wrapper_grid {
      font-size: 0.9rem;
      margin-top: 20px;
      display: grid;
      grid-template:
        "left-one   left-one    "
        "right-one  right-one   "
        "left-two   left-two    "
        "right-two  right-two   "
        "price      price       "
        "left-three right-three "
        "left-four  right-four  "
        "left-five  right-five  "
        / 2fr 3fr;
      gap: 4px 6px;
      & > * {
        padding: 6px;
        font-weight: bold;
        color: $text-color;
        padding-left: 5%;
      }
      .left-one {
        grid-area: left-one;
        background-color: $back-color;
      }
      .right-one {
        grid-area: right-one;
        margin-bottom: 10px;
      }
      .left-two {
        grid-area: left-two;
        background-color: $back-color;
      }
      .right-two {
        grid-area: right-two;
        margin-bottom: 10px;
      }
      .price {
        grid-area: price;
        background-color: $back-color;
      }
      .left-three {
        grid-area: left-three;
        background-color: $image-color;
      }
      .right-three {
        grid-area: right-three;
      }
      .left-four {
        grid-area: left-four;
        background-color: $image-color;
      }
      .right-four {
        grid-area: right-four;
      }
      .left-five {
        grid-area: left-five;
        background-color: $image-color;
      }
      .right-five {
        grid-area: right-five;
      }
    }
  }
}

.trial {
  background-color: $back-color;
  margin-bottom: 50px;
  text-align: center;
  padding: 25px 15px;
  h2 {
    font-size: 1.2rem;
    color: $text-color;
    margin-bottom: 20px;
  }
}

.question_content {
  margin-bottom: 30px;
  .question {
    display: flex;
    .question_bubble {
      background-color: $back-color;
      &:before {
        border-left: 15px solid $back-color;
      }
    }
  }
  .answer {
    display: flex;
    .wrapper_answer {
     p {
       margin-bottom: 10px;
     }
    }
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    color: $text-color;
    padding-top: 6px;
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

.not-ready {
  position: relative;
  p.not-ready_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: $button-color;
    width: fit-content;
    max-width: 95%;
    font-size: 1rem;
  }
}

.btn {
  background-color: $button-color;
  padding: 10px 5px;
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

.speech-bubble {
  position: relative;
  // display: inline-block;
  display: block;
  flex-shrink: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0 5px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: $text-color;
  font-size: 1.8rem;
  font-weight: bold;
  background: $image-color;
  border-radius: 50%;
  box-sizing: border-box;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -23px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-left: 15px solid $image-color;
    z-index: 0;
  }
}
</style>
