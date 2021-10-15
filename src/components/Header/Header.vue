<template>
  <v-app-bar
    app
    style="background: linear-gradient(90deg, #68babf 0%, #2f80cf 100%)"
    dark
  >
    <v-spacer></v-spacer>
    <v-icon
      v-if="voltar"
      @click="$router.go(-1)"
      color="tertiary"
      class="mx-4"
      style="cursor: pointer"
      large
      >mdi-arrow-left</v-icon
    >

    <span class="text-uppercase font-weight-black display-1">Dashdog</span>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: { voltar: Boolean },
};
</script>
