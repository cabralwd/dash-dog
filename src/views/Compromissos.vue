<template>
  <v-app
    ><Header :voltar="true" />
    <v-container class="mt-16">
      <v-row v-if="agenda.length > 0">
        <v-col cols="12">
          <h1
            class="d-flex justify-center align-center text-center py-4 tertiary--text"
          >
            <v-icon color="tertiary" class="d-none d-md-inline-block mx-4" large
              >mdi-bone</v-icon
            >
            <span> Veja os compromisso do Pet </span>
            <v-icon color="tertiary" class="d-none d-md-inline-block mx-4" large
              >mdi-bone</v-icon
            >
          </h1>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="3"
          xl="2"
          v-for="compromisso in agenda"
          :key="compromisso.id"
        >
          <v-card class="px-5 py-5">
            <p class="text-center tertiary-text text-body-1 font-weight-bold">
              {{ compromisso.type }}
            </p>
            <p class="text-center tertiary-text text-body-1 font-weight-bold">
              {{ compromisso.details }}
            </p>
            <p class="text-center tertiary-text text-body-1 font-weight-bold">
              {{ compromisso.created_at | formatandoData }}
            </p>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col class="display-1 text-center my-10">
          Não há compromissos para esse Pet
        </v-col>
      </v-row>
    </v-container>

    <Loading v-if="loaded" />
  </v-app>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Compromissos",
  components: {
    Header,
  },
  computed: {
    ...mapState(["agenda", "loaded"]),
  },
  methods: {
    ...mapActions(["getAgenda"]),
  },
  async created() {
    await this.getAgenda(this.$route.params.id);
  },
};
</script>

<style></style>
