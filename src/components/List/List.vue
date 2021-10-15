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
      ></v-data-table>
    </v-card>
    <div class="display-1 text-center my-10" v-else>
      Não há dados no momento!
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "List",
  data() {
    return {
      showIn: false,
      search: "",
      headers: [
        {
          text: "Nome",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Tipo", value: "animal_type" },
        { text: "Aniversário", value: "birth" },
        { text: "Tutor", value: "owner" },
      ],
    };
  },
  computed: {
    ...mapState(["animals", "loaded"]),
  },
};
</script>
