<template>
  <canvas ref="myChart" id="barChart"></canvas>
</template>

<script>
export default {
  name: "BarChart",
  mounted() {

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const ctx = this.$refs.myChart;
    console.log(this);
    new this.$Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [{
          label: 'Acquisitions by year',
          data: data.map(row => row.count)
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

<style scoped>

</style>