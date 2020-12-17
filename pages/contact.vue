<template>
  <div class="wrapper">
    <div class="title">
      <h2>お問い合わせ</h2>
    </div>
    <div class="success" v-if="replyFlag === '1'">
      <p>
        お問い合わせ、ありがとうございます。<br />早急に連絡させていただきます。
      </p>
    </div>
    <div class="error" v-else-if="replyFlag === '2'">
      <p>送信がうまくいきませんでした。<br />もう一度やり直してください</p>
    </div>
    <div class="main">
      <p>
        ご質問やご相談があられましたら、こちらよりお問い合わせください。
      </p>
      <form action="" @submit.prevent="send" method="post">
        <div class="form_item">
          <label for="name">お名前</label>
          <input type="text" id="name" v-model="formData.name" />
        </div>
        <div class="form_item">
          <label for="mail"
            >メールアドレス<span class="essential">*</span></label
          >
          <input type="email" id="mail" v-model="formData.mail" required />
        </div>
        <div class="form_item">
          <label for="form_body"
            >お問い合わせ内容<span class="essential">*</span></label
          >
          <textarea
            id="form_body"
            rows="8"
            v-model="formData.body"
            required
          ></textarea>
        </div>
        <div class="submit">
          <input type="submit" value="送 信" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        mail: "",
        body: ""
      },
      replyFlag: "0"
    };
  },
  methods: {
    async send() {
      try {
        const response = await axios.post(
          "https://homoludens.microcms.io/api/v1/contact",
          this.formData,
          {
            headers: {
              "Content-Type": "application/json",
              "X-WRITE-API-KEY": "006a26db-fa9b-4f53-81ba-d6ba589fc42d"
            }
          }
        );
        this.formData = {
          name: "",
          mail: "",
          body: ""
        };
        this.replyFlag = "1";
      } catch (error) {
        this.replyFlag = "2";
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 25px;
  padding: 0 15px;
  display: block;
  @include tablet-size {
    padding: 0 45px;
  }
}

.title {
  border-bottom: 2px solid $back-color;
  margin-bottom: 50px;
  text-align: center;
  @include tablet-size {
    margin-bottom: 70px;
  }
  h2 {
    font-size: 1.8rem;
    color: $text-color;
  }
}

.success {
  text-align: center;
  margin-bottom: 30px;
  p {
    color: $image-color;
    font-size: 1rem;
  }
}

.error {
  text-align: center;
  margin-bottom: 30px;
  p {
    color: $button-color;
    font-size: 1rem;
  }
}

.main {
  background-color: $back-color;
  max-width: 800px;
  padding: 15px 20px;
  margin-bottom: 45px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 16px;
  @include tablet-size {
    padding: 30px 45px;
  }
  > p {
    font-size: 1rem;
    color: $text-color;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .form_item {
    margin-bottom: 18px;
    @include tablet-size {
      margin-bottom: 30px;
    }
    label {
      display: block;
      font-size: 1rem;
      color: $text-color;
    }
    input {
      display: block;
      border: none;
      width: 100%;
      padding: 0.6em;
      border-radius: 4px;
      font-size: 1.1rem;
      @include tablet-size {
        font-size: 0.9rem;
      }
    }
    textarea {
      display: block;
      border: none;
      width: 100%;
      padding: 0.6em;
      border-radius: 4px;
      font-size: 1.1rem;
       @include tablet-size {
        font-size: 0.9rem;
      }
    }
  }
  .submit {
    text-align: center;
    width: 100%;
    input {
      display: inline-block;
      width: 90px;
      max-width: 100%;
      padding: 0.5em 0.28em;
      background-color: $button-color;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: 0.25s;
      &:focus,
      :hover {
        opacity: 0.6;
      }
    }
  }
  .essential {
    color: $button-color;
  }
}
</style>
