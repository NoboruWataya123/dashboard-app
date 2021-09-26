<template>
  <div id="wrapper" class="" v-bind:class="{ 'nav-active': isActive }">
    <!-- header of the page -->
    <header id="header">
      <div class="brand-info">
        <div class="img-holder">
          <img src="../assets/img02.jpg" alt="image sdescription" />
        </div>
        <strong class="title">Betty Shop</strong>
      </div>
      <a href="#" @click="handleToggle" class="nav-opener"><span></span></a>
      <div class="nav-holder">
        <ul class="buttons-nav d-none d-lg-flex">
          <li>
            <a href="#" class="btn btn-primary">{{ $t("Demo") }}</a>
          </li>
          <li>
            <a href="#" class="btn btn-outline-dark">{{ $t("Sandbox") }}</a>
          </li>
          <li>
            <a href="#" class="btn btn-outline-dark">{{ $t("Live") }}</a>
          </li>
        </ul>
        <ul class="top-nav">
          <li class="d-none d-md-block">
            <a href="#" class="btn btn-outline-primary"
              ><i class="icon-payment-link-add"></i
              ><span>{{ $t("Create Payment Link") }}</span></a
            >
          </li>
          <ChangeLocale />
          <li class="settings">
            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown"
              ><i class="icon-settings"></i
            ></a>
            <ul class="dropdown-menu">
              <router-link to="/profile">
                <li class="text-light">
                  <a
                    ><i class="icon-user-circle-o"></i
                    >{{ $t("Confirm Profile") }}</a
                  >
                </li>
              </router-link>
              <router-link to="/personal-account">
                <li class="text-light">
                  <a><i class="icon-lock"></i>{{ $t("Change Password") }}</a>
                </li>
              </router-link>
              <router-link to="/bank-account">
                <li class="text-light">
                  <a><i class="icon-bank"></i>{{ $t("Bank Account") }}</a>
                </li>
              </router-link>
              <router-link to="/personal-account">
                <li class="text-light">
                  <a><i class="icon-bank"></i>{{ $t("Personal Account") }}</a>
                </li>
              </router-link>
              <router-link to="/webhooks">
                <li class="text-light">
                  <a><i class="icon-settings"></i>{{ $t("Webhooks") }}</a>
                </li>
              </router-link>
              <router-link to="/user-management">
                <li class="text-light">
                  <a><i class="icon-group"></i>{{ $t("User Management") }}</a>
                </li>
              </router-link>
              <router-link to="/tax-invoice">
                <li class="text-light">
                  <a><i class="icon-file-text-o"></i>{{ $t("Tax Invoice") }}</a>
                </li>
              </router-link>
              <router-link to="/login">
                <li class="text-light">
                  <a><i class="icon-sign-out"></i>{{ $t("Logout") }}</a>
                </li>
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <div class="content-wrapper has-sidebar">
      <!-- side navigation styles -->
      <nav class="side-nav">
        <ul class="nav">
          <li @click="handleToggle">
            <router-link to="/">
              <a><i class="icon-dash"></i>{{ $t("Dashboard") }}</a>
            </router-link>
          </li>
          <li @click="handleToggle">
            <router-link to="/activity"
              ><a
                ><i class="icon-activity"></i>{{ $t("Activity") }}</a
              ></router-link
            >
          </li>
          <li @click="handleToggle">
            <router-link to="/withdrawal">
              <a
                ><i class="icon-wallet"></i>{{ $t("Withdrawal") }}</a
              ></router-link
            >
          </li>
          <li @click="handleToggle">
            <router-link to="/auto-withdrawal">
              <a><i class="icon-clock"></i>{{ $t("Auto Withdrawal") }}</a>
            </router-link>
          </li>
        </ul>
        <ul class="buttons-nav d-lg-none">
          <li>
            <a href="#" class="btn btn-primary">{{ $t("Demo") }}</a>
          </li>
          <li>
            <a href="#" class="btn btn-outline-dark">{{ $t("Sandbox") }}</a>
          </li>
          <li>
            <a href="#" class="btn btn-outline-dark">{{ $t("Live") }}</a>
          </li>
        </ul>
        <ul class="bottom-nav">
          <li>
            <a href="#tipInfo" data-bs-toggle="collapse"
              ><i class="icon-tips"></i>Tips</a
            >
            <div class="tip-info collapse" id="tipInfo">
              <a href="#tipInfo" class="btn-close" data-bs-toggle="collapse"
                ><i class="icon-cross"></i
              ></a>
              <strong class="heading">Easy withdrawal as follows</strong>
              <div class="box">
                <div class="icon-holder">
                  <img src="../assets/icon-book.png" alt="Icon" />
                </div>
                <p>
                  The merchant uploads Book Bank into the system, which must be
                  the account that you want to fund.
                </p>
              </div>
              <div class="box">
                <div class="icon-holder">
                  <img src="../assets/icon-box.png" alt="Icon" />
                </div>
                <p>Select the account and the amount you wish to withdraw.</p>
              </div>
              <a href="#" class="btn btn-outline-primary"
                >Next <i class="icon-chevron-right"></i
              ></a>
            </div>
          </li>
        </ul>
      </nav>
      <router-view> </router-view>
      <!-- contain main informative part of the site -->
      <footer id="footer">
        <div class="holder">
          <div class="row">
            <div class="col-12 col-md-6 d-md-flex">
              <div class="credit-cards">
                <img src="../assets/credit-cards.png" alt="credit cards" />
              </div>
              <ul class="fnav">
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <div class="copyright">
                <p>&copy; 2021 Copyright <a href="#">Money Space</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import ChangeLocale from "./ChangeLocale.vue";
export default {
  components: { ChangeLocale },
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
};
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
}
</style>

<i18n>
{
  "en": {
    "Sandbox": "Sandbox",
    "Live": "Live",
    "Demo": "Demo",
    "Dashboard": "Dashboard",
    "Create Payment Link": "Create Payment Link",
    "Activity": "Activity",
    "Withdrawal": "Withdrawal",
    "Auto Withdrawal": "Auto Withdrawal",
    "Confirm Profile": "Confirm profile",
    "Change Password": "Change password",
    "Personal Account": "Personal Account",
    "Bank Account": "Bank Account",
    "Webhooks": "Webhooks",
    "User Management": "User Management",
    "Tax Invoice": "Tax Invoice",
    "Logout": "Logout",

  },
  "th": {
    "Sandbox": "แซนด์บ็อกซ์",
    "Live": "มีชีวิต",
    "Demo": "การสาธิต",
    "Dashboard": "แผงควบคุม",
    "Create Payment Link": "สร้างลิงก์การชำระเงิน",
    "Activity": "กิจกรรม",
    "Withdrawal": "การถอนเงิน",
    "Auto Withdrawal": "ถอนอัตโนมัติ",
    "Confirm Profile": "ยืนยันโปรไฟล์",
    "Change Password": "เปลี่ยนรหัสผ่าน",
    "Personal Account": "บัญชีส่วนตัว",
    "Bank Account": "บัญชีธนาคาร",
    "Webhooks": "เว็บฮุค",
    "User Management": "การจัดการผู้ใช้",
    "Tax Invoice": "ใบกำกับภาษี",
    "Logout": "ออกจากระบบ",
  }
}
</i18n>
