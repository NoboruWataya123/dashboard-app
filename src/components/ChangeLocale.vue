<template>
  <li class="language jcf-select">
    <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">{{
      currentLocale
    }}</a>
    <ul class="dropdown-menu">
      <li
        v-for="locale in locales"
        :key="locale"
        @click="switchLocale(locale)"
        :value="locale"
      >
        <a href="#">{{ locale }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "ChangeLocale",
  data() {
    return {
      locales: ["en", "th"],
      currentLocale: "en",
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.currentLocale = locale;
      }
    },
  },
};
</script>
