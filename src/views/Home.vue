<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>{{ $t("Dashboard") }}</h1>
        <strong class="acc-id">{{ $t("Account") }} ID: B2018061028</strong>
      </header>
      <div class="row">
        <div class="col-12 col-md-6 d-md-flex">
          <div class="card w-100">
            <div class="card-body">
              <strong class="heading">{{ $t("Total-balance") }}</strong>
              <div class="row align-items-center">
                <div class="col-sm-auto flex-grow-1">
                  <strong class="number-heading h1">10454.29</strong>
                </div>
                <div class="col-sm-auto flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 d-md-flex">
          <div class="card w-100">
            <div class="card-body">
              <strong class="heading">{{ $t("Withdrawable-balance") }}</strong>
              <div class="row align-items-center">
                <div class="col-6 mb-2 mb-md-0">
                  <strong class="number-heading h1">9124.69</strong>
                </div>
                <div class="col-6 text-right">
                  <a href="#" class="btn btn-primary"
                    ><i class="icon-withdraw"></i>{{ $t("Withdraw") }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card graph-box">
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-7 col-md-4">
              <strong class="heading">{{ $t("OVERVIEW") }}</strong>
            </div>
            <div class="col-5 col-md-8 d-flex justify-content-end">
              <div class="tab-select jcf-select">
                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">{{
                  $t("Today")
                }}</a>
                <ul
                  class="dropdown-menu nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#todayOverview"
                      role="tab"
                      >{{ $t("Today") }}</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#weeklyOverview"
                      role="tab"
                      >{{ $t("This-Week") }}</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#monthlyOverview"
                      role="tab"
                      >{{ $t("This-Month") }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="todayOverview"
              role="tabpanel"
            >
              <div class="graph-holder">
                <img src="../assets/graph.png" alt="graph" />
              </div>
            </div>
            <div class="tab-pane fade" id="weeklyOverview" role="tabpanel">
              <div class="graph-holder">
                <img src="../assets/graph.png" alt="graph" />
              </div>
            </div>
            <div class="tab-pane fade" id="monthlyOverview" role="tabpanel">
              <div class="graph-holder">
                <img src="../assets/graph.png" alt="graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card links-card">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="has-border-top">
              {{ $t("Create") }} <br />{{ $t("Payment-Link") }}
            </h2>
            <a href="#" class="btn btn-primary"
              ><i class="icon-link"></i>{{ $t("Create") }}
              {{ $t("Payment-Link") }}</a
            >
          </div>
          <div class="col-12 col-md-6">
            <h2 class="has-border-top-secondary">
              {{ $t("See-Link") }}<br />{{ $t("History") }}
            </h2>
            <a href="#" class="btn btn-secondary"
              ><i class="icon-linkhistory"></i>{{ $t("Link-History") }}</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<i18n>
{
  "en": {
    "Dashboard": "Dashboard",
    "Total-balance": "Total balance",
    "Withdrawable-balance":"Withdrawable balance",
    "Withdraw":"Withdraw",
    "Account":"Account",
    "OVERVIEW":"OVERVIEW",
    "Today":"Today",
    "This-Week": "This Week",
    "This-Month": "This Month",
    "Create": "Create",
    "Payment-Link": "Payment Link",
    "See-Link": "See Link",
    "History": "History",
    "Link-History": "Link History"

  },
  "th": {
    "Dashboard": "แผงควบคุม",
    "Total-balance": "ยอดรวม",
    "Withdrawable-balance":"ยอดเงินที่ถอนได้",
    "Withdraw":"ถอน",
    "Account": "บัญชีผู้ใช้",
    "OVERVIEW":"ภาพรวม",
    "Today":"วันนี้",
    "This-Week": "ในสัปดาห์นี้",
    "This-Month": "เดือนนี้",
    "Create": "สร้าง",
    "Payment-Link": "ลิงค์ชำระเงิน",
    "See-Link": "ดูลิงค์",
    "History": "ประวัติศาสตร์",
    "Link-History": "ประวัติลิงค์"
  }
}
</i18n>
