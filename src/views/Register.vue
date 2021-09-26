<template>
  <main id="main">
    <section class="login-section">
      <ul class="signup-nav">
        <li>
          <router-link to="/login"><a>Login</a></router-link>
        </li>
        <li>
          <router-link to="/register"
            ><a class="btn btn-primary">Signup</a></router-link
          >
        </li>
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
            <input id="phone" type="tel" placeholder="+" class="form-control" />
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
                >I agree with all terms and conditions. <br />Specified in the
                Terms of Service Privacy Policy</span
              ></label
            >
          </div>
          <button type="submit" class="btn btn-lg btn-primary w-100">
            Register<i class="icon-arrow-right"></i>
          </button>
        </form>
      </div>
      <div class="info-box">
        <div class="text has-border-top">
          <h2 class="display-1">Better, Faster, Secure</h2>
          <p>Start accepting payments with Money Space</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.info-box {
  background-image: url(../assets/img01.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
* {
  text-decoration: none;
}
</style>
