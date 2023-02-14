<template>
<div class="chart-container">
  <Bar v-if='chartData.labels' id="my-chart-id" :options="chartOptions" :data="chartData" />
</div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
import { bitcoinService } from "@/services/bitcoin.service.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "LineChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Value (USD)",
            backgroundColor: "#f7931a99",
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    this.prices = await bitcoinService.getMarketPriceHistory();
    console.log('this.prices.values:',this.prices.values)
    this.chartData.labels = this.prices.values.map(value => {
       const date = new Date(value.x*1000)
       return `${date.getDate() + 1}.${date.getMonth() + 1}` 
        })
    this.chartData.datasets[0].data = this.prices.values.map(value => value.y)
    console.log('this.chartData:',this.chartData)
  },
};
</script>
