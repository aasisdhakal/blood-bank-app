<template>
  <v-app>
    <DashboardLayout />
  </v-app>
</template>

<script>
import DashboardLayout from "@/components/DashboardLayout";
export default {
  name: 'App',
  components:{
    DashboardLayout
  }
};
</script>

<style>
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.5s;
}

.view-enter, .view-leave-to {
  opacity: 0;
}

.view-enter-to, .view-leave {
  opacity: 1;
}

</style>
