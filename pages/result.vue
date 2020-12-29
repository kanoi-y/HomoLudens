<template>
  <div class="wrapper">
      <div>
    <p>
      お支払いいただき、ありがとうございました。取引が完了しましたので、購入商品の受領書をメールでお送りしました。
    </p>
    <p>取引の詳細を表示するには、PayPalアカウントにログインしてください。</p>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 25px;
  padding: 0 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include tablet-size {
    padding: 0 45px 30px;
  }
}

p {
  margin-bottom: 15px;
}
</style>
