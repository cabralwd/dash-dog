<template>
  <div>
    <v-card v-if="animals">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="animals"
        :search="search"
        :items-per-page="8"
        @click:row="showDetalhes"
      ></v-data-table>
      <div class="text-center" v-if="animal">
        <v-dialog v-model="showModal" width="500">
          <v-card>
            <v-card-title class="grey lighten-2">
              <h3>Veja mais informações do seu Pet</h3>
            </v-card-title>

            <v-card-text class="mt-5">
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <ul style="list-style: circle;" class="primary--text">
                      <li>Nome do Pet: {{ animal.name }}</li>
                      <li>Tipo: {{ animal.animal_type }}</li>
                      <li>Nacimento: {{ animal.birth | formatandoData }}</li>
                      <li>Tutor: {{ animal.owner }}</li>
                    </ul>
                  </v-col>
                  <v-col cols="12" md="6" align-self="end">
                    <v-btn
                      color="secondary"
                      :to="{ name: 'Compromissos', params: { id: animal.id } }"
                      >compromissos</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="showModal = false">
                fechar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
    <div class="display-1 text-center my-10" v-else>
      Não há dados no momento!
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "List",
  data() {
    return {
      showIn: false,
      search: "",
      showModal: false,
      headers: [
        { text: "Nome", value: "name" },
        { text: "Tipo", value: "animal_type" },
        { text: "Aniversário", value: "birth" },
        { text: "Tutor", value: "owner" },
      ],
    };
  },
  computed: {
    ...mapState(["animals", "loaded", "animal"]),
  },
  methods: {
    ...mapActions(["getAnimals"]),
    async showDetalhes(row) {
      await this.getAnimals(row.id);
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss">
tr {
  cursor: pointer;
}
</style>
