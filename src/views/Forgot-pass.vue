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
          <div class="heading-bar">
            <h1 class="has-border-bottom">Forgot password</h1>
            <p>
              Don't worry, just enter your registered email address and we'll
              send you a password reset link.
            </p>
          </div>
          <div class="form-group">
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              class="form-control"
            />
          </div>
          <div class="captcha-box">
            <img src="../assets/captcha.png" alt="captcha" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary w-100">
            Reset Password<i class="icon-arrow-right"></i>
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
.display-1 {
  font-weight: 700;
}
.btn btn-primary {
  border: 2px solid #fff;
}
</style>
