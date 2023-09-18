<template>
  <div>
    <q-layout>
      <LandingHeader />
      <q-page-container>
        <router-view />
        <!-- This is where the HomePage will be rendered -->
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import LandingHeader from "src/components/LandingHeader.vue";

export default {
  name: "LandingLayout",
  components: { LandingHeader },
};
</script>

<style scoped></style>
