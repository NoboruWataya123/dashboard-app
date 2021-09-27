<template>
  <main id="main">
    <div class="form-section container-fluid">
      <form action="#" class="form-card card profile-form">
        <div class="card-body">
          <div class="img-holder">
            <img src="../assets/img02.jpg" alt="image sdescription" />
          </div>
          <label class="btn btn-primary btn-upload"
            ><input type="file" class="d-none" /><i class="icon-camera"></i>
            {{ $t("Change Picture") }}</label
          >
          <div class="text">
            <h1>{{ $t("message") }}</h1>
            <p>{{ $t("You can change store profile detail here") }}</p>
          </div>
          <div class="form-group">
            <label for="name">{{ $t("Shop name") }}</label>
            <input
              id="name"
              type="text"
              placeholder="Betty Store"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="phone">{{ $t("Shop phone") }}</label>
            <input
              id="phone"
              type="tel"
              placeholder="088802912"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-lg btn-primary w-100">
            {{ $t("Save") }}
          </button>
        </div>
      </form>
    </div>
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
    "Change Picture": "Change Picture",
    "message": "Profile",
    "Shop name": "Shop name",
    "Shop phone": "Shop phone",
    "Save": "Save",
    "You can change store profile detail here": "You can change store profile detail here",
  },
  "th": {
    "Change Picture": "เปลี่ยนรูปภาพ",
    "message": "ประวัติโดยย่อ",
    "Shop name": "ชื่อร้าน",
    "Shop phone": "โทรศัพท์ร้าน",
    "Save": "บันทึก",
    "You can change store profile detail here": "คุณสามารถเปลี่ยนรายละเอียดร้านค้าได้ที่นี่",
  }
}
</i18n>
