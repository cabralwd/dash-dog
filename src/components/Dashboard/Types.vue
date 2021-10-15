<template>
  <div class="container">
    <pie-chart v-if="showIn" :chartdata="types" :options="options" />
    <div class="display-1 text-center my-10" v-else>
      Não há dados no momento!
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import PieChart from "../Charts/Pie.vue";

export default {
  name: "Types",
  components: { PieChart },
  data() {
    return {
      showIn: false,
      types: {
        labels: [],
        datasets: [
          {
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
    ...mapState(["animals", "loaded"]),
  },
  methods: {
    ...mapMutations(["UPDATE_LOAD"]),
    ...mapActions(["getAnimals"]),
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
        labels.push(animal.animal_type);
        dados.push({ label: animal.animal_type });
      });

      const formatLabel = new Set(labels);
      dados = [...formatLabel];
      this.types.labels = dados;
      let qtdOcorrencias = 0;

      dados.forEach((element) => {
        animals.filter((el) => {
          if (el.animal_type === element) {
            qtdOcorrencias = qtdOcorrencias + 1;
          }
        });

        this.types.datasets[0].data.push(qtdOcorrencias);
        this.types.datasets[0].backgroundColor.push(
          `${this.getRandomColor()}90`
        );

        qtdOcorrencias = 0;
      });

      this.options.title.text = "Tipos de animais mais atendidos";
      this.showIn = true;
    },
  },
  async created() {
    await this.getAnimals();
    await this.formatChartAnimals(this.animals);
  },
};
</script>
