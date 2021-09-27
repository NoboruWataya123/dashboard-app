<template>
  <main id="main" class="has-sidebar">
    <section class="section">
      <header class="header">
        <h1>{{ $t("Personal Account") }}</h1>
      </header>
      <div class="card graph-box">
        <div class="card-body">
          <div class="personal-account">
            <div class="item">
              <strong class="heading">{{ $t("Email") }}</strong>
              <strong class="value">c@tada.do</strong>
              <button type="button" class="btn btn-primary">
                {{ $t("Edit") }}
              </button>
            </div>
            <div class="item">
              <strong class="heading">{{ $t("Phone Number") }}</strong>
              <strong class="value">0956698929</strong>
              <button type="button" class="btn btn-primary">
                {{ $t("Edit") }}
              </button>
            </div>
            <div class="item">
              <strong class="heading">{{ $t("Password") }}</strong>
              <strong class="value">{{ $t("Select your Bank") }}</strong>
              <button type="button" class="btn btn-primary">
                {{ $t("Edit") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#main {
  background-color: #f5f9ff !important;
}
</style>

<i18n>
{
  "en": {
    "Personal Account": "Personal Account",
    "Email": "Email",
    "Phone Number": "Phone Number",
    "Password": "Password",
    "Select your Bank": "Select your Bank",
    "Edit": "Edit"
  },
  "th": {
    "Personal Account": "บัญชีส่วนตัว",
    "Email": "อีเมล",
    "Phone Number": "หมายเลขโทรศัพท์",
    "Password": "รหัสผ่าน",
    "Select your Bank": "เลือกธนาคารของคุณ",
    "Edit": "แก้ไข"
  }
}
</i18n>
