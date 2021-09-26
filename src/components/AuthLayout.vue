<template>
  <div id="wrapper" class="login-page">
    <!-- header of the page -->
    <header id="header">
      <div class="logo">
        <router-link to="/login">
          <a href="#"
            ><img
              src="../assets/logo.png"
              width="151"
              height="28"
              alt="Money Space"
          /></a>
        </router-link>
      </div>
      <a href="#" class="nav-opener"><span></span></a>
      <div class="nav-holder">
        <nav id="nav">
          <ul class="main-nav">
            <li><a href="#">Pricing &amp; Plans</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="content-wrapper">
      <!-- contain main informative part of the site -->
      <router-view> </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  text-decoration: none;
}
</style>
