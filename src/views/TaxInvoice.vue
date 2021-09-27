<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>{{ $t("Tax Invoice") }}</h1>
        <strong class="acc-id">{{ $t("Account") }} ID: B2018061028</strong>
      </header>
      <div class="card graph-box">
        <div class="card-body">
          <table class="table invoice-table">
            <thead>
              <tr>
                <th>{{ $t("Download") }}</th>
                <th>{{ $t("Month") }}</th>
                <th>{{ $t("Date Downloaded") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong class="file-name"
                    ><i class="icon-pdf"></i>T202918881902</strong
                  >
                </td>
                <td>September 2020</td>
                <td>2 / 31 / 2020</td>
              </tr>
              <tr>
                <td>
                  <strong class="file-name"
                    ><i class="icon-pdf"></i>T202918881942</strong
                  >
                </td>
                <td>July 2020</td>
                <td>2 / 31 / 2020</td>
              </tr>
              <tr>
                <td>
                  <strong class="file-name"
                    ><i class="icon-pdf"></i>T202918881532</strong
                  >
                </td>
                <td>June 2020</td>
                <td>2 / 31 / 2020</td>
              </tr>
              <tr>
                <td>
                  <strong class="file-name"
                    ><i class="icon-check"></i>{{ $t("Downloaded") }}</strong
                  >
                </td>
                <td>March 2020</td>
                <td>2 / 31 / 2020</td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item d-none">
                <a class="page-link prev" href="#">{{ $t("Previous") }}</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item">
                <a class="page-link next" href="#">{{ $t("Next") }}</a>
              </li>
            </ul>
          </nav>
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
    "Tax Invoice": "Tax Invoice",
    "Account ID: B2018061028": "Account ID: B2018061028",
    "Download": "Download",
    "Month": "Month",
    "Date Downloaded": "Date Downloaded",
    "Downloaded": "Downloaded",
    "Page navigation example": "Page navigation example",
    "Previous": "Previous",
    "Next": "Next"
  },
  "th": {
    "Tax Invoice": "ใบกำกับภาษี",
    "Account": "บัญชี",
    "Download": "ดาวน์โหลด",
    "Month": "เดือน",
    "Date Downloaded": "วันที่ดาวน์โหลด",
    "Downloaded": "ดาวน์โหลดแล้ว",
    "Page navigation example": "ตัวอย่างการนำทางหน้า",
    "Previous": "ก่อนหน้า",
    "Next": "ต่อไป"
  }
}
</i18n>
