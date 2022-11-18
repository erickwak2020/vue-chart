<template>
  <canvas id="lineChart"></canvas>
</template>

<script>
import {Chart} from "chart.js/auto";
import {months} from '@/utils/ChartSampleUtils';
export default {
  name: "LineChart",
  mounted() {
    const labels = months({ count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const ctx = document.getElementById('lineChart');

    new Chart(ctx, {
      type: 'line',
      data: data
    });
  }
}
</script>

<style scoped>

</style>