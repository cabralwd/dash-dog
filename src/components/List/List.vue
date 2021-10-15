<template>
  <v-data-table
    v-if="infos"
    :headers="headers"
    :items="infos"
    :items-per-page="8"
    class="elevation-2"
  ></v-data-table>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "List",
  data() {
    return {
      showIn: false,
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
      infos: [],
    };
  },
  computed: {
    ...mapState(["animals", "loaded"]),
  },
  methods: {
    animalsFormat() {
      console.log("oi");
      let arr = this.animals.map((item) => {
        item.birth = this.formatandoData(item.birth);
      });
      console.log(arr);
      this.infos = arr;
    },
    formatandoData(data) {
      return moment(
        new Date(data),
        ["ddd MMM DD YYYY HH:mm:ss Z+HHmm"],
        "pt-br",
        true
      ).fromNow();
    },
  },
  created() {
    // this.animalsFormat();
  },
};
</script>
