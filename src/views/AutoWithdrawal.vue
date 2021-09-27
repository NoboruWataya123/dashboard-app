<template>
  <main id="main" class="has-sidebar">
    <section class="section">
      <header class="header">
        <h1>{{ $t("Auto Withdraw") }}</h1>
      </header>
      <div class="card graph-box">
        <div class="card-body">
          <form action="#" class="auto-withdraw-form">
            <dl class="info">
              <dt>{{ $t("Auto Withdraw Status") }}:</dt>
              <dd>
                <span class="withdraw-status disable">{{ $t("Disable") }}</span>
              </dd>
              <dt>{{ $t("Description") }}:</dt>
              <dd>{{ $t("Withdraw all day") }} ()</dd>
              <dt>{{ $t("Date and Time Setting") }}:</dt>
              <dd>05-04-2020 10:43</dd>
            </dl>
            <h3>{{ $t("Settings Usage") }}</h3>
            <div class="form-group">
              <strong class="label">{{ $t("Auto Withdraw Status") }}</strong>
              <ul class="radio-buttons">
                <li>
                  <label>
                    <input type="radio" name="withdrawStatus" checked />
                    <span>{{ $t("Disable") }}</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="withdrawStatus" />
                    <span>{{ $t("Enable") }}</span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="form-group">
              <label for="bankName">{{ $t("Bank Name") }} :</label>
              <input
                id="bankName"
                type="text"
                placeholder="Enter Bank Name"
                value="Bangkok Bank Public Company Limited (BBL)"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <strong class="label">{{ $t("Choose Days") }}</strong>
              <input type="text" class="tagsinput" />
            </div>
            <button type="submit" class="btn btn-primary btn-submit">
              {{ $t("Save") }}
            </button>
          </form>
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
    "Auto Withdraw": "Auto Withdraw",
    "Auto Withdraw Status": "Auto Withdraw Status",
    "Description": "Description",
    "Date and Time Setting": "Date and Time Setting",
    "Settings Usage": "Settings Usage",
    "Withdraw all day": "Withdraw all day",
    "Disable": "Disable",
    "Enable": "Enable",
    "Bank Name": "Bank Name",
    "Choose Days": "Choose Days",
    "Save": "Save"
  },
  "th": {
    "Auto Withdraw": "ถอนอัตโนมัติ",
    "Auto Withdraw Status": "สถานะการถอนอัตโนมัติ",
    "Description": "คำอธิบาย",
    "Date and Time Setting": "การตั้งค่าวันที่และเวลา",
    "Settings Usage": "การใช้งานการตั้งค่า",
    "Disable": "ปิดการใช้งาน",
    "Enable": "เปิดใช้งาน",
    "Bank Name": "ชื่อธนาคาร",
    "Choose Days": "เลือกวัน",
    "Save": "บันทึก",
    "Withdraw all day": "ถอนทั้งวัน"
  }
}
</i18n>
