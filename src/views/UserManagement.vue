<template>
  <main id="main" class="has-sidebar">
    <section class="section dashboard-section">
      <header class="header">
        <h1>{{ $t("User Management") }}</h1>
      </header>
      <div class="row">
        <div class="col-12 col-xxl-7">
          <div class="card">
            <div class="card-body py-md-10">
              <p>{{ $t("Allow More") }}.</p>
              <a href="#newMember" class="btn btn-primary card-popup-opener"
                >+ {{ $t("Add User") }}</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-xxl-5">
          <div class="card">
            <div class="card-body">
              <h3 class="d-none d-md-block">{{ $t("Members") }}</h3>
              <form action="#" class="search-form mb-lg-3">
                <div class="form-group">
                  <label for="search"><i class="icon-search"></i></label>
                  <input
                    id="search"
                    type="search"
                    placeholder="Search Team Member"
                    class="form-control"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  {{ $t("Search") }}
                </button>
              </form>
              <!-- members list -->
              <div class="members-list">
                <!-- member -->
                <div class="member">
                  <div class="info">
                    <div class="author-image"><i class="icon-user"></i></div>
                    <strong class="title">Danny Brown</strong>
                    <span class="email">danny@gmail.com</span>
                  </div>
                  <ul class="buttons-inline-list">
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-check"></i>{{ $t("Rules") }}</a
                      >
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-trash"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- member -->
                <div class="member">
                  <div class="info">
                    <div class="author-image"><i class="icon-user"></i></div>
                    <strong class="title">Danny Brown</strong>
                    <span class="email">danny@gmail.com</span>
                  </div>
                  <ul class="buttons-inline-list">
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-check"></i>{{ $t("Rules") }}</a
                      >
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-trash"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- member -->
                <div class="member">
                  <div class="info">
                    <div class="author-image"><i class="icon-user"></i></div>
                    <strong class="title">Danny Brown</strong>
                    <span class="email">danny@gmail.com</span>
                  </div>
                  <ul class="buttons-inline-list">
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-check"></i>{{ $t("Rules") }}</a
                      >
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-primary"
                        ><i class="icon-trash"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
    "User Management": "User Management",
    "Members": "Members",
    "Allow More": "Allow More users io access the portal by clicking on button below. User can get modification for every transaction",
    "Search Team Member": "Search Team Member",
    "Search": "Search",
    "Add User": "Add User",
    "Rules": "Rules",
    "Delete": "Delete",
  },
  "th": {
    "User Management": "การจัดการผู้ใช้",
    "Members": "สมาชิก",
    "Allow More": "อนุญาตให้ผู้ใช้เพิ่มเติม io เข้าถึงพอร์ทัลโดยคลิกที่ปุ่มด้านล่าง ผู้ใช้สามารถแก้ไขได้ทุกธุรกรรม",
    "Search Team Member": "ค้นหาสมาชิกในทีม",
    "Search": "ค้นหา",
    "Add User": "เพิ่มผู้ใช้",
    "Rules": "กฎ",
    "Delete": "ลบ",
  }
}
</i18n>
