<template>
  <div id="wrapper" class="login-page">
    <!-- header of the page -->
    <header id="header">
      <div class="logo">
        <a href="#"
          ><img
            src="../assets/logo.png"
            width="151"
            height="28"
            alt="Money Space"
        /></a>
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
      <main id="main">
        <section class="login-section">
          <ul class="signup-nav">
            <li><a href="#">Login</a></li>
            <li><a href="#" class="btn btn-primary">Signup</a></li>
          </ul>
          <div class="form-box">
            <form action="#" class="form">
              <h1 class="has-border-bottom">Sign UP</h1>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirm password</label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter Password"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="promo-code">Promotion code (if any)</label>
                <input
                  id="promo-code"
                  type="tel"
                  placeholder="Promo Code"
                  class="form-control"
                />
              </div>
              <div class="agree-checkbox">
                <label class="custom-checkbox"
                  ><input type="checkbox" /><span
                    >I agree with all terms and conditions. <br />Specified in
                    the Terms of Service Privacy Policy</span
                  ></label
                >
              </div>
              <button type="submit" class="btn btn-lg btn-primary w-100">
                Register<i class="icon-arrow-right"></i>
              </button>
            </form>
          </div>
          <div class="info-box" style="background-image: url(images/img01.jpg)">
            <div class="text has-border-top">
              <h2 class="display-1">Better, Faster, Secure</h2>
              <p>Start accepting payments with Money Space</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
