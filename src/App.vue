<template>
  <div>
    <h1>Chart.js</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import {Chart, registerables} from "chart.js";

export default {
  name: 'App',
  components: {
  },
  mounted() {
    const ctx = document.getElementById('myChart');
    Chart.register(...registerables);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>

<style>

</style>
