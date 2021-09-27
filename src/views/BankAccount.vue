<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>Bank List</h1>
        <a href="#addBankAccount" class="btn btn-primary card-popup-opener"
          >+ Add Bank Account</a
        >
      </header>
      <div class="table-holder">
        <table class="custom-table">
          <thead>
            <tr>
              <th class="large-cell">Bank</th>
              <th class="text-center">Type</th>
              <th class="text-center">Bank No.</th>
              <th class="text-center">Bank Book Status</th>
              <th class="btn-cell">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Bank">
                Bank of Ayudhya Public Company <br />Limited (BAY)
              </td>
              <td class="text-center" data-title="Type">Personal</td>
              <td class="text-center" data-title="Bank No.">
                1188272778199171
              </td>
              <td class="text-center" data-title="Bank Book Status">
                <span class="status approved">Approve</span>
              </td>
              <td data-title="Delete">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalDelete"
                  ><i class="icon-trash"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td data-title="Bank">
                Bank of Ayudhya Public Company <br />Limited (BAY)
              </td>
              <td class="text-center" data-title="Type">Personal</td>
              <td class="text-center" data-title="Bank No.">
                1188272778199171
              </td>
              <td class="text-center" data-title="Bank Book Status">
                <span class="status approved">Approve</span>
              </td>
              <td data-title="Delete">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalDelete"
                  ><i class="icon-trash"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
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
    "Bank Account": "Bank Account",
    "Bank List": "Bank List",
    "Personal": "Personal",
    "Approve": "Approve",
    "Delete": "Delete",
    "Delete Bank Account": "Delete Bank Account",
    "Yes": "Yes",
    "No": "No",
    "Cancel": "Cancel",
    "Add Bank Account": "Add Bank Account",
    "Bank": "Bank",
    "Type": "Type",
    "Bank No.": "Bank No.",
    "Bank Book Status": "Bank Book Status"
  },
  "th": {
  }
}
</i18n>
