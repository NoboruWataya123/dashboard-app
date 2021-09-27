<template>
  <!-- contain main informative part of the site -->
  <main id="main" class="has-sidebar">
    <section class="section">
      <header class="header">
        <h1>{{ $t("Activity") }}</h1>
        <a href="#" class="btn btn-primary"
          ><i class="icon-microsoftexcel"></i> {{ $t("Download Excel") }}</a
        >
      </header>
      <form action="#" class="filter-form card">
        <div class="holder">
          <div class="datepickers">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="from-date">{{ $t("From") }}</label>
                  <div class="input-holder">
                    <input
                      id="from-date"
                      type="text"
                      class="form-control datepicker"
                      value="20/12/2020"
                      readonly
                    />
                    <i class="icon-calendar"></i>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="to-date">{{ $t("To") }}</label>
                  <div class="input-holder">
                    <input
                      id="to-date"
                      type="text"
                      class="form-control datepicker"
                      value="20/12/2020"
                      readonly
                    />
                    <i class="icon-calendar"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group filter-type">
            <strong class="label">{{ $t("Transaction Type") }}</strong>
            <div class="jcf-dropdown" v-bind:class="{ active: isActive }">
              <a href="#" class="jcf-opener" @click="handleToggle">{{
                $t("Filter")
              }}</a>
              <div class="jcf-dropdown-menu">
                <ul class="custom-checkbox">
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="creditCard"
                        value="Credit Card"
                      /><span>{{ $t("Credit Card") }}</span></label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="qrCode"
                        value="QR Code"
                      /><span>QR Code</span></label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="installPayments"
                        value="Install payments"
                      /><span>{{ $t("Install payments") }}</span></label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="krungthaiBank"
                        value="Krungthai Bank"
                      /><span>Krungthai Bank</span></label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="krungsriBank"
                        value="Krungsri Bank"
                      /><span>Krungsri Bank</span></label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        type="checkbox"
                        id="firstChoice"
                        value="First Choice"
                      /><span>First Choice</span></label
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="form-group transaction-type">
            <strong class="label">{{ $t("Transaction Type") }}</strong>
            <ul class="custom-checkbox">
              <li>
                <label
                  ><input type="checkbox" id="showWithdrawal" /><span>{{
                    $t("Show Withdrawal")
                  }}</span></label
                >
              </li>
              <li>
                <label
                  ><input type="checkbox" id="showRefunds" /><span>{{
                    $t("Show Refunds")
                  }}</span></label
                >
              </li>
            </ul>
          </div>
        </div>
        <ul class="tags"></ul>
        <div class="btn-holder">
          <button type="submit" class="btn btn-primary btn-search">
            <i class="icon-search"></i> {{ $t("Search") }}
          </button>
        </div>
      </form>
      <div class="card">
        <div class="card-body pb-1">
          <div class="activity-table-holder">
            <table class="table activity-table">
              <thead>
                <tr>
                  <th>{{ $t("Date") }}</th>
                  <th>{{ $t("Transaction ID") }}</th>
                  <th>{{ $t("Status") }}</th>
                  <th>{{ $t("Branch") }}</th>
                  <th>{{ $t("Currency") }}</th>
                  <th class="price-cell">
                    <strong class="theading">{{ $t("Debit") }}</strong>
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                    </div>
                  </th>
                  <th class="price-cell">
                    <strong class="theading">{{ $t("Credit") }}</strong>
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                    </div>
                  </th>
                  <th>{{ $t("Action") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title="Date">
                    <span class="tran-id">MSTRF18000000090030</span>
                    <time datetime="2020-12-20">02/02/2020</time>
                    <span class="time">20:30</span>
                  </td>
                  <td data-title="Transaction ID">
                    <span class="tran-id">MSTRF18000000090030</span>
                  </td>
                  <td data-title="Status">
                    <span class="status online"></span>
                  </td>
                  <td data-title="Branch">Branch</td>
                  <td data-title="Currency">THB</td>
                  <td data-title="Debit" class="price-cell">
                    <div class="amount-detail debit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td data-title="Credit" class="price-cell">
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td class="action">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        ><i class="icon-dots"></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#transactionDetails"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Details") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupVoid"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Void") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupRefund"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Refund") }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-title="Date">
                    <span class="tran-id">MSTRF18000000090044</span>
                    <time datetime="2020-12-20">02/02/2020</time>
                    <span class="time">20:30</span>
                  </td>
                  <td data-title="Transaction ID">
                    <span class="tran-id">MSTRF18000000090044</span>
                  </td>
                  <td data-title="Status">
                    <span class="status online"></span>
                  </td>
                  <td data-title="Branch">Branch</td>
                  <td data-title="Currency">THB</td>
                  <td data-title="Debit" class="price-cell">
                    <div class="amount-detail debit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td data-title="Credit" class="price-cell">
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td class="action">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        ><i class="icon-dots"></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#transactionDetails"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Details") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupVoid"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Void") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupRefund"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Refund") }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-title="Date">
                    <span class="tran-id">MSTRF18000000090055</span>
                    <time datetime="2020-12-20">02/02/2020</time>
                    <span class="time">20:30</span>
                  </td>
                  <td data-title="Transaction ID">
                    <span class="tran-id">MSTRF18000000090055</span>
                  </td>
                  <td data-title="Status">
                    <span class="status online"></span>
                  </td>
                  <td data-title="Branch">Branch</td>
                  <td data-title="Currency">THB</td>
                  <td data-title="Debit" class="price-cell">
                    <div class="amount-detail debit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td data-title="Credit" class="price-cell">
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td class="action">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        ><i class="icon-dots"></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#transactionDetails"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Details") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupVoid"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Void") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupRefund"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Refund") }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td data-title="Date">
                    <span class="tran-id">MSTRF18000000090077</span>
                    <time datetime="2020-12-20">02/02/2020</time>
                    <span class="time">20:30</span>
                  </td>
                  <td data-title="Transaction ID">
                    <span class="tran-id">MSTRF18000000090077</span>
                  </td>
                  <td data-title="Status">
                    <span class="status online"></span>
                  </td>
                  <td data-title="Branch">Branch</td>
                  <td data-title="Currency">THB</td>
                  <td data-title="Debit" class="price-cell">
                    <div class="amount-detail debit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td data-title="Credit" class="price-cell">
                    <div class="amount-detail credit">
                      <div class="haeding-bar">
                        <strong class="cell">{{ $t("Amount") }}</strong>
                        <strong class="cell">{{ $t("Fee") }}</strong>
                        <strong class="cell">{{ $t("Tax") }}</strong>
                        <strong class="cell">{{ $t("Net Amount") }}</strong>
                      </div>
                      <div class="values">
                        <span class="cell">90.3</span>
                        <span class="cell">10.2</span>
                        <span class="cell">30</span>
                        <span class="cell">50</span>
                      </div>
                    </div>
                  </td>
                  <td class="action">
                    <div class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        ><i class="icon-dots"></i
                      ></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#transactionDetails"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Details") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupVoid"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Void") }}</a
                          >
                        </li>
                        <li>
                          <a
                            href="#popupRefund"
                            class="
                              btn btn-sm btn-outline-primary
                              card-popup-opener
                            "
                            >{{ $t("Refund") }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Activity",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  width: fit-content;
}
*{
  text-decoration: none;
}
</style>

<i18n>
{
  "en": {
    "Activity": "Activity",
    "Date": "Date",
    "Status": "Status",
    "Branch": "Branch",
    "Currency": "Currency",
    "Debit": "Debit",
    "Credit": "Credit",
    "Details": "Details",
    "Void": "Void",
    "Refund": "Refund",
    "Action": "Action",
    "From": "From",
    "Transaction Type": "Transaction Type",
    "Search": "Search",
    "To": "To",
    "Search": "Search",
    "Amount": "Amount",
    "Fee": "Fee",
    "Tax": "Tax",
    "Net Amount": "Net Amount",
    "Download Excel": "Download Excel File",
    "Show Withdrawal": "Show Withdrawal",
    "Show Refunds": "Show Refunds",
    "Transaction ID": "Transaction ID",
  },
  "th": {
    "Activity": "กิจกรรม",
    "Date": "วันที่",
    "Transaction ID": "ธุรกรรม ID",
    "Status": "สถานะ",
    "Branch": "สาขา",
    "Currency": "สกุลเงิน",
    "Debit": "เดบิต",
    "Credit": "เครดิต",
    "Details": "รายละเอียด",
    "Void": "โมฆะ",
    "Refund": "คืนเงิน",
    "From": "จาก",
    "Transaction Type": "ประเภทรายการ",
    "Search": "ค้นหา",
    "To": "ถึง",
    "Search": "ค้นหา",
    "Amount": "จำนวน",
    "Fee": "ค่าธรรมเนียม",
    "Tax": "ภาษี",
    "Net Amount": "ปริมาณสุทธิ",
    "Download Excel": "ดาวน์โหลด Excel File",
    "Show Withdrawal": "แสดงการถอน",
    "Show Refunds": "แสดงการคืนเงิน",
    "Transaction ID": "ธุรกรรม ID",
    "Action": "การกระทำ",
  }
}
</i18n>
