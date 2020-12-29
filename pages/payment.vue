<template>
  <div class="wrapper">
    <div class="title">
      <h2>決済</h2>
    </div>
    <div class="payment_desc">
      <p class="first_text">
        この決済画面ではpaypalでの決済のみを行っております。<br />
        それ以外の決済方法につきましては、手動で行う銀行口座へのお振込みとなっています。
        口座情報は、このページへのリンクが添付されていたメールに記載されていますので、ご確認ください。
      </p>
      <p>
        paypalでの決済をされる方は、まず料金プランから受講したいプランを選択していただき、
        「購読」ボタンからpaypalの支払い画面に移ります。
      </p>
      <small>※paypalのアカウントが必要です。</small>
    </div>

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
      class="payment_form"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="BGHG4R3S5HJ3G" />
      <table class="wrapper_plan">
        <tbody>
          <tr>
            <td class="plan_title">
              <input type="hidden" name="on0" value="料金プラン" />料金プラン
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0" class="plan_select">
                <option value="Scratchライト"
                  >Scratchライト : ¥5,000 JPY - 毎月</option
                >
                <option value="Scratchスタンダード"
                  >Scratchスタンダード : ¥8,000 JPY - 毎月</option
                >
                <option value="WEB開発ライト"
                  >WEB開発ライト : ¥6,000 JPY - 毎月</option
                >
                <option value="WEB開発スタンダード"
                  >WEB開発スタンダード : ¥10,000 JPY - 毎月</option
                >
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <input type="hidden" name="currency_code" value="JPY" />
      <input
        type="image"
        src="https://www.paypalobjects.com/ja_JP/JP/i/btn/btn_subscribeCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - オンラインでより安全・簡単にお支払い"
        class="payment_button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
    <p class="cancel_text">
      コースの定期購読をキャンセルする場合は、下の「購読をキャンセル」ボタンから手続きを行ってください
    </p>
    <a
      HREF="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=TG8287ELTZTMA"
      class="cancel_link"
    >
      <img
        SRC="https://www.paypalobjects.com/ja_JP/JP/i/btn/btn_unsubscribe_LG.gif"
        BORDER="0"
      />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 25px;
  padding: 0 15px 20px;
  display: block;
  text-align: center;
  @include tablet-size {
    padding: 0 45px 30px;
  }
}

.title {
  border-bottom: 2px solid $back-color;
  margin-bottom: 50px;
  @include tablet-size {
    margin-bottom: 70px;
  }
  h2 {
    font-size: 1.8rem;
    color: $text-color;
  }
}

.payment_desc {
  margin-bottom: 35px;
  text-align: left;
  .first_text {
    margin-bottom: 10px;
  }
}

.payment_form {
  margin-bottom: 40px;
  .wrapper_plan {
    margin: 0 auto;
    .plan_title {
      font-size: 1.3rem;
      @include tablet-size {
        padding-bottom: 15px;
      }
    }
    .plan_select {
      padding: 0.4em;
      border: 1px solid $back-color;
      margin-bottom: 15px;
      background-color: #fff;
      @include tablet-size {
        font-size: 1rem;
      }
    }
  }
  .payment_button {
    @include tablet-size {
      width: 20%;
      max-width: 150px;
    }
  }
}

.cancel_text {
  text-align: left;
  margin-bottom: 10px;
}

.cancel_link {
  img {
    @include tablet-size {
      width: 20%;
      max-width: 150px;
    }
  }
}
</style>
