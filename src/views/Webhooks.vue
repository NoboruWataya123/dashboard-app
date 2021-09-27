<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>{{ $t("Webhooks and API Keys") }}</h1>
        <a
          href="#addWebhook"
          @click="openAddWebhookModal"
          class="btn btn-primary card-popup-opener"
          >+ {{ $t("Add Webhooks") }}</a
        >
      </header>
      <div class="table-holder">
        <table class="custom-table">
          <thead>
            <tr>
              <th class="id-cell">{{ $t("ID") }}</th>
              <th class="large-cell">{{ $t("DOMAIN") }}</th>
              <th class="large-cell">{{ $t("DOMAIN WEBSITE UPDATE") }}</th>
              <th>{{ $t("CREATE DATE") }}</th>
              <th class="btn-cell">{{ $t("View") }}</th>
              <th class="btn-cell">{{ $t("Edit") }}</th>
              <th class="btn-cell">{{ $t("Delete") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="ID">102</td>
              <td data-title="DOMAIN">https://worldwallet.net</td>
              <td data-title="DOMAIN WEBSITE UPDATE">
                https://worldwallet.net/webhook.php
              </td>
              <td data-title="CREATE DATE">22:57 Friday 24 May 2019</td>
              <td class="text-center" data-title="View">
                <a @click="openDetailWebhookModal" class="card-popup-opener"
                  ><i class="icon-eye"></i
                ></a>
              </td>
              <td class="text-center" data-title="Edit">
                <a @click="openEditWebhookModal" class="card-popup-opener"
                  ><i class="icon-edit"></i
                ></a>
              </td>
              <td class="text-center" data-title="Delete">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalDelete"
                  ><i class="icon-trash"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td data-title="ID">102</td>
              <td data-title="DOMAIN">https://worldwallet.net</td>
              <td data-title="DOMAIN WEBSITE UPDATE">
                https://worldwallet.net/webhook.php
              </td>
              <td data-title="CREATE DATE">22:57 Friday 24 May 2019</td>
              <td class="text-center" data-title="View">
                <a @click="openDetailWebhookModal" class="card-popup-opener"
                  ><i class="icon-eye"></i
                ></a>
              </td>
              <td class="text-center" data-title="Edit">
                <a
                  @click="openEditWebhookModal"
                  href="#webhooksEdit"
                  class="card-popup-opener"
                  ><i class="icon-edit"></i
                ></a>
              </td>
              <td class="text-center" data-title="Delete">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalDelete"
                  ><i class="icon-trash"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <span class="card-popup-overlay"></span>
    <!-- card popup -->

    <div
      class="card-popup card"
      :class="{ active: openAddWebhook }"
      id="addWebhook"
    >
      <div class="scroll-area">
        <a href="#" @click="closeAddWebhookModal" class="btn-close"
          ><span class="sr-only">{{ $t("close") }}</span></a
        >
        <div class="card-body">
          <h2>{{ $t("Add Webhook") }}</h2>
          <div class="form-group">
            <label for="applicationType">{{ $t("Application Type") }}:</label>
            <select id="applicationType" class="form-select">
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
            </select>
          </div>
          <div class="form-group">
            <label for="domain">{{ $t("Domain") }}:</label>
            <input
              id="domain"
              type="text"
              placeholder="https://example.net"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="webhook">{{ $t("web Hook") }}:</label>
            <input
              id="webhook"
              type="text"
              placeholder="https://example.net/webhook.php"
              class="form-control"
            />
          </div>
        </div>
        <div class="card-footer">
          <ul class="buttons-inline-list">
            <li>
              <button
                @click="closeAddWebhookModal"
                type="button"
                class="btn popup-close"
              >
                {{ $t("Cancel") }}
              </button>
            </li>
            <li>
              <button type="submit" class="btn btn-primary">
                {{ $t("Save") }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="card-popup card"
      :class="{ active: openDetailWebhook }"
      id="webhooksDetail"
    >
      <div class="scroll-area">
        <a href="#" class="btn-close" @click="closeDetailWebhookModal"
          ><span class="sr-only">{{ $t("close") }}</span></a
        >
        <div class="card-body">
          <h2>{{ $t("Webhook Detail") }}</h2>
          <ul class="detail-list">
            <li>
              <strong class="heading">{{ $t("Application Type") }}</strong>
              <strong class="value">{{ $t("Web Application") }}</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Domain") }}</strong>
              <strong class="value">https://worldwallet.net</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Web Hook") }}:</strong>
              <strong class="value">https://worldwallet.net/webhook.php</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Secret ID") }}</strong>
              <strong class="value">WP54W4W0198P8HEGCAA3</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Secret Key") }} </strong>
              <strong class="value"
                >HnxToTosQTT3a9UQoSUiW4hzCZ5OLvb0wJfPr5tcle3fsmklZvd3ADIXTRCziQlATvZviqTpftUG0luN</strong
              >
            </li>
            <li>
              <strong class="heading">{{ $t("Terms and Conditions") }}</strong>
              <strong class="value"
                >{{
                  $t(
                    "I acknowledge that I will NOT claim the refund or cancel the order"
                  )
                }}.</strong
              >
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <ul class="buttons-inline-list">
            <li>
              <button
                @click="closeDetailWebhookModal"
                type="button"
                class="btn popup-close"
              >
                {{ $t("Cancel") }}
              </button>
            </li>
            <li>
              <button
                @click="closeDetailWebhookModal"
                type="submit"
                class="btn btn-primary"
              >
                {{ $t("Save") }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="card-popup card"
      :class="{ active: openEditWebhook }"
      id="webhooksEdit"
    >
      <div class="scroll-area">
        <a href="#" @click="closeEditWebhookModal" class="btn-close"
          ><span class="sr-only">close</span></a
        >
        <div class="card-body">
          <h2>{{ $t("Webhook Detail") }}</h2>
          <div class="form-group">
            <label for="applicationType2">{{ $t("Application Type") }}:</label>
            <select id="applicationType2" class="form-select">
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
            </select>
          </div>
          <ul class="detail-list">
            <li>
              <strong class="heading">{{ $t("Domain") }}</strong>
              <strong class="value">https://worldwallet.net</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Web Hook") }}:</strong>
              <strong class="value">https://worldwallet.net/webhook.php</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Secret ID") }}</strong>
              <strong class="value">WP54W4W0198P8HEGCAA3</strong>
            </li>
            <li>
              <strong class="heading">{{ $t("Secret Key") }} </strong>
              <strong class="value mb-2"
                >HnxToTosQTT3a9UQoSUiW4hzCZ5OLvb0wJfPr5tcle3fsmklZvd3ADIXTRCziQlATvZviqTpftUG0luN</strong
              >
              <button type="button" class="btn btn-primary">
                <i class="icon-repeat"></i>{{ $t("Regenerate API Key") }}
              </button>
            </li>
            <li>
              <div class="form-group mb-0">
                <label for="termsConditions">{{
                  $t("Terms and Conditions")
                }}</label>
                <select id="termsConditions" class="form-select">
                  <option
                    value="I acknowledge that I will NOT claim the refund or cancel the order."
                  >
                    {{
                      $t(
                        "I acknowledge that I will NOT claim the refund or cancel the order"
                      )
                    }}.
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <ul class="buttons-inline-list">
            <li>
              <button
                @click="closeEditWebhookModal"
                type="button"
                class="btn popup-close"
              >
                {{ $t("Cancel") }}
              </button>
            </li>
            <li>
              <button
                @click="closeEditWebhookModal"
                type="submit"
                class="btn btn-primary"
              >
                {{ $t("Save") }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalDelete"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-delete">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h5 class="h1">{{ $t("Delete") }}</h5>
            <p>{{ $t("Are you sure you want to delete") }}?</p>
          </div>
          <div class="modal-footer">
            <ul class="buttons-inline-list">
              <li>
                <button type="button" class="btn" data-bs-dismiss="modal">
                  {{ $t("Cancel") }}
                </button>
              </li>
              <li>
                <button type="submit" class="btn btn-primary">
                  {{ $t("yes") }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Webhooks",
  data() {
    return {
      openEditWebhook: false,
      openAddWebhook: false,
      openDetailWebhook: false,
    };
  },
  methods: {
    openEditWebhookModal() {
      this.openEditWebhook = true;
    },
    openAddWebhookModal() {
      this.openAddWebhook = true;
    },
    openDetailWebhookModal() {
      this.openDetailWebhook = true;
    },
    closeEditWebhookModal() {
      this.openEditWebhook = false;
    },
    closeAddWebhookModal() {
      this.openAddWebhook = false;
    },
    closeDetailWebhookModal() {
      this.openDetailWebhook = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-popup {
  position: fixed;
}
* {
  text-decoration: none;
}
.card-popup-opener {
  cursor: pointer;
}
#main {
  background-color: #f5f9ff !important;
}
.table-holder {
  font-family: circular sans-serif !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  line-height: 1.2 !important;
}
</style>

<i18n>
{
  "en": {
    "Webhooks and API Keys": "Webhooks and API Keys",
    "Webhooks_detail": "Webhooks Detail",
    "Add Webhooks": "Add Webhooks",
    "Edit Webhooks": "Edit Webhooks",
    "Webhooks": "Webhooks",
    "ID": "ID",
    "DOMAIN": "Domain",
    "Domain": "Domain",
    "DOMAIN WEBSITE UPDATE": "Domain Website Update",
    "CREATE DATE": "Create Date",
    "Web hook": "Webhook",
    "Web Hook": "Web Hook",
    "web Hook": "web Hook",
    "Secret ID": "Secret ID",
    "Secret Key": "Secret Key",
    "Terms and Conditions": "Terms and Conditions",
    "Regenerate API Key": "Regenerate API Key",
    "Delete": "Delete",
    "Cancel": "Cancel",
    "yes": "yes",
    "Yes": "Yes",
    "View": "view",
    "Edit": "Edit",
    "Add": "Add",
    "Save": "Save",
    "Delete": "Delete",
    "Application Type": "Application Type",
    "Web Application": "Web Application",
    "Webhooks_detail": "Webhooks Detail",
    "Are you sure you want to delete?": "Are you sure you want to delete?",
    "I acknowledge that I will NOT claim the refund or cancel the order": "I acknowledge that I will NOT claim the refund or cancel the order"
  },
  "th": {
    "Webhooks and API Keys": "เว็บฮุคและคีย์ API",
    "Webhooks detail": "รายละเอียดเว็บฮุค",
    "Add Webhooks": "เพิ่มเว็บฮุค",
    "Edit Webhooks": "แก้ไขเว็บฮุค",
    "Webhooks": "เว็บฮุค",
    "ID": "ID",
    "DOMAIN": "โดเมน",
    "Domain": "โดเมน",
    "DOMAIN WEBSITE UPDATE": "การอัปเดตเว็บไซต์โดเมน",
    "CREATE DATE": "วันที่สร้าง",
    "Webhook": "เว็บฮุค",
    "Web Hook": "เว็บฮุค",
    "web Hook": "เว็บฮุค",
    "Secret ID": "ความลับ ID",
    "Secret Key": "รหัสลับ",
    "Terms and Conditions": "ข้อกำหนดและเงื่อนไข",
    "Regenerate API Key": "สร้างคีย์ API ใหม่",
    "Delete": "ลบ",
    "Cancel": "ยกเลิก",
    "yes": "ใช่",
    "Yes": "ใช่",
    "View": "ดู",
    "Edit": "แก้ไข",
    "Add": "เพิ่ม",
    "Application Type": "ประเภทการสมัคร",
    "Save": "บันทึก",
    "Web Application": "เว็บแอปพลิเคชัน",
    "Webhooks_detail": "รายละเอียดเว็บฮุค",
    "Are you sure you want to delete": "คุณแน่ใจหรือว่าต้องการลบ?",
    "I acknowledge that I will NOT claim the refund or cancel the order": "ฉันรับทราบว่าฉันจะไม่ขอรับเงินคืนหรือยกเลิกคำสั่งซื้อ"
  },
}
</i18n>
