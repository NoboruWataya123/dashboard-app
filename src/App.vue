<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "@/components/AuthLayout";
import DashboardLayout from "@/components/DashboardLayout";

export default {
  components: {
    AuthLayout,
    DashboardLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "DashboardLayout"; // this is default layout if route meta is not set
      }
    },
  },
};
</script>
