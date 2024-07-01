<template>
  <v-app>
    <div id="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
.v-application{
    background: #243441 !important;
}

.name-purchase{
    color: #6EED0A;
}

.details-purchase{
    color: #FFF;
    opacity: 100%;
}
</style>
