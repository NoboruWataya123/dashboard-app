<template>
  <ul class="buttons-nav d-none d-lg-flex">
    <li>
      <a href="#" class="btn btn-primary">{{ $t("Demo") }}</a>
    </li>
    <li>
      <a href="#" class="btn btn-outline-dark">{{ $t("Sandbox") }}</a>
    </li>
    <li>
      <a href="#" class="btn btn-outline-dark">{{ $t("Live") }}</a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>

<i18n>
{
  "en": {
    "Sandbox": "Sandbox",
    "Live": "Live",
    "Demo": "Demo",

  },
  "th": {
    "Sandbox": "แซนด์บ็อกซ์",
    "Live": "มีชีวิต",
    "Demo": "การสาธิต",
  }
}
</i18n>
