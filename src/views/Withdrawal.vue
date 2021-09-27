<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>{{ $t("Withdraw") }}</h1>
      </header>
      <div class="card withdraw-steps">
        <div class="card-body">
          <ul class="step-nav-list">
            <li :class="{ active: stepActive }">
              <strong>{{ $t("Withdraw Funds") }}</strong>
            </li>
            <li :class="{ active: nextStepActive }">
              <strong>{{ $t("Confirm") }}</strong>
            </li>
          </ul>
          <div class="steps">
            <div class="step" :class="{ active: isActive }">
              <div class="step-body">
                <div class="info-box">
                  <div class="price-info">
                    <strong class="heading">{{ $t("Ledger Balance") }}:</strong>
                    <strong class="price"
                      ><span class="amount">14,429.06</span>Baht</strong
                    >
                  </div>
                  <div class="info-text">
                    <div class="text">
                      <p>
                        {{ $t("Withdrawal") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="bankName">{{ $t("Bank Name") }}:</label>
                  <select id="bankName" class="form-select">
                    <option value="Select Your Bank">
                      {{ $t("Select Your Bank") }}
                    </option>
                    <option
                      value="Bank of Ayudhya Public Company Limited (BAY)"
                    >
                      Bank of Ayudhya Public Company Limited (BAY)
                    </option>
                    <option
                      value="Bank of Ayudhya Public Company Limited (BAY)"
                    >
                      Bank of Ayudhya Public Company Limited (BAY)
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="amount">{{ $t("Amount") }}</label>
                  <div class="input-holder">
                    <i class="icon-baht"></i>
                    <input id="amount" type="text" class="form-control" />
                  </div>
                  <span class="note"
                    ><span class="text-primary">*</span>{{ $t("hint") }}</span
                  >
                </div>
              </div>
              <div class="step-footer">
                <ul class="buttons-inline-list">
                  <li>
                    <button
                      @click="onClickNext"
                      type="button"
                      class="btn btn-primary btn-next"
                    >
                      {{ $t("Next") }} <i class="icon-arrow-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="step" :class="{ active: nextActive }">
              <div class="step-body">
                <ul class="detail-list">
                  <li>
                    <strong class="heading"
                      >{{ $t("Withdraw Amount") }}:</strong
                    >
                    <strong class="value"
                      ><span class="amount">220.00</span> baht</strong
                    >
                  </li>
                  <li>
                    <strong class="heading">{{ $t("Withdraw fee") }}:</strong>
                    <strong class="value"
                      ><span class="amount">15.00</span> baht</strong
                    >
                  </li>
                  <li>
                    <strong class="heading">{{ $t("Withdraw fee") }}:</strong>
                    <strong class="value"
                      ><span class="amount">15.00</span> baht</strong
                    >
                  </li>
                </ul>
              </div>
              <div class="step-footer">
                <div class="row align-items-center">
                  <div class="col-12 col-md-6">
                    <strong class="note"
                      >{{
                        $t("Kindly verify the amount you have entered")
                      }}.</strong
                    >
                  </div>
                  <div class="col-12 col-md-6">
                    <ul class="buttons-inline-list">
                      <li>
                        <button type="button" class="btn popup-close">
                          {{ $t("Cancel") }}
                        </button>
                      </li>
                      <li>
                        <button type="button" class="btn btn-primary">
                          {{ $t("Save") }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      nextActive: false,
      stepActive: true,
      nextStepActive: false,
    };
  },
  methods: {
    onClickNext() {
      this.isActive = false;
      this.nextActive = true;
      this.stepActive = false;
      this.nextStepActive = true;
    },
  },
};
</script>

<i18n>
{
  "en": {
    "Withdraw": "Withdraw",
    "Withdrawal": "Withdrawal money will normally be received in your bank account within 2-3 business days.",
    "Withdraw Funds": "Withdraw Funds",
    "Confirm": "Confirm",
    "Ledger Balance": "Ledger Balance",
    "Bank Name": "Bank Name",
    "Select Your Bank": "Select Your Bank",
    "Amount": "Amount",
    "Withdraw Amount": "Withdraw Amount",
    "Withdraw fee": "Withdraw fee",
    "Kindly verify the amount you have entered.": "Kindly verify the amount you have entered.",
    "Cancel": "Cancel",
    "Save": "Save",
    "hint": "if your withdraw amount is between 100 to 29.999.99 you will have a fee 15 baht.",
    "Next": "Next"

  },
  "th": {
    "Withdraw": "ถอน",
    "Withdrawal": "โดยปกติเงินที่ถอนจะได้รับในบัญชีธนาคารของคุณภายใน 2-3 วันทำการ",
    "Withdraw Funds": "ถอนเงิน",
    "Confirm": "ยืนยัน",
    "Ledger Balance": "ยอดคงเหลือบัญชีแยกประเภท",
    "Bank Name": "ชื่อธนาคาร",
    "Select Your Bank": "เลือกธนาคารของคุณ",
    "Amount": "จำนวน",
    "Withdraw Amount": "จำนวนเงินที่ถอน",
    "Withdraw fee": "ค่าธรรมเนียมการถอน",
    "Kindly verify the amount you have entered.": "กรุณาตรวจสอบจำนวนเงินที่คุณป้อน.",
    "Cancel": "ยกเลิก",
    "Save": "บันทึก",
    "hint": "หากจำนวนเงินที่ถอนของคุณอยู่ระหว่าง 100 ถึง 29.999.99 คุณจะมีค่าธรรมเนียม 15 บาท",
    "Next": "ต่อไป"
  }
}
</i18n>
