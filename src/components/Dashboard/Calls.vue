<template>
  <div class="container">
    <bar-chart v-if="showIn" :chartdata="types" :options="options" />
    <div class="display-1 text-center my-10" v-else>
      Não há dados no momento!
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BarChart from "../Charts/Bars.vue";

export default {
  name: "Calls",
  components: { BarChart },
  data() {
    return {
      showIn: false,
      types: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: [],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "",
          fontColor: "#0C2239",
          position: "top",
          fontStyle: "bold",
          fontSize: 18,
        },
      },
    };
  },
  computed: {
    ...mapState(["appointments", "loaded"]),
  },
  methods: {
    ...mapMutations(["UPDATE_LOAD"]),
    ...mapActions(["getAppointments"]),
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    formatChartAnimals(animals) {
      let labels = [];
      let dados = [];

      animals.forEach((animal) => {
        labels.push(animal.type);
        dados.push({ label: animal.type });
      });

      const formatLabel = new Set(labels);
      dados = [...formatLabel];
      this.types.labels = dados;
      let qtdOcorrencias = 0;

      dados.forEach((element) => {
        animals.filter((el) => {
          if (el.type === element) {
            qtdOcorrencias = qtdOcorrencias + 1;
          }
        });

        this.types.datasets[0].data.push(qtdOcorrencias);
        this.types.datasets[0].backgroundColor.push(
          `${this.getRandomColor()}90`
        );

        qtdOcorrencias = 0;
      });

      this.options.title.text = "Tipos de atendimento";
      this.showIn = true;
    },
  },
  async created() {
    await this.getAppointments();
    await this.formatChartAnimals(this.appointments);
  },
};
</script>
