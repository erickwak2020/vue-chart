<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
export default {
  name: 'App',
  components: {
    LineChart,
    BarChart
  },
}
</script>

<style>

</style>
