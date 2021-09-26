<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>Webhooks and API Keys</h1>
        <a
          href="#addWebhook"
          @click="openAddWebhookModal"
          class="btn btn-primary card-popup-opener"
          >+ Add Webhooks</a
        >
      </header>
      <div class="table-holder">
        <table class="custom-table">
          <thead>
            <tr>
              <th class="id-cell">ID</th>
              <th class="large-cell">DOMAIN</th>
              <th class="large-cell">DOMAIN WEBSITE UPDATE</th>
              <th>CREATE DATE</th>
              <th class="btn-cell">View</th>
              <th class="btn-cell">Edit</th>
              <th class="btn-cell">Delete</th>
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
          ><span class="sr-only">close</span></a
        >
        <div class="card-body">
          <h2>Add Webhook</h2>
          <div class="form-group">
            <label for="applicationType">Application Type:</label>
            <select id="applicationType" class="form-select">
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
            </select>
          </div>
          <div class="form-group">
            <label for="domain">Domain:</label>
            <input
              id="domain"
              type="text"
              placeholder="https://example.net"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="webhook">web Hook:</label>
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
                Cancel
              </button>
            </li>
            <li><button type="submit" class="btn btn-primary">Save</button></li>
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
          ><span class="sr-only">close</span></a
        >
        <div class="card-body">
          <h2>Webhook Detail</h2>
          <ul class="detail-list">
            <li>
              <strong class="heading">Application Type</strong>
              <strong class="value">Web Application</strong>
            </li>
            <li>
              <strong class="heading">Domain</strong>
              <strong class="value">https://worldwallet.net</strong>
            </li>
            <li>
              <strong class="heading">Web Hook:</strong>
              <strong class="value">https://worldwallet.net/webhook.php</strong>
            </li>
            <li>
              <strong class="heading">Secret ID</strong>
              <strong class="value">WP54W4W0198P8HEGCAA3</strong>
            </li>
            <li>
              <strong class="heading">Secret Key </strong>
              <strong class="value"
                >HnxToTosQTT3a9UQoSUiW4hzCZ5OLvb0wJfPr5tcle3fsmklZvd3ADIXTRCziQlATvZviqTpftUG0luN</strong
              >
            </li>
            <li>
              <strong class="heading">Terms and Conditions</strong>
              <strong class="value"
                >I acknowledge that I will NOT claim the refund or cancel the
                order.</strong
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
                Cancel
              </button>
            </li>
            <li>
              <button
                @click="closeDetailWebhookModal"
                type="submit"
                class="btn btn-primary"
              >
                Save
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
          <h2>Webhook Detail</h2>
          <div class="form-group">
            <label for="applicationType2">Application Type:</label>
            <select id="applicationType2" class="form-select">
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
              <option value="Web Application">Web Application</option>
            </select>
          </div>
          <ul class="detail-list">
            <li>
              <strong class="heading">Domain</strong>
              <strong class="value">https://worldwallet.net</strong>
            </li>
            <li>
              <strong class="heading">Web Hook:</strong>
              <strong class="value">https://worldwallet.net/webhook.php</strong>
            </li>
            <li>
              <strong class="heading">Secret ID</strong>
              <strong class="value">WP54W4W0198P8HEGCAA3</strong>
            </li>
            <li>
              <strong class="heading">Secret Key </strong>
              <strong class="value mb-2"
                >HnxToTosQTT3a9UQoSUiW4hzCZ5OLvb0wJfPr5tcle3fsmklZvd3ADIXTRCziQlATvZviqTpftUG0luN</strong
              >
              <button type="button" class="btn btn-primary">
                <i class="icon-repeat"></i>Regenerate API Key
              </button>
            </li>
            <li>
              <div class="form-group mb-0">
                <label for="termsConditions">Terms and Conditions</label>
                <select id="termsConditions" class="form-select">
                  <option
                    value="I acknowledge that I will NOT claim the refund or cancel the order."
                  >
                    I acknowledge that I will NOT claim the refund or cancel the
                    order.
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
                Cancel
              </button>
            </li>
            <li>
              <button
                @click="closeEditWebhookModal"
                type="submit"
                class="btn btn-primary"
              >
                Save
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
            <h5 class="h1">Delete</h5>
            <p>Are you sure you want to delete?</p>
          </div>
          <div class="modal-footer">
            <ul class="buttons-inline-list">
              <li>
                <button type="button" class="btn" data-bs-dismiss="modal">
                  Cancel
                </button>
              </li>
              <li>
                <button type="submit" class="btn btn-primary">yes</button>
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
</style>
