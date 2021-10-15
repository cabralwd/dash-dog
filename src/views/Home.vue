<template>
  <v-app>
    <Header :voltar="false" />

    <v-main>
      <v-container tag="section">
        <v-row align="center">
          <v-col cols="12">
            <h1
              class="d-flex justify-center align-center text-center py-4 tertiary--text"
            >
              <v-icon
                color="tertiary"
                class="d-none d-md-inline-block mx-4"
                large
                >mdi-bone</v-icon
              >
              <span> Olá {{ nome }}, bem vindo! </span>
              <v-icon
                color="tertiary"
                class="d-none d-md-inline-block mx-4"
                large
                >mdi-bone</v-icon
              >
            </h1>
          </v-col>
        </v-row>
      </v-container>

      <v-container tag="section" :fluid="true" class="primary">
        <v-row justify="center">
          <v-spacer class="d-none d-md-block"></v-spacer>
          <v-col
            md="5"
            lg="4"
            offset-lg="1"
            offset-xl="2"
            align-self="center"
            class="py-0"
          >
            <v-img
              src="../assets/images/dogs.png"
              max-width="629"
              max-height="410"
              class="mx-auto"
            >
            </v-img>
          </v-col>
          <v-col
            md="5"
            align-self="center"
            class="white--text text-center text-md-left"
          >
            <h2 class="text-h4 text-md-h2 text-xl-h1">
              Mês do <br class="d-none d-md-block" />Cachorro Louco
            </h2>
            <p class="mb-0 subtitle-1 font-weight-bold contrast--text">
              Ajude na prevenção!
            </p>
            <p class="subtitle-2 font-weight-bold">
              Ofereça sempre as
              <span class="contrast--text">vacinações</span> para os tutures dos
              pets!
            </p>
          </v-col>
          <v-spacer class="d-none d-md-block"></v-spacer>
        </v-row>
      </v-container>

      <v-container tag="section" class="mt-16">
        <v-row>
          <v-col cols="12" class="text-center">
            <h3 class="tertiary--text">Análise das métricas:</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="5" xl="3">
            <div class="rounded-lg elevation-5">
              <Calls />
            </div>
          </v-col>
          <v-col cols="12" md="5" xl="3">
            <div class="rounded-lg elevation-5">
              <Types />
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container tag="section" class="mt-16">
        <v-row>
          <v-col cols="12" class="text-center">
            <h3 class="tertiary--text">Informações dos Pets:</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" xl="8">
            <List />
          </v-col>
        </v-row>
      </v-container>

      <Loading v-if="loaded" />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import Types from "@/components/Dashboard/Types.vue";
import Calls from "@/components/Dashboard/Calls.vue";
import List from "@/components/List/List.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "Home",
  components: {
    Types,
    Calls,
    List,
    Header,
  },
  computed: {
    ...mapState(["nome", "loaded"]),
  },
};
</script>
